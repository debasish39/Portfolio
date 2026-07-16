import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  {
    name: "Home",
    href: "#hero",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: "About",
    href: "#about",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "#projects",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    name: "Certificates",
    href: "#gallery",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "#contact",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

/* Social icons */
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Navbar() {
  const [visible, setVisible]       = useState(true);
  const [scrolled, setScrolled]     = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const lastY = useRef(0);

  /* ── Hide/show on scroll + glass intensity ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y <= lastY.current || y < 60);
      setScrolled(y > 20);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace("#", ""));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const navBg = scrolled
    ? "rgba(10,10,12,0.82)"
    : "rgba(10,10,12,0.45)";

  const navBorder = scrolled
    ? "rgba(200,169,126,0.18)"
    : "rgba(200,169,126,0.08)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Syne:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');

        /* ── Desktop link hover ── */
        .nb-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: .04em;
          color: #9a9080;
          text-decoration: none;
          padding: 4px 0;
          transition: color .25s ease;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(to right, #c8a97e, transparent);
          transition: width .3s cubic-bezier(.22,1,.36,1);
        }
        .nb-link:hover,
        .nb-link.nb-active { color: #e8d8b8; }
        .nb-link:hover::after,
        .nb-link.nb-active::after { width: 100%; }
        .nb-link.nb-active { color: #c8a97e; }

        /* ── Social icon buttons ── */
        .nb-social {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 8px;
          color: #7a7060;
          border: 1px solid rgba(200,169,126,0);
          background: transparent;
          text-decoration: none;
          transition: color .25s ease, background .25s ease, border-color .25s ease, transform .2s ease;
        }
        .nb-social:hover {
          color: #c8a97e;
          background: rgba(200,169,126,.08);
          border-color: rgba(200,169,126,.22);
          transform: translateY(-1px);
        }

        /* ── Mobile bottom tab ── */
        .nb-tab {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 4px; flex: 1;
          padding: 8px 4px 6px;
          color: #6a6050;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: .05em; text-transform: uppercase;
          transition: color .2s ease;
          position: relative;
        }
        .nb-tab::before {
          content: '';
          position: absolute;
          top: 0; left: 20%; right: 20%;
          height: 1px;
          background: linear-gradient(to right, transparent, #c8a97e, transparent);
          opacity: 0;
          transition: opacity .25s ease;
        }
        .nb-tab:hover,
        .nb-tab.nb-active { color: #c8a97e; }
        .nb-tab.nb-active::before,
        .nb-tab:hover::before { opacity: 1; }

        /* ── Nav slide transitions ── */
        .nb-desktop {
          transition: transform .45s cubic-bezier(.22,1,.36,1),
                      background .3s ease,
                      border-color .3s ease,
                      box-shadow .3s ease;
        }
        .nb-mobile-bottom {
          transition: transform .45s cubic-bezier(.22,1,.36,1);
        }

        /* ── Brand name ── */
        .nb-brand {
          font-family: 'Lobster', cursive;
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          background: linear-gradient(135deg, #f0e8d8 0%, #c8a97e 55%, #8a6a3e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          letter-spacing: .02em;
        }

        /* Brand dot pulse */
        @keyframes brandDot {
          0%,100% { opacity:1; transform: scale(1); }
          50%      { opacity:.4; transform: scale(.7); }
        }
        .nb-brand-dot { animation: brandDot 2.5s ease-in-out infinite; }
      `}</style>

      {/* ════════════════════════════════════
          DESKTOP NAVBAR
      ════════════════════════════════════ */}
      <nav
        className="nb-desktop"
        style={{
          display: "none",
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 50,
          transform: visible ? "translateY(0)" : "translateY(-110%)",
          background: navBg,
          borderBottom: `1px solid ${navBorder}`,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,.45)" : "none",
        }}
        /* Show on ≥768px via inline media handled by the CSS below */
      >
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
          height: 58,
          maxWidth: 1200, margin: "0 auto",
        }}>
          {/* Brand */}
          <a href="/" className="nb-brand" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            Debasish
            <span className="nb-brand-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "#c8a97e", display: "inline-block", marginBottom: 2 }} />
          </a>

          {/* Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 2.5vw, 2rem)" }}>
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`nb-link${activeLink === link.href ? " nb-active" : ""}`}
              >
                <span style={{ opacity: .75 }}>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <a href="https://www.linkedin.com/in/debasish-panda-857715314/" target="_blank" rel="noopener noreferrer" className="nb-social" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/debasish39" target="_blank" rel="noopener noreferrer" className="nb-social" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="mailto:debasishpanda0333@gmail.com" className="nb-social" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════
          MOBILE TOP BAR
      ════════════════════════════════════ */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 1.1rem",
          height: 52,
          background: "rgba(10,10,12,0.75)",
          borderBottom: "1px solid rgba(200,169,126,.12)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
        className="nb-mobile-top"
      >
        <a href="/" className="nb-brand">Debasish</a>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <a href="https://www.linkedin.com/in/debasish-panda-857715314/" target="_blank" rel="noopener noreferrer" className="nb-social" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/debasish39" target="_blank" rel="noopener noreferrer" className="nb-social" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="mailto:debasishpanda0333@gmail.com" className="nb-social" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════
          MOBILE BOTTOM TAB BAR
      ════════════════════════════════════ */}
      <div
        className="nb-mobile-bottom"
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          zIndex: 50,
          transform: visible ? "translateY(0)" : "translateY(110%)",
          display: "flex", alignItems: "stretch",
          background: "rgba(10,10,12,0.88)",
          borderTop: "1px solid rgba(200,169,126,.14)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className={`nb-tab${activeLink === link.href ? " nb-active" : ""}`}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      {/* ════════════════════════════════════
          RESPONSIVE: show/hide via CSS
      ════════════════════════════════════ */}
      <style>{`
        /* Desktop nav: hidden by default, show at ≥768px */
        nav.nb-desktop { display: none !important; }
        @media (min-width: 768px) {
          nav.nb-desktop { display: block !important; }
          .nb-mobile-top,
          .nb-mobile-bottom { display: none !important; }
        }
        /* Page top padding to account for fixed navbars */
        @media (max-width: 767px) {
          #hero { padding-top: 52px !important; }
        }
        @media (min-width: 768px) {
          #hero { padding-top: 58px !important; }
        }
      `}</style>
    </>
  );
}