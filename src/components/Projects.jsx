import React, { useEffect, useRef, useState } from 'react';

import quote    from "./quote.png";
import qr       from "./qr.png";
import txtspeech from "./txtspeech.png";
import Todo     from "./todo.png";
import crud     from "./crud.png";
import blogzone from "./blogzone.png";
import blog     from './blog.png';
import eshop    from "./eshop.png";
import cal      from "./cal.png";
import tem      from "./tem.png";
import landing  from './landing.png';
import jwt      from './jwt.png';
import food     from './food.png';
import finance  from './finance.png';
/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('pr-visible'); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Inline SVG icons ── */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LiveIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ── Project data ── */
const projectData = [
  {
  title: "Finance Tracker",
  tag: "MERN · Finance",
  description: "A personal finance management application for tracking income, expenses, budgets, and financial insights with interactive dashboards.",
  imageUrl: finance, // import finance from "./finance.png"
  projectUrl: "https://finance-transaction.netlify.app/",
  githubUrl: "https://github.com/debasish39/finance_tracker_mern"
},
{
  title: "Odikart",
  tag: "MERN · E-Commerce",
  description: "A full-stack e-commerce platform featuring authentication, shopping cart, wishlist, order management, and secure online payments.",
  imageUrl: eshop, // Change this to odikart image if available
  projectUrl: "https://odikart.in/",
  githubUrl: "https://github.com/debasish39/E-Commerce"
},
{
  title: "Food Delivery App",
  tag: "MERN · Full Stack",
  description: "A full-stack food delivery platform with authentication, menu management, shopping cart, order processing, and responsive dashboards.",
  imageUrl: food, // import food from "./food.png"
  projectUrl: "",
  githubUrl: "https://github.com/debasish39/food_delivery_app"
},
  { title: "JWT Auth System",      tag: "Django · React · JWT", description: "Secure authentication with protected routes, role-based access, and password reset via email using Django REST Framework.",                                                                  imageUrl: jwt,       projectUrl: "https://jwt-auth.debasish.xyz/",    githubUrl: "https://github.com/debasish39/jwt-authentication" },
  { title: "Blog App",             tag: "Django · Full Stack",  description: "A full-stack blogging platform where users can create, view, and manage posts with authentication.",                                                                                          imageUrl: blog,      projectUrl: "https://blog.debasish.xyz/",        githubUrl: "https://github.com/debasish39/Blog-with-Authentication" },
  
  { title: "BlogZone",             tag: "React · PWA",          description: "A modern blogging platform built with React and Tailwind CSS, featuring reusable components and fully responsive design.",                                                                  imageUrl: blogzone,  projectUrl: "https://blogzone.debasish.xyz/",    githubUrl: "https://github.com/debasish39/BlogZone" },
  { title: "Quote Generator",      tag: "JavaScript",           description: "An app that generates random inspiring quotes with a clean, minimal interface.",                                                                                                              imageUrl: quote,     projectUrl: "https://quotes.debasish.xyz/",      githubUrl: "https://github.com/debasish39/quote-generator" },
  { title: "QR Code Generator",   tag: "JavaScript",           description: "Generate QR codes for any text or URL instantly with a single click.",                                                                                                                        imageUrl: qr,        projectUrl: "https://qrcode.debasish.xyz/",      githubUrl: "https://github.com/debasish39/qr-code-generator" },
  { title: "Text to Speech",       tag: "Web API",              description: "Convert any typed text into natural speech using the browser's Web Speech API.",                                                                                                             imageUrl: txtspeech, projectUrl: "https://texttospeech.debasish.xyz/",githubUrl: "https://github.com/debasish39/text-to-speech" },
  { title: "To-Do App",            tag: "React · Redux",        description: "A clean task management app powered by Redux for global state — add, complete, and clear tasks.",                                                                                            imageUrl: Todo,      projectUrl: "https://todo.debasish.xyz/",        githubUrl: "https://github.com/debasish39/Todo_Redux" },
  { title: "Credentials Manager", tag: "React · CRUD",         description: "A secure credentials manager to store and manage login details with password visibility toggle and validation.",                                                                              imageUrl: crud,      projectUrl: "https://crud.debasish.xyz/",        githubUrl: "https://github.com/debasish39/CRUD-by-React" },
  { title: "Advanced Calculator",  tag: "JavaScript",           description: "A scientific-style calculator with extended math functions and a clean UI.",                                                                                                                  imageUrl: cal,       projectUrl: "https://calculator.debasish.xyz/",  githubUrl: "https://github.com/debasish39/advanced-calculator" },
  { title: "Temp Converter",       tag: "JavaScript",           description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin with live updates.",                                                                                                            imageUrl: tem,       projectUrl: "https://temp.debasish.xyz/",        githubUrl: "https://github.com/debasish39/temp-converter" },
  { title: "Landing Page",         tag: "React · Tailwind",     description: "A modern, responsive landing page with smooth navigation and call-to-action sections for startups.",                                                                                         imageUrl: landing,   projectUrl: "https://landing.debasish.xyz/",     githubUrl: "https://github.com/debasish39/Landing_page" },
];

/* ── Single card ── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  // Staggered reveal via IntersectionObserver
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('pr-card-visible'), (index % 3) * 80);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="pr-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(200,169,126,.35)' : 'rgba(200,169,126,.12)'}`,
        background: 'rgba(18,16,12,0.7)',
        backdropFilter: 'blur(12px)',
        cursor: 'default',
        transition: 'border-color .35s ease, transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,.55), 0 0 0 1px rgba(200,169,126,.18)'
          : '0 4px 16px rgba(0,0,0,.3)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 'clamp(140px,20vw,185px)', flexShrink: 0 }}>
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top',
            display: 'block',
            transition: 'transform .55s cubic-bezier(.22,1,.36,1)',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            filter: hovered ? 'brightness(0.6)' : 'brightness(0.85) grayscale(8%)',
          }}
        />
        {/* Top gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 55%, rgba(18,16,12,0.95) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Tag pill */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
          letterSpacing: '.07em', textTransform: 'uppercase',
          color: '#c8a97e',
          background: 'rgba(10,10,12,0.75)',
          border: '1px solid rgba(200,169,126,.28)',
          borderRadius: 20, padding: '3px 10px',
          backdropFilter: 'blur(8px)',
        }}>
          {project.tag}
        </div>

        {/* Hover action buttons */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 14,
          opacity: hovered ? 1 : 0,
          transition: 'opacity .3s ease',
          pointerEvents: hovered ? 'auto' : 'none',
        }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-action-btn"
            onClick={e => e.stopPropagation()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '9px 16px', borderRadius: 9,
              fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: '.06em', textTransform: 'uppercase',
              textDecoration: 'none', color: '#e8d8b8',
              background: 'rgba(18,16,12,0.85)',
              border: '1px solid rgba(200,169,126,.3)',
              backdropFilter: 'blur(8px)',
              transition: 'background .2s ease, border-color .2s ease, transform .2s ease',
            }}
          >
            <GithubIcon /> Code
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-action-btn pr-action-primary"
            onClick={e => e.stopPropagation()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '9px 16px', borderRadius: 9,
              fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: '.06em', textTransform: 'uppercase',
              textDecoration: 'none', color: '#0a0a0c',
              background: 'linear-gradient(135deg,#c8a97e,#a07840)',
              border: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'opacity .2s ease, transform .2s ease',
            }}
          >
            <LiveIcon /> Live
          </a>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: 'clamp(14px,2vw,20px) clamp(16px,2.5vw,22px)', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(14px,2vw,16px)',
          fontWeight: 600, color: '#e8d8b8',
          margin: 0, lineHeight: 1.3,
        }}>{project.title}</h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(12px,1.6vw,13px)',
          fontWeight: 300, lineHeight: 1.7,
          color: '#7a7060', margin: 0, flex: 1,
        }}>{project.description}</p>

        {/* Bottom link row */}
        <div style={{
          display: 'flex', gap: 14, paddingTop: 8,
          borderTop: '1px solid rgba(200,169,126,.08)',
          marginTop: 4,
        }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-text-link"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
              letterSpacing: '.05em', textTransform: 'uppercase',
              color: '#7a7060', textDecoration: 'none',
              transition: 'color .2s ease',
            }}
          >
            <GithubIcon /> Source
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-text-link pr-text-link-gold"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
              letterSpacing: '.05em', textTransform: 'uppercase',
              color: '#c8a97e', textDecoration: 'none',
              marginLeft: 'auto',
              transition: 'color .2s ease',
            }}
          >
            Live Demo <LiveIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Projects() {
  const titleRef = useReveal(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Syne:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');

        /* ── Card reveal ── */
        .pr-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .6s cubic-bezier(.22,1,.36,1),
                      transform .6s cubic-bezier(.22,1,.36,1),
                      border-color .35s ease,
                      box-shadow .35s ease;
        }
        .pr-card.pr-card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Override transform so hover still works after reveal */
        .pr-card.pr-card-visible:hover {
          transform: translateY(-5px) !important;
        }

        /* ── Title reveal ── */
        .pr-title-wrap {
          opacity: 0; transform: translateY(20px);
          transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
        }
        .pr-visible.pr-title-wrap { opacity: 1; transform: translateY(0); }

        /* ── Action button hovers ── */
        .pr-action-btn:hover {
          background: rgba(30,26,18,0.95) !important;
          border-color: rgba(200,169,126,.55) !important;
          transform: translateY(-1px);
        }
        .pr-action-primary:hover { opacity: .88; }

        /* ── Text link hovers ── */
        .pr-text-link:hover { color: #a09080 !important; }
        .pr-text-link-gold:hover { color: #e8c898 !important; }
      `}</style>

      <section
        id="projects"
        style={{
          position: 'relative', zIndex: 1,
          padding: 'clamp(4rem,10vw,7rem) clamp(1.1rem,5vw,5rem)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* ── Section title ── */}
          <div
            ref={titleRef}
            className="pr-title-wrap"
            style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
              letterSpacing: '.2em', textTransform: 'uppercase', color: '#c8a97e',
              marginBottom: '1rem',
            }}>
              <span style={{ width: 24, height: 1, background: '#c8a97e', display: 'inline-block' }} />
              What I've Built
              <span style={{ width: 24, height: 1, background: '#c8a97e', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontFamily: "'Lobster', cursive",
              fontSize: 'clamp(2.2rem,6vw,3.5rem)',
              lineHeight: 1.1, margin: 0,
              background: 'linear-gradient(135deg,#f0e8d8 0%,#c8a97e 55%,#8a6a3e 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>My Projects</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(12px,1.8vw,14px)',
              fontWeight: 300, color: '#7a7060', marginTop: '0.75rem',
              letterSpacing: '.02em',
            }}>
              {projectData.length} projects — hover to explore
            </p>
          </div>

          {/* ── Grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(14px,2.5vw,22px)',
          }}>
            {projectData.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}