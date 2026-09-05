/* ==========================================================================
   Stronghold A3 — Internal Page Access Gate (auth-gate.js)
   --------------------------------------------------------------------------
   Real authentication for a static site via Netlify Identity (GoTrue).
   This is NOT a client-side password check — the page markup is only
   revealed after Netlify Identity confirms a signed-in user, and (if
   configured) that the user carries the required role. The underlying
   page content is still delivered to any browser that requests the file,
   so for anything legally or financially sensitive (payroll, PNP-SOSIA
   licenses, NBI clearances, contracts) keep the real records in the
   Encrypted Document Vault / backend, and use this gate only to control
   who can reach the dashboard UI that links out to them.

   SETUP REQUIRED (one-time, in the Netlify dashboard):
     1. Site settings -> Identity -> Enable Identity.
     2. Identity -> Registration -> set to "Invite only" (recommended).
     3. Invite each staff member's email under Identity -> Invite users.
     4. Optional role gating: in Identity -> a user's "app_metadata",
        add {"roles": ["staff"]}. Then set data-gate-role="staff" on the
        <body> tag of the page you want restricted to that role only.
        Leave data-gate-role off to allow any authenticated Identity user.
     5. Deploy. Until Identity is enabled, this gate will show a clear
        "not yet configured" message instead of pretending to be secure.
   ========================================================================== */

(function () {
    "use strict";

    function ready(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    }

    ready(function () {
        var overlay = document.getElementById("gate-overlay");
        var content = document.getElementById("gated-content");
        var statusEl = document.getElementById("gate-status");
        var loginBtn = document.getElementById("gate-login-btn");
        var logoutBtn = document.getElementById("gate-logout-btn");
        var requiredRole = document.body.getAttribute("data-gate-role") || null;

        if (!overlay || !content) return; // page isn't using the gate markup

        function setStatus(message, kind) {
            if (!statusEl) return;
            statusEl.textContent = message;
            statusEl.className = "gate-status show gate-" + (kind || "info");
        }

        function unlock() {
            overlay.classList.add("gate-hidden");
            content.classList.add("is-unlocked");
        }

        function lock() {
            overlay.classList.remove("gate-hidden");
            content.classList.remove("is-unlocked");
        }

        function userHasRole(user) {
            if (!requiredRole) return true;
            var roles = (user && user.app_metadata && user.app_metadata.roles) || [];
            return roles.indexOf(requiredRole) !== -1;
        }

        // Netlify Identity widget failed to load entirely (script blocked,
        // offline, or the site isn't deployed on Netlify yet).
        if (typeof window.netlifyIdentity === "undefined") {
            setStatus(
                "Staff login isn't configured for this environment yet. " +
                "Enable Netlify Identity for this site, invite staff by email, " +
                "then reload this page.",
                "pending"
            );
            if (loginBtn) loginBtn.disabled = true;
            return;
        }

        var identity = window.netlifyIdentity;

        identity.on("init", function (user) {
            if (user && userHasRole(user)) {
                unlock();
            } else if (user) {
                lock();
                setStatus("Your account is signed in but isn't authorized for this page.", "error");
            } else {
                lock();
                setStatus("Sign in with your Stronghold A3 staff email to continue.", "info");
            }
        });

        identity.on("login", function (user) {
            if (userHasRole(user)) {
                unlock();
                identity.close();
            } else {
                lock();
                setStatus("This account doesn't have access to this page. Contact an admin.", "error");
            }
        });

        identity.on("logout", function () {
            lock();
            setStatus("You've been signed out.", "info");
        });

        identity.on("error", function (err) {
            setStatus("Login error: " + (err && err.message ? err.message : "please try again."), "error");
        });

        if (loginBtn) {
            loginBtn.addEventListener("click", function () {
                identity.open("login");
            });
        }
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                identity.logout();
            });
        }

        identity.init();
    });
})();
