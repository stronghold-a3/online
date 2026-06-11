/* ============================================================
   STRONGHOLD A3 — SINGLE PAGE APPLICATION
   Military-Industrial PWA | Eastern Visayas Security
   ============================================================ */

'use strict';

// ─── CONFIG ───
const APP = {
  name: 'Stronghold A3 Security Agency',
  tagline: '"Zero-Liability" Security Partner',
  region: 'Region VIII | Eastern Visayas',
  logo: 'https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Stronghold%20Logo.png',
  smsUrl: 'https://resilient-secure-mobile.deploypad.app/',
  moatImg: 'https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Zero-Liablity%20Moat.png',
  vmvImg: 'https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/VMV.png',
  gpImg: 'https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Guiding%20Principles.png',
  stratMapImg: 'https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/The%20Stronghiold%20Sequence-2.png',
  password: 'strongholda3777',
};

// ─── STATE ───
let state = {
  page: 'home',
  authenticated: false,
  mobileNavOpen: false,
};

// ─── BSC DATA ───
const BSC_DATA = {
  financial: {
    label: 'Financial', icon: '💰', color: '#3B82F6',
    bg: 'rgba(59,130,246,0.15)',
    items: [
      {
        activity: 'Embed automatic inflation-adjustment / fuel-surcharge clauses in all new/renewing contracts',
        kpi: 'Contract Escalation Penetration: % of active contracts with dynamic pricing clauses',
        baseline: '0% contracts have dynamic pricing; margins vulnerable to rising costs',
        target: '100% of new and renewing contracts include adjustment clauses',
        phase: 3, timeline: 'Months 5–7', owner: 'Ops Manager',
        tooltip: 'Phase 3 — Resilient Pricing\nTarget: 100% contract coverage\nTimeline: Months 5–7\nOwner: Ops Manager'
      },
      {
        activity: 'Transition to active B2B outreach — "Guard + Remote Monitoring" packages',
        kpi: 'Hybrid Margin Generation: Net monthly margin from new hybrid tech contracts (PHP 50k/mo each)',
        baseline: 'Passive word-of-mouth referrals; low-margin traditional guarding only',
        target: '3 new hybrid contracts secured (est. PHP 50k net margin/mo each)',
        phase: 4, timeline: 'Months 8–12', owner: 'GM',
        tooltip: 'Phase 4 — Zero-Liability Market Capture\nTarget: 3 hybrid contracts @ PHP 50k/mo\nTimeline: Months 8–12\nOwner: GM'
      },
      {
        activity: 'Implement strict RACI protocol for lead follow-up to eliminate dropped opportunities',
        kpi: 'Lead Conversion Velocity: % of inquiries receiving initial contact within 24 hours',
        baseline: 'High rate of dropped/delayed leads due to structural role ambiguity',
        target: '100% adherence to 24-hr follow-up SOP; zero dropped leads',
        phase: 2, timeline: 'Months 2–4', owner: 'Ops Manager',
        tooltip: 'Phase 2 — Digital Transformation\nTarget: Zero dropped leads\nTimeline: Months 2–4\nOwner: Ops Manager'
      },
      {
        activity: '"Zero-Liability" Market Capture — 15–20% growth in high-value client acquisition (BPO/NGO/LGU)',
        kpi: '15–20% growth in high-value client acquisition rate within 12 months',
        baseline: 'Passive word-of-mouth referral system (Reactive Market Positioning)',
        target: '15–20% growth in new institutional contracts',
        phase: 4, timeline: 'Months 8–12', owner: 'GM',
        tooltip: 'Phase 4 — Zero-Liability Capture\nTarget: 15-20% institutional growth\nTimeline: Months 8–12\nOwner: GM'
      },
    ]
  },
  customer: {
    label: 'Customer', icon: '🏢', color: '#22C55E',
    bg: 'rgba(34,197,94,0.15)',
    items: [
      {
        activity: 'Package physical guarding with RA 10121-compliant emergency response and evacuation protocols',
        kpi: 'DRRM Bundle Attachment Rate: Number of new institutional contracts with formalized DRRM protocols',
        baseline: 'Traditional physical guarding only; no formalized disaster response bundling',
        target: '3 new institutional contracts bundled with DRRM protocols in Year 1',
        phase: 4, timeline: 'Months 8–12', owner: 'Ops Manager',
        tooltip: 'DRRM Integration — RA 10121\nTarget: 3 bundled institutional contracts\nTimeline: Months 8–12\nOwner: Ops Manager'
      },
      {
        activity: 'Deploy mobile-friendly guard tour and incident reporting for real-time client transparency',
        kpi: 'Digital Transparency Index: % of clients receiving automated digital reports',
        baseline: 'Analog operational bottlenecks; paper-based logging',
        target: '100% of active clients receive automated daily/weekly reports',
        phase: 2, timeline: 'Months 2–4', owner: 'Ops Manager',
        tooltip: 'Cloud SMS Deployment\nTarget: 100% digital report coverage\nTimeline: Months 2–4\nOwner: Ops Manager'
      },
      {
        activity: 'Deploy Cloud SMS for client satisfaction measurement (CSAT on quarterly surveys)',
        kpi: 'Client Satisfaction Score (CSAT): Score on quarterly service surveys',
        baseline: 'Unmeasured client satisfaction',
        target: '>80% CSAT measuring "crisis responsiveness"',
        phase: 2, timeline: 'Months 2–4', owner: 'Ops Manager',
        tooltip: 'CSAT Measurement Program\nTarget: >80% satisfaction score\nTimeline: Months 2–4\nOwner: Ops Manager'
      },
    ]
  },
  internal: {
    label: 'Internal Processes', icon: '⚙️', color: '#F59E0B',
    bg: 'rgba(245,158,11,0.15)',
    items: [
      {
        activity: 'Establish Digital Document Vault for PNP-SOSIA and DOLE DO-174 registrations + quarterly mock audits',
        kpi: 'Document retrieval speed < 15 minutes during mock audits; zero compliance violations',
        baseline: 'Disorganized manual record-keeping; reliance on physical files vulnerable to destruction',
        target: 'Retrieval < 15 minutes; zero compliance violations or license suspensions',
        phase: 1, timeline: 'Weeks 1–4', owner: 'Admin',
        tooltip: 'Compliance Firewall — Phase 1\nTarget: <15 min retrieval; zero violations\nTimeline: Weeks 1–4\nOwner: Admin'
      },
      {
        activity: 'Deploy "3-Bridge Communication System" (Offline App → SMS Gateway → Viber/Radio) + BCP Activation Protocol',
        kpi: 'BCP Execution Fidelity: % adherence to Crisis-Proof Workflow checklist during Signal No. 2+ events',
        baseline: 'Total operational paralysis during power/network outages due to analog processes',
        target: '100% BCP execution fidelity with zero data loss during drills or actual events',
        phase: 1, timeline: 'Weeks 1–4', owner: 'Ops Manager',
        tooltip: '3-Bridge Communication\nOffline SMS → SMS Gateway → Viber/Radio\nTarget: 100% BCP fidelity\nTimeline: Weeks 1–4'
      },
      {
        activity: 'Adopt "Offline-First" Cloud SMS and enforce 72-Hour Client Onboarding SOP',
        kpi: 'Admin Overhead Reduction: % reduction in man-hours on manual payroll, scheduling, paper encoding',
        baseline: 'Heavy admin overhead; reliance on manual transactions; fragmented operations',
        target: '40% reduction in manual admin overhead; 100% adherence to 72-Hour Onboarding SOP',
        phase: 2, timeline: 'Months 2–4', owner: 'Admin',
        tooltip: 'Digital Transformation — Phase 2\nTarget: 40% admin overhead reduction\nTimeline: Months 2–4\nOwner: Admin'
      },
    ]
  },
  learning: {
    label: 'Learning & Growth', icon: '📈', color: '#A855F7',
    bg: 'rgba(168,85,247,0.15)',
    items: [
      {
        activity: 'Talent Fortress: "Guard as Ambassador" program with localized emergency relief packages + decent wage perks',
        kpi: 'Guard Attrition Rate: Annual voluntary turnover percentage',
        baseline: 'Regional industry average attrition 15–25%; asymmetric labor drain to Manila/OFW',
        target: 'Attrition < 5% annually',
        phase: 3, timeline: 'Months 5–7', owner: 'Admin',
        tooltip: 'Talent Fortress Strategy\nRegional avg: 15-25% attrition\nTarget: <5% annually\nTimeline: Months 5–7'
      },
      {
        activity: 'Guard as Ambassador — welfare program with emergency relief packages and formal wage perks',
        kpi: 'Welfare Program Utilization: % participation in emergency relief/welfare programs',
        baseline: 'Regional industry average attrition 15–25%; no structured welfare programs',
        target: 'Welfare participation > 80%',
        phase: 3, timeline: 'Months 5–7', owner: 'Admin',
        tooltip: 'Guard Welfare Initiative\nTarget: >80% program participation\nTimeline: Months 5–7\nOwner: Admin'
      },
      {
        activity: '"Digital Bayanihan" Change Management with "Tech Champions" + monthly "Digital Guardian" recognition',
        kpi: '100% of field staff actively using Cloud SMS; supervisors achieving Digital Guardian recognition',
        baseline: 'Tech-anxiety; staff accustomed to manual paper logs',
        target: '100% tech adoption compliance',
        phase: 2, timeline: 'Months 2–4', owner: 'Ops Manager',
        tooltip: 'Digital Bayanihan Protocol\nTarget: 100% Cloud SMS adoption\nTimeline: Months 2–4\nOwner: Ops Manager'
      },
    ]
  }
};

const PHASES = [
  {
    num: 1,
    name: 'Crisis-Proofing',
    subtitle: 'Foundation & Resilience',
    timeline: 'Weeks 1–4',
    color: '#EF4444',
    icon: '🛡️',
    items: [
      'Deploy Digital Document Vault for all PNP-SOSIA & DOLE DO-174 compliance records',
      '3-Bridge Communication System: Offline SMS App → SMS Gateway → Viber/Radio backup',
      '1-page BCP Activation Protocol for typhoon/power-loss scenarios',
      'Quarterly internal mock audits — document retrieval under 15 minutes',
      'Zero compliance violations or license suspension target',
    ]
  },
  {
    num: 2,
    name: 'Digital Transformation',
    subtitle: 'Technology Deployment',
    timeline: 'Months 2–4',
    color: '#F59E0B',
    icon: '💻',
    items: [
      'Offline-First Cloud Security Management System (SMS) deployment',
      'RACI protocol for lead management — zero dropped leads',
      '72-Hour Client Onboarding SOP enforcement',
      '40% reduction in manual admin overhead',
      '"Digital Bayanihan" change management with Tech Champions',
      '100% of clients receiving automated daily/weekly digital incident reports',
    ]
  },
  {
    num: 3,
    name: 'Resilient Pricing & Talent Fortress',
    subtitle: 'Sustainability & Retention',
    timeline: 'Months 5–7',
    color: '#22C55E',
    icon: '🏰',
    items: [
      'Dynamic pricing clauses embedded in 100% of new/renewing contracts',
      'Inflation-adjustment and fuel-surcharge protections formalized',
      '"Guard as Ambassador" program launched',
      'Emergency relief packages for families during typhoon events',
      'Guard attrition target < 5% annually (vs. industry 15–25%)',
      'Welfare program participation > 80%',
    ]
  },
  {
    num: 4,
    name: 'Zero-Liability Market Capture',
    subtitle: 'Growth & Expansion',
    timeline: 'Months 8–12',
    color: '#3B82F6',
    icon: '🎯',
    items: [
      'Active B2B outreach for institutional clients (BPO, NGO, LGU, hospitals)',
      '"Guard + Remote Monitoring" hybrid package launches',
      'RA 10121-compliant DRRM bundles for 3+ new institutional contracts',
      '15–20% growth in high-value client acquisition',
      'PHP 150k+ additional net monthly margin from hybrid contracts',
      'Eastern Visayas "Zero-Liability" brand positioning fully established',
    ]
  },
];

// ─── ROUTER ───
function navigate(page) {
  state.page = page;
  state.mobileNavOpen = false;
  document.getElementById('mobile-nav').classList.remove('open');
  window.scrollTo(0, 0);
  render();
  updateNavActive();
  initReveal();
}

function updateNavActive() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === state.page);
  });
}

// ─── AUTH ───
function checkAuth(targetPage) {
  if (state.authenticated) {
    navigate(targetPage);
  } else {
    state.pendingPage = targetPage;
    navigate('login');
  }
}

function attemptLogin(password) {
  if (password === APP.password) {
    state.authenticated = true;
    const target = state.pendingPage || 'dashboard';
    state.pendingPage = null;
    navigate(target);
    return true;
  }
  return false;
}

// ─── ICON SVG HELPERS ───
const icons = {
  shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>`,
  chevron: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"/></svg>`,
  map: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2 1,6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  external: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  location: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

// ─── RENDER ENGINE ───
function render() {
  const app = document.getElementById('app');
  let content = '';

  if (state.page === 'login') {
    app.innerHTML = renderLogin();
    bindLogin();
    return;
  }

  content = `
    ${renderHeader()}
    <div id="page-content">
      ${renderPage()}
    </div>
    ${renderFooter()}
    <div id="notification" class="notification">
      <div class="notification-title" id="notif-title"></div>
      <div id="notif-body"></div>
    </div>
  `;

  app.innerHTML = content;
  bindNavEvents();
  bindPageEvents();
}

// ─── HEADER ───
function renderHeader() {
  const internalPages = ['dashboard', 'strategy', 'sms'];
  return `
  <header id="header">
    <div class="container">
      <nav class="nav-inner">
        <div class="nav-brand" onclick="navigate('home')">
          <img src="${APP.logo}" alt="Stronghold A3 Logo" class="nav-logo" />
          <div class="nav-title">
            <span class="nav-title-main">Stronghold A3</span>
            <span class="nav-title-tagline">${APP.tagline}</span>
          </div>
        </div>
        <ul class="nav-links">
          <li><a href="#" data-page="home" onclick="navigate('home');return false;" class="${state.page==='home'?'active':''}">Home</a></li>
          <li><a href="#" data-page="services" onclick="navigate('services');return false;" class="${state.page==='services'?'active':''}">Services</a></li>
          <li><a href="#" data-page="about" onclick="navigate('about');return false;" class="${state.page==='about'?'active':''}">About Us</a></li>
          <li><a href="#" data-page="contact" onclick="navigate('contact');return false;" class="${state.page==='contact'?'active':''}">Contact</a></li>
          <li><div class="nav-separator"></div></li>
          <li>
            <button onclick="checkAuth('dashboard')" class="${internalPages.includes(state.page)?'active':''}" style="display:flex;align-items:center;gap:6px;">
              ${icons.lock} Operations Portal
            </button>
          </li>
          <li><a href="${APP.smsUrl}" target="_blank" class="nav-cta btn btn-primary" style="font-size:0.75rem;padding:7px 16px;">Cloud SMS ${icons.external}</a></li>
        </ul>
        <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>
  <div id="mobile-nav" ${state.mobileNavOpen ? 'class="open"' : ''}>
    <a href="#" onclick="navigate('home');return false;">Home</a>
    <a href="#" onclick="navigate('services');return false;">Services</a>
    <a href="#" onclick="navigate('about');return false;">About Us</a>
    <a href="#" onclick="navigate('contact');return false;">Contact</a>
    <button onclick="checkAuth('dashboard')">🔒 Operations Portal</button>
    <a href="${APP.smsUrl}" target="_blank">☁️ Cloud SMS System ↗</a>
  </div>`;
}

// ─── PAGE ROUTER ───
function renderPage() {
  switch(state.page) {
    case 'home': return renderHome();
    case 'services': return renderServices();
    case 'about': return renderAbout();
    case 'contact': return renderContact();
    case 'dashboard': return state.authenticated ? renderDashboard() : renderLogin();
    case 'strategy': return state.authenticated ? renderStrategy() : renderLogin();
    case 'sms': return state.authenticated ? renderSMS() : renderLogin();
    default: return renderHome();
  }
}

// ─── HOME PAGE ───
function renderHome() {
  return `
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge"><span class="hero-badge-dot"></span> Region VIII · Eastern Visayas · Est. 2008</div>
        <h1 class="hero-title">
          Stronghold<br/>
          <span class="hero-title-accent">A3</span> Security<br/>
          Agency
        </h1>
        <div class="hero-tagline">${APP.tagline}</div>
        <p class="hero-desc">
          Eastern Visayas' most compliant, technologically advanced, and resilient security partner. 
          Not just a guard supplier — a mature risk-mitigation partner with 100% DOLE/PNP compliance 
          and proven Zero-Liability operational protocols.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" onclick="navigate('services')">${icons.shield} Explore Services</button>
          <button class="btn btn-outline" onclick="navigate('contact')">Request Assessment ${icons.arrow}</button>
          <a href="${APP.smsUrl}" target="_blank" class="btn btn-ghost">☁️ Cloud SMS Portal ${icons.external}</a>
        </div>
        <div class="hero-stats">
          <div>
            <div class="hero-stat-value" data-tooltip="80+ loyal clients across Region VIII — hospitals, LGUs, NGOs, commercial establishments">80+</div>
            <div class="hero-stat-label">Loyal Clients</div>
          </div>
          <div>
            <div class="hero-stat-value" data-tooltip="Less than 5% annual guard attrition vs. industry average of 15-25%. Guards who stay, serve better."><5%</div>
            <div class="hero-stat-label">Guard Attrition</div>
          </div>
          <div>
            <div class="hero-stat-value" data-tooltip="100% compliance with DOLE DO-174, PNP-SOSIA, RA 10121 (DRRM), and RA 10173 (Data Privacy)">100%</div>
            <div class="hero-stat-label">Regulatory Compliance</div>
          </div>
          <div>
            <div class="hero-stat-value" data-tooltip="Zero service disruptions in 12+ years of operations across Region VIII">12+</div>
            <div class="hero-stat-label">Years Operations</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ZERO LIABILITY MOAT -->
  <section class="moat-section">
    <div class="container">
      <div class="moat-header reveal">
        <div class="section-label">Strategic Differentiator</div>
        <h2 class="moat-title">The <span class="text-blue">Zero-Liability Moat</span></h2>
        <p style="color:var(--gray-300);max-width:600px;margin:0 auto;line-height:1.8;">
          Our concentric defense architecture makes us the only security partner in Eastern Visayas 
          with zero liability exposure across every operational dimension.
        </p>
      </div>
      <div class="moat-image-container reveal">
        <img src="${APP.moatImg}" alt="Stronghold A3 Zero-Liability Moat — Strategic Defense Architecture" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- WHY STRONGHOLD A3 -->
  <section class="section section--dark">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Strategic Advantage</div>
        <h2 class="section-title">Why <span class="accent">Stronghold A3</span>?</h2>
        <p class="section-body">We are not a commodity guard supplier. We are a risk-mitigation partner with military-grade operational protocols, triple regulatory compliance, and the technology to prove it.</p>
      </div>
      <div class="grid-2 reveal">
        <!-- Core Competencies -->
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.1rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--bright-blue);margin-bottom:24px;padding-bottom:12px;border-bottom:var(--border);">
            🎯 Core Competencies
          </h3>
          ${[
            ['🛡️','100% DOLE/PNP Compliance','DOLE DO-174, PNP-SOSIA, RA 10121, RA 10173 — every regulation, every time.'],
            ['💻','Cloud Security Management','Offline-First Cloud SMS for real-time incident reporting, guard tours, and client transparency.'],
            ['📡','3-Bridge Communication','Offline App → SMS Gateway → Viber/Radio. Operations continue even during typhoon outages.'],
            ['🚨','DRRM Integration','RA 10121-compliant emergency response protocols bundled with every institutional contract.'],
            ['📊','Digital Transparency','100% of clients receive automated daily/weekly incident and tour reports — no more paper logs.'],
          ].map(([ic,t,d]) => `
            <div class="card flex" style="gap:16px;margin-bottom:16px;padding:20px;">
              <div class="service-icon" style="width:40px;height:40px;font-size:1.1rem;">${ic}</div>
              <div>
                <div class="service-title" style="font-size:0.95rem;">${t}</div>
                <div class="service-desc" style="font-size:0.85rem;margin-top:4px;">${d}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <!-- Stronghold Advantage -->
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.1rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--bright-blue);margin-bottom:24px;padding-bottom:12px;border-bottom:var(--border);">
            ⚡ The Stronghold Advantage
          </h3>
          ${[
            ['🏆','Zero-Liability Framework','Our operational moat — multiple compliance layers ensure zero exposure for clients.'],
            ['👥','&lt;5% Guard Attrition','Lowest in Region VIII. Guards who stay longer serve clients better — period.'],
            ['🌀','Crisis-Proof Operations','Typhoon? Power outage? We deploy the 3-Bridge protocol and keep your site secured.'],
            ['🤝','80+ Loyal Clients','Hospitals, LGUs, NGOs, commercial — decade-long relationships built on trust.'],
            ['📈','4-Phase Reengineering','Systematic upgrade from reactive to proactive — Crisis-Proof → Digital → Talent → Market Capture.'],
          ].map(([ic,t,d]) => `
            <div class="card flex" style="gap:16px;margin-bottom:16px;padding:20px;">
              <div class="service-icon" style="width:40px;height:40px;font-size:1.1rem;">${ic}</div>
              <div>
                <div class="service-title" style="font-size:0.95rem;">${t}</div>
                <div class="service-desc" style="font-size:0.85rem;margin-top:4px;">${d}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- COMPLIANCE BADGES -->
  <section class="section section--panel">
    <div class="container">
      <div class="section-header text-center reveal">
        <div class="section-label" style="justify-content:center;">Regulatory Compliance</div>
        <h2 class="section-title">Triple-Locked <span class="accent">Compliance</span></h2>
        <p class="section-body" style="margin:0 auto;">Every regulation. Every time. Our compliance framework is not just legal protection — it is our market differentiator.</p>
      </div>
      <div class="grid-4 reveal">
        ${[
          {label:'DOLE DO-174',desc:'Department of Labor & Employment Contracting Rules — 100% compliant',color:'var(--bright-blue)'},
          {label:'PNP-SOSIA',desc:'Philippine National Police — Security & Investigation Agency — fully licensed',color:'var(--electric-blue)'},
          {label:'RA 10121',desc:'DRRM Act — Disaster Risk Reduction & Management integration protocols',color:'var(--gold)'},
          {label:'RA 10173',desc:'Data Privacy Act — All client and personnel data fully protected',color:'var(--success)'},
        ].map(c => `
          <div class="card text-center" style="padding:28px 20px;">
            <div style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:${c.color};margin-bottom:10px;letter-spacing:0.05em;">${c.label}</div>
            <div style="font-size:0.82rem;color:var(--gray-300);line-height:1.6;">${c.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 4-PHASE PREVIEW -->
  <section class="section section--dark">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Strategic Roadmap</div>
        <h2 class="section-title">The 4-Phase <span class="accent">Stronghold Sequence</span></h2>
        <p class="section-body">A systematic upgrade from reactive security provider to proactive Zero-Liability market leader.</p>
      </div>
      <div class="grid-4 reveal">
        ${PHASES.map(p => `
          <div class="card" style="border-top:3px solid ${p.color};">
            <div style="font-family:var(--font-display);font-size:3rem;font-weight:700;color:${p.color};opacity:0.15;line-height:1;">0${p.num}</div>
            <div style="font-family:var(--font-display);font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:${p.color};margin-bottom:6px;">${p.icon} Phase ${p.num}</div>
            <div style="font-family:var(--font-display);font-size:1.05rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">${p.name}</div>
            <div style="font-size:0.75rem;color:var(--gray-500);margin-bottom:12px;">${p.timeline}</div>
            <div style="font-size:0.82rem;color:var(--gray-300);">${p.items[0]}</div>
          </div>
        `).join('')}
      </div>
      <div class="text-center mt-40 reveal">
        <button class="btn btn-outline" onclick="checkAuth('strategy')">
          ${icons.map} View Full Strategy Map ${icons.arrow}
        </button>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="padding:80px 0;background:linear-gradient(135deg,var(--mid-blue),var(--deep-blue));position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(59,130,246,0.12),transparent 70%);"></div>
    <div class="container text-center" style="position:relative;z-index:1;">
      <div class="reveal">
        <div class="section-label" style="justify-content:center;">Ready to Partner?</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,4vw,3rem);font-weight:700;text-transform:uppercase;margin-bottom:16px;">
          Secure Your <span class="text-blue">Zero-Liability</span> Partnership
        </h2>
        <p style="color:var(--gray-300);max-width:560px;margin:0 auto 36px;line-height:1.8;">
          Join 80+ clients across Eastern Visayas who trust Stronghold A3 for compliant, 
          transparent, and crisis-proof security operations.
        </p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="navigate('contact')">Request Free Site Assessment ${icons.arrow}</button>
          <button class="btn btn-outline" onclick="navigate('services')">View All Services</button>
        </div>
      </div>
    </div>
  </section>`;
}

// ─── SERVICES PAGE ───
function renderServices() {
  const services = [
    {
      icon:'🛡️',title:'Physical Security Guarding',
      desc:'Licensed, trained, and DOLE-compliant security officers deployed at your premises. Regular guard tours with digital logging, real-time incident reporting, and supervisory oversight.',
      features:['24/7 Coverage Options','PNP-Licensed Guards','Digital Tour Verification','Incident Response SOP'],
      badge:'DOLE DO-174'
    },
    {
      icon:'🌀',title:'DRRM Emergency Response',
      desc:'RA 10121-compliant Disaster Risk Reduction and Management protocols. Formalized evacuation plans, emergency response drills, and crisis coordination for hospitals, LGUs, and NGOs.',
      features:['RA 10121 Compliant','Evacuation Planning','Crisis Coordination','Drill Facilitation'],
      badge:'RA 10121'
    },
    {
      icon:'📡',title:'Hybrid Guard + Remote Monitoring',
      desc:'The most advanced offering in Eastern Visayas — physical guards paired with Cloud SMS remote monitoring, real-time alerts, and client dashboard access. Maximum coverage, minimum liability.',
      features:['Cloud SMS Integration','Real-Time Alerts','Client Dashboard Access','Offline-First Technology'],
      badge:'TECHNOLOGY'
    },
    {
      icon:'💻',title:'Cloud Security Management',
      desc:'Our proprietary Offline-First Cloud SMS system provides 24/7 operational visibility. Access guard patrol logs, incident reports, and compliance documents from any device.',
      features:['Offline-First Design','Automated Reporting','Document Management','72-Hr Onboarding SOP'],
      badge:'CLOUD'
    },
    {
      icon:'📋',title:'Compliance Consulting',
      desc:'Navigate DOLE DO-174, PNP-SOSIA, and RA 10121 requirements with confidence. We offer compliance audits, document vault setup, and regulatory advisory for security-dependent organizations.',
      features:['DOLE Compliance Audit','PNP-SOSIA Advisory','Document Vault Setup','Mock Audit Facilitation'],
      badge:'ADVISORY'
    },
    {
      icon:'🏗️',title:'Executive & VIP Protection',
      desc:'Discreet, professional executive protection services for high-risk individuals and events in the Region VIII area. Advance reconnaissance, route planning, and emergency protocol.',
      features:['Advance Recon','Route Planning','Discreet Operations','Emergency Response'],
      badge:'EXECUTIVE'
    },
  ];
  return `
  <section style="background:var(--deep-blue);padding:80px 0 0;">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">What We Offer</div>
        <h1 class="section-title">Security <span class="accent">Services</span></h1>
        <p class="section-body">Comprehensive, compliance-anchored security solutions for Eastern Visayas — from physical guarding to hybrid tech-enabled protection.</p>
      </div>
    </div>
  </section>
  <section class="section section--dark">
    <div class="container">
      <div class="grid-3 reveal">
        ${services.map(s => `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
              <div class="service-icon">${s.icon}</div>
              <span class="badge">${s.badge}</span>
            </div>
            <h3 class="service-title">${s.title}</h3>
            <p class="service-desc" style="margin:12px 0 20px;">${s.desc}</p>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;">
              ${s.features.map(f => `<li style="display:flex;gap:8px;font-size:0.82rem;color:var(--electric-blue);align-items:center;"><span style="color:var(--success);">${icons.check}</span>${f}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Technology Stack -->
  <section class="section section--panel">
    <div class="container">
      <div class="section-header text-center reveal">
        <div class="section-label">Technology Platform</div>
        <h2 class="section-title">The 3-Bridge <span class="accent">Communication System</span></h2>
        <p class="section-body" style="margin:0 auto;">Zero operational downtime — even during typhoons and power outages in Eastern Visayas.</p>
      </div>
      <div class="grid-3 reveal">
        ${[
          {n:'01',t:'Offline-First SMS App',d:'Guard tour and incident reports logged locally — no internet required. Syncs automatically when connectivity is restored.',ic:'📱'},
          {n:'02',t:'SMS Gateway Bridge',d:'When the app goes offline, critical alerts are transmitted via SMS gateway — works even on 2G signal during typhoons.',ic:'📡'},
          {n:'03',t:'Viber / Radio Backup',d:'Last line of defense: supervisors switch to Viber groups or two-way radio for real-time coordination during total blackouts.',ic:'📻'},
        ].map(b => `
          <div class="card text-center">
            <div style="font-family:var(--font-display);font-size:2.5rem;font-weight:700;color:var(--bright-blue);opacity:0.2;line-height:1;">${b.n}</div>
            <div style="font-size:2rem;margin:-10px 0 12px;">${b.ic}</div>
            <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;">${b.t}</h3>
            <p style="font-size:0.88rem;color:var(--gray-300);line-height:1.7;">${b.d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- SMS CTA -->
  <section style="padding:80px 0;background:var(--deep-blue);">
    <div class="container text-center">
      <div class="reveal">
        <h2 style="font-family:var(--font-display);font-size:2rem;font-weight:700;text-transform:uppercase;margin-bottom:16px;">Access Our <span class="text-blue">Cloud SMS Portal</span></h2>
        <p style="color:var(--gray-300);max-width:500px;margin:0 auto 32px;line-height:1.8;">Real-time guard tours, incident reports, and compliance documents — accessible 24/7 from any device.</p>
        <a href="${APP.smsUrl}" target="_blank" class="btn btn-primary">Launch Cloud SMS System ${icons.external}</a>
      </div>
    </div>
  </section>`;
}

// ─── ABOUT PAGE ───
function renderAbout() {
  return `
  <section style="padding:80px 0 0;background:var(--deep-blue);">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Who We Are</div>
        <h1 class="section-title">About <span class="accent">Stronghold A3</span></h1>
        <p class="section-body">More than a decade of Zero-Liability security operations across Region VIII — built on compliance, technology, and the loyalty of 80+ institutional clients.</p>
      </div>
    </div>
  </section>

  <!-- Vision, Mission, Values -->
  <section class="section section--panel">
    <div class="container">
      <div class="section-header text-center reveal">
        <div class="section-label">Organizational Identity</div>
        <h2 class="section-title">Vision · Mission · <span class="accent">Values</span></h2>
      </div>
      <div class="about-image-section reveal">
        <div class="about-image-card">
          <img src="${APP.vmvImg}" alt="Stronghold A3 Vision Mission Values" loading="lazy" />
        </div>
        <div class="about-image-card">
          <img src="${APP.gpImg}" alt="Stronghold A3 Guiding Principles" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Capability Statement -->
  <section class="section section--dark">
    <div class="container">
      <div class="grid-2 reveal" style="align-items:center;">
        <div>
          <div class="section-label">Capability Statement</div>
          <h2 class="section-title">The <span class="accent">Stronghold</span> Difference</h2>
          <div class="divider"></div>
          <p style="color:var(--gray-300);line-height:1.9;margin-bottom:20px;">
            Stronghold A3 Security Agency is not merely a provider of licensed security guards. 
            We are Eastern Visayas' only fully integrated, compliance-anchored, and technologically 
            advanced risk-mitigation partner.
          </p>
          <p style="color:var(--gray-300);line-height:1.9;margin-bottom:20px;">
            While most regional agencies rely on passive word-of-mouth referrals and paper-based 
            operations, Stronghold A3 has systematically built a Zero-Liability operational moat — 
            combining triple regulatory compliance, an offline-first cloud platform, and a crisis-proof 
            3-Bridge Communication System.
          </p>
          <p style="color:var(--gray-300);line-height:1.9;margin-bottom:28px;">
            Our &lt;5% guard attrition rate (against a regional average of 15–25%) reflects a mature 
            Talent Fortress strategy. Our 80+ loyal clients across hospitals, LGUs, NGOs, and 
            commercial establishments reflect a decade of delivered promises.
          </p>
          <div class="badge-row">
            <span class="badge">DOLE DO-174</span>
            <span class="badge">PNP-SOSIA</span>
            <span class="badge">RA 10121</span>
            <span class="badge">RA 10173</span>
            <span class="badge badge-gold">12+ Years Operations</span>
          </div>
        </div>
        <div>
          <div style="background:var(--panel-blue);border:var(--border-bright);border-radius:var(--radius-lg);padding:32px;">
            <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--bright-blue);margin-bottom:24px;">Key Performance Indicators</h3>
            ${[
              ['80+','Loyal Clients Across Region VIII','↑ Growing'],
              ['<5%','Annual Guard Attrition Rate','↑ Best in Region'],
              ['100%','DOLE/PNP Compliance Record','→ Maintained'],
              ['12+','Years of Uninterrupted Operations','↑ Growing'],
              ['3-Bridge','Communication Redundancy','→ Crisis-Proof'],
              ['4 Phases','Strategic Reengineering Plan','→ Active'],
            ].map(([v,l,t]) => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(59,130,246,0.1);">
                <div>
                  <div style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--bright-blue);">${v}</div>
                  <div style="font-size:0.82rem;color:var(--gray-300);margin-top:2px;">${l}</div>
                </div>
                <span style="font-size:0.72rem;color:var(--success);font-family:var(--font-display);letter-spacing:0.1em;">${t}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Zero Liability Moat -->
  <section class="moat-section">
    <div class="container">
      <div class="moat-header reveal">
        <div class="section-label">Our Operational Moat</div>
        <h2 class="moat-title">The <span class="text-blue">Zero-Liability</span> Architecture</h2>
        <p style="color:var(--gray-300);max-width:600px;margin:0 auto;line-height:1.8;">
          Multiple concentric layers of compliance, technology, and operational protocols 
          that protect our clients from every angle.
        </p>
      </div>
      <div class="moat-image-container reveal">
        <img src="${APP.moatImg}" alt="Stronghold A3 Zero-Liability Moat Architecture" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- Leadership CTA -->
  <section style="padding:80px 0;background:var(--deep-blue);">
    <div class="container text-center">
      <div class="reveal">
        <h2 style="font-family:var(--font-display);font-size:2rem;font-weight:700;text-transform:uppercase;margin-bottom:16px;">Ready to <span class="text-blue">Partner With Us?</span></h2>
        <p style="color:var(--gray-300);max-width:500px;margin:0 auto 32px;line-height:1.8;">Schedule a free site assessment and discover how Stronghold A3's Zero-Liability framework can protect your organization.</p>
        <button class="btn btn-primary" onclick="navigate('contact')">Request Site Assessment ${icons.arrow}</button>
      </div>
    </div>
  </section>`;
}

// ─── CONTACT PAGE ───
function renderContact() {
  return `
  <section style="padding:80px 0 0;background:var(--deep-blue);">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Get In Touch</div>
        <h1 class="section-title">Contact <span class="accent">Us</span></h1>
        <p class="section-body">Request a free site assessment, inquire about our services, or discuss how Stronghold A3 can become your Zero-Liability security partner.</p>
      </div>
    </div>
  </section>
  <section class="section section--dark">
    <div class="container">
      <div class="contact-grid reveal">
        <!-- Info -->
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.1rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:32px;color:var(--bright-blue);">Contact Information</h3>
          <div class="contact-info-item">
            <div class="contact-icon">${icons.location}</div>
            <div>
              <div class="contact-label">Headquarters</div>
              <div style="color:var(--gray-300);font-size:0.9rem;line-height:1.6;">Region VIII — Eastern Visayas<br/>Philippines</div>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon">${icons.phone}</div>
            <div>
              <div class="contact-label">Phone / Mobile</div>
              <div style="color:var(--gray-300);font-size:0.9rem;">+63 (912) 345-6789</div>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon">${icons.mail}</div>
            <div>
              <div class="contact-label">Email</div>
              <div style="color:var(--gray-300);font-size:0.9rem;">operations@stronghold-a3.com</div>
            </div>
          </div>
          <div style="margin-top:32px;padding:24px;background:var(--panel-blue);border:var(--border);border-radius:var(--radius-lg);">
            <h4 style="font-family:var(--font-display);font-size:0.85rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--bright-blue);margin-bottom:16px;">Service Area</h4>
            ${['Leyte Province','Samar Province','Eastern Samar','Northern Samar','Biliran Province','Southern Leyte'].map(a => `
              <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:0.88rem;color:var(--gray-300);">
                <span style="color:var(--success);">${icons.check}</span>${a}
              </div>
            `).join('')}
          </div>
          <div style="margin-top:24px;padding:20px;background:rgba(59,130,246,0.06);border:var(--border-bright);border-radius:var(--radius-lg);">
            <h4 style="font-family:var(--font-display);font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--bright-blue);margin-bottom:10px;">Cloud SMS Portal</h4>
            <p style="font-size:0.85rem;color:var(--gray-300);margin-bottom:12px;">Existing clients access the security management system here:</p>
            <a href="${APP.smsUrl}" target="_blank" class="btn btn-ghost" style="font-size:0.8rem;padding:8px 16px;">Launch Portal ${icons.external}</a>
          </div>
        </div>
        <!-- Form -->
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.1rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:32px;color:var(--bright-blue);">Request Assessment</h3>
          <div id="contact-form">
            <div class="contact-form-field">
              <label>Full Name *</label>
              <input type="text" id="cf-name" placeholder="Your full name" />
            </div>
            <div class="contact-form-field">
              <label>Organization / Company</label>
              <input type="text" id="cf-org" placeholder="Company or organization name" />
            </div>
            <div class="contact-form-field">
              <label>Email Address *</label>
              <input type="email" id="cf-email" placeholder="your@email.com" />
            </div>
            <div class="contact-form-field">
              <label>Mobile Number</label>
              <input type="tel" id="cf-phone" placeholder="+63 9XX XXX XXXX" />
            </div>
            <div class="contact-form-field">
              <label>Service Needed</label>
              <select id="cf-service">
                <option value="">Select a service...</option>
                <option>Physical Security Guarding</option>
                <option>DRRM Emergency Response</option>
                <option>Hybrid Guard + Remote Monitoring</option>
                <option>Cloud Security Management</option>
                <option>Compliance Consulting</option>
                <option>Executive & VIP Protection</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div class="contact-form-field">
              <label>Message / Details</label>
              <textarea id="cf-message" placeholder="Describe your security needs, property type, coverage area, or any specific requirements..."></textarea>
            </div>
            <button class="btn btn-primary w-full" onclick="submitContactForm()" style="justify-content:center;">
              Send Request ${icons.arrow}
            </button>
          </div>
          <div id="contact-success" style="display:none;text-align:center;padding:40px 20px;">
            <div style="font-size:2.5rem;margin-bottom:16px;">✅</div>
            <h3 style="font-family:var(--font-display);font-size:1.2rem;text-transform:uppercase;color:var(--success);margin-bottom:12px;">Request Submitted!</h3>
            <p style="color:var(--gray-300);line-height:1.8;">Our operations team will contact you within 24 hours to schedule your free site assessment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// ─── LOGIN PAGE ───
function renderLogin() {
  return `
  <div class="auth-gate" style="padding-top:70px;">
    <div class="auth-card">
      <img src="${APP.logo}" alt="Logo" class="auth-logo" />
      <h2 class="auth-title">Operations Portal</h2>
      <p class="auth-subtitle">Authorized Personnel Only</p>
      <div class="auth-form" id="login-form">
        <input type="password" class="auth-input" id="auth-password" placeholder="Enter access password" />
        <div class="auth-error" id="auth-error">⚠️ Invalid password. Access denied.</div>
        <button class="btn btn-primary" onclick="doLogin()" style="justify-content:center;">
          ${icons.lock} Authenticate
        </button>
        <button class="btn btn-outline" onclick="navigate('home')" style="justify-content:center;">
          ← Return to Public Site
        </button>
      </div>
      <p class="auth-hint">Stronghold A3 internal staff only. Unauthorized access is prohibited.</p>
    </div>
  </div>`;
}

// ─── DASHBOARD PAGE ───
function renderDashboard() {
  const kpis = [
    {v:'80+',l:'Active Clients',t:'up'},
    {v:'<5%',l:'Guard Attrition',t:'up'},
    {v:'100%',l:'Compliance Rate',t:'neutral'},
    {v:'4',l:'Phases Active',t:'neutral'},
    {v:'3',l:'Tech Systems',t:'up'},
    {v:'12+',l:'Years Operating',t:'up'},
  ];
  return `
  <div class="dash-header">
    <div class="container">
      <div class="dash-title-row">
        <div>
          <div class="section-label">Internal Portal</div>
          <h1 style="font-family:var(--font-display);font-size:1.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">
            Balanced Scorecard Dashboard
          </h1>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-ghost" onclick="checkAuth('strategy')">📍 Strategy Map</button>
          <button class="btn btn-ghost" onclick="checkAuth('sms')">☁️ Cloud SMS</button>
          <button class="btn btn-outline" onclick="state.authenticated=false;navigate('home')">🔓 Sign Out</button>
        </div>
      </div>
    </div>
  </div>
  <div style="padding:0 0 80px;">
    <div class="container">

      <!-- KPI Row -->
      <div class="kpi-grid">
        ${kpis.map(k => `
          <div class="kpi-card">
            <span class="kpi-trend trend-${k.t}">${k.t==='up'?'↑ On Track':k.t==='down'?'↓ Behind':'→ Stable'}</span>
            <div class="kpi-value">${k.v}</div>
            <div class="kpi-label">${k.l}</div>
          </div>
        `).join('')}
      </div>

      <!-- Strategy Map -->
      <div style="margin-bottom:48px;">
        <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:24px;padding-bottom:16px;border-bottom:var(--border);">
          📍 Stronghold Sequence Strategy Map
        </h2>
        <div style="text-align:center;">
          <img src="${APP.stratMapImg}" alt="The Stronghold Sequence Strategy Map" class="strategy-map-img" loading="lazy" />
        </div>
      </div>

      <!-- BSC Perspectives -->
      <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:24px;padding-bottom:16px;border-bottom:var(--border);">
        📊 Balanced Scorecard — Interactive Perspectives
      </h2>
      <p style="color:var(--gray-500);font-size:0.85rem;margin-bottom:24px;">Click each perspective to expand. Hover over Phase badges for details.</p>

      ${Object.entries(BSC_DATA).map(([key, perspective]) => `
        <div class="bsc-perspective open" id="bsc-${key}">
          <div class="bsc-perspective-header" onclick="toggleBSC('${key}')">
            <div class="bsc-perspective-title">
              <div class="bsc-perspective-icon" style="background:${perspective.bg};color:${perspective.color};">${perspective.icon}</div>
              <span style="color:${perspective.color};">${perspective.label}</span>
              <span style="font-size:0.75rem;color:var(--gray-500);font-family:var(--font-body);text-transform:none;letter-spacing:0;font-weight:400;">(${perspective.items.length} objectives)</span>
            </div>
            <span class="bsc-toggle">${icons.chevron}</span>
          </div>
          <div class="bsc-body">
            <div style="overflow-x:auto;">
              <table class="bsc-table">
                <thead>
                  <tr>
                    <th>Activity / Initiative</th>
                    <th>KPI / Measure</th>
                    <th>Target</th>
                    <th style="white-space:nowrap;">Phase</th>
                    <th>Timeline</th>
                    <th>Owner</th>
                  </tr>
                </thead>
                <tbody>
                  ${perspective.items.map(item => `
                    <tr>
                      <td style="max-width:280px;color:var(--white);">${item.activity}</td>
                      <td style="max-width:260px;font-size:0.82rem;">${item.kpi}</td>
                      <td style="max-width:200px;font-size:0.82rem;color:var(--success);">${item.target}</td>
                      <td>
                        <span class="phase-badge phase-${item.phase}" data-tooltip="${item.tooltip}">
                          ${item.phase}
                        </span>
                      </td>
                      <td style="white-space:nowrap;font-size:0.82rem;">${item.timeline}</td>
                      <td style="font-size:0.82rem;color:var(--bright-blue);">${item.owner}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `).join('')}

      <!-- Phase Legend -->
      <div style="margin-top:32px;padding:20px;background:var(--panel-blue);border:var(--border);border-radius:var(--radius-lg);">
        <h4 style="font-family:var(--font-display);font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gray-500);margin-bottom:16px;">Phase Legend</h4>
        <div style="display:flex;flex-wrap:wrap;gap:16px;">
          ${PHASES.map(p => `
            <div style="display:flex;align-items:center;gap:8px;">
              <span class="phase-badge phase-${p.num}">${p.num}</span>
              <span style="font-size:0.82rem;color:var(--gray-300);">${p.name} <span style="color:var(--gray-500);">(${p.timeline})</span></span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  </div>`;
}

// ─── STRATEGY PAGE ───
function renderStrategy() {
  return `
  <div class="dash-header">
    <div class="container">
      <div class="dash-title-row">
        <div>
          <div class="section-label">Operations Portal</div>
          <h1 style="font-family:var(--font-display);font-size:1.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">
            4-Phase Stronghold Sequence
          </h1>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-ghost" onclick="checkAuth('dashboard')">📊 BSC Dashboard</button>
          <button class="btn btn-ghost" onclick="checkAuth('sms')">☁️ Cloud SMS</button>
          <button class="btn btn-outline" onclick="state.authenticated=false;navigate('home')">🔓 Sign Out</button>
        </div>
      </div>
    </div>
  </div>
  <div style="padding:0 0 80px;">
    <div class="container">

      <!-- Strategy Map Image -->
      <div style="margin-bottom:56px;text-align:center;">
        <div class="section-label" style="justify-content:center;margin-bottom:16px;">Visual Overview</div>
        <h2 style="font-family:var(--font-display);font-size:1.5rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:24px;">The Stronghold Sequence — Strategy Map</h2>
        <img src="${APP.stratMapImg}" alt="Stronghold Sequence Strategy Map" class="strategy-map-img" loading="lazy" />
      </div>

      <!-- Phase Cards -->
      <div class="section-label" style="margin-bottom:24px;">Phase-by-Phase Breakdown</div>
      <div class="grid-2">
        ${PHASES.map(p => `
          <div class="phase-card">
            <div class="phase-header" style="border-left:4px solid ${p.color};">
              <div class="phase-tag">${p.icon} Phase ${p.num} of 4</div>
              <div class="phase-number" style="color:${p.color};">0${p.num}</div>
              <h3 class="phase-title" style="color:${p.color};">${p.name}</h3>
              <div style="font-size:0.9rem;color:var(--gray-300);margin-top:4px;">${p.subtitle}</div>
              <div class="phase-timeline">⏱ ${p.timeline}</div>
            </div>
            <div class="phase-body">
              <ul class="phase-items">
                ${p.items.map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Connection to BSC -->
      <div style="margin-top:48px;padding:32px;background:var(--panel-blue);border:var(--border-bright);border-radius:var(--radius-lg);">
        <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--bright-blue);margin-bottom:16px;">📊 Link to Balanced Scorecard</h3>
        <p style="color:var(--gray-300);line-height:1.8;margin-bottom:20px;">
          Each phase directly maps to specific objectives across all four BSC perspectives (Financial, Customer, Internal Processes, Learning & Growth). 
          The Balanced Scorecard tracks 19 KPIs across 4 phases, with Phase 1 beginning immediately in Weeks 1–4.
        </p>
        <button class="btn btn-primary" onclick="checkAuth('dashboard')">View Full BSC Dashboard ${icons.arrow}</button>
      </div>

    </div>
  </div>`;
}

// ─── SMS PAGE ───
function renderSMS() {
  return `
  <div class="dash-header">
    <div class="container">
      <div class="dash-title-row">
        <div>
          <div class="section-label">Operations Portal</div>
          <h1 style="font-family:var(--font-display);font-size:1.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">
            Cloud Security Management System
          </h1>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-ghost" onclick="checkAuth('dashboard')">📊 BSC Dashboard</button>
          <button class="btn btn-ghost" onclick="checkAuth('strategy')">📍 Strategy</button>
          <button class="btn btn-outline" onclick="state.authenticated=false;navigate('home')">🔓 Sign Out</button>
        </div>
      </div>
    </div>
  </div>
  <div style="padding:0 0 80px;">
    <div class="container">
      <div style="margin-bottom:24px;">
        <p style="color:var(--gray-300);line-height:1.8;margin-bottom:16px;">
          Stronghold A3's Offline-First Cloud Security Management System — providing real-time guard tours, 
          incident reporting, client transparency, and compliance documentation management.
        </p>
        <a href="${APP.smsUrl}" target="_blank" class="btn btn-primary">Open in Full Window ${icons.external}</a>
      </div>
      <div class="iframe-container">
        <iframe src="${APP.smsUrl}" title="Stronghold A3 Cloud SMS" allow="camera; microphone; geolocation" loading="lazy"></iframe>
      </div>
    </div>
  </div>`;
}

// ─── FOOTER ───
function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <img src="${APP.logo}" style="width:40px;height:40px;border-radius:50%;filter:drop-shadow(0 0 6px rgba(59,130,246,0.5));" alt="Stronghold A3" />
            <div>
              <div style="font-family:var(--font-display);font-size:1rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Stronghold A3</div>
              <div style="font-size:0.65rem;color:var(--bright-blue);letter-spacing:0.15em;text-transform:uppercase;">${APP.tagline}</div>
            </div>
          </div>
          <p class="footer-brand-desc">Eastern Visayas' premier Zero-Liability security partner. 100% DOLE/PNP compliant, crisis-proof, and technologically advanced.</p>
          <div class="badge-row" style="margin-top:16px;">
            <span class="badge" style="font-size:0.62rem;">DOLE DO-174</span>
            <span class="badge" style="font-size:0.62rem;">PNP-SOSIA</span>
            <span class="badge" style="font-size:0.62rem;">RA 10121</span>
          </div>
        </div>
        <div>
          <div class="footer-heading">Navigation</div>
          <ul class="footer-links">
            <li><button onclick="navigate('home')">Home</button></li>
            <li><button onclick="navigate('services')">Services</button></li>
            <li><button onclick="navigate('about')">About Us</button></li>
            <li><button onclick="navigate('contact')">Contact</button></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Operations</div>
          <ul class="footer-links">
            <li><button onclick="checkAuth('dashboard')">BSC Dashboard</button></li>
            <li><button onclick="checkAuth('strategy')">Strategy Map</button></li>
            <li><button onclick="checkAuth('sms')">Cloud SMS Portal</button></li>
            <li><a href="${APP.smsUrl}" target="_blank">Launch SMS ${icons.external}</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Compliance</div>
          <ul class="footer-links">
            <li><a href="#" onclick="return false;" style="cursor:default;">DOLE DO-174</a></li>
            <li><a href="#" onclick="return false;" style="cursor:default;">PNP-SOSIA</a></li>
            <li><a href="#" onclick="return false;" style="cursor:default;">RA 10121 — DRRM</a></li>
            <li><a href="#" onclick="return false;" style="cursor:default;">RA 10173 — DPA</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Stronghold A3 Security Agency. All rights reserved. | Region VIII, Eastern Visayas, Philippines</span>
        <span style="color:var(--bright-blue);">Zero-Liability. Every Time.</span>
      </div>
    </div>
  </footer>`;
}

// ─── EVENT BINDING ───
function bindNavEvents() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      state.mobileNavOpen = !state.mobileNavOpen;
      mobileNav.classList.toggle('open', state.mobileNavOpen);
    });
  }
}

function bindLogin() {
  const input = document.getElementById('auth-password');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') doLogin();
    });
    setTimeout(() => input.focus(), 100);
  }
}

function bindPageEvents() {
  // Already set via inline onclick; nothing extra needed
}

// ─── BSC TOGGLE ───
function toggleBSC(key) {
  const el = document.getElementById(`bsc-${key}`);
  if (el) el.classList.toggle('open');
}

// ─── LOGIN HANDLER ───
function doLogin() {
  const pw = document.getElementById('auth-password');
  const err = document.getElementById('auth-error');
  if (!pw) return;
  if (attemptLogin(pw.value)) {
    // navigated away
  } else {
    if (err) { err.style.display = 'block'; }
    pw.value = '';
    pw.focus();
    setTimeout(() => { if (err) err.style.display = 'none'; }, 3000);
  }
}

// ─── CONTACT FORM ───
function submitContactForm() {
  const name = document.getElementById('cf-name')?.value.trim();
  const email = document.getElementById('cf-email')?.value.trim();
  if (!name || !email) {
    showNotification('Required Fields', 'Please fill in your name and email address.');
    return;
  }
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
  showNotification('Request Received ✓', 'Our team will contact you within 24 hours.');
}

// ─── NOTIFICATION ───
function showNotification(title, body) {
  const notif = document.getElementById('notification');
  const t = document.getElementById('notif-title');
  const b = document.getElementById('notif-body');
  if (!notif) return;
  if (t) t.textContent = title;
  if (b) b.textContent = body;
  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 4000);
}

// ─── SCROLL REVEAL ───
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── INIT ───
window.navigate = navigate;
window.checkAuth = checkAuth;
window.doLogin = doLogin;
window.toggleBSC = toggleBSC;
window.submitContactForm = submitContactForm;

document.addEventListener('DOMContentLoaded', () => {
  render();
  initReveal();
});
