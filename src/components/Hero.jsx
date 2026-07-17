import React, { useEffect, useRef } from 'react';
import Pro from '/our.png';

export default function Hero() {
  const canvasRef = useRef(null);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const pts = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 45; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r:  Math.random() * 1.2 + 0.5,
        alpha: Math.random() * 0.35 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,126,${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,169,126,${0.07 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Syne:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');

        @keyframes morphRing {
          0%,100% { border-radius: 36% 64% 56% 44% / 48% 40% 60% 52%; }
          33%      { border-radius: 64% 36% 44% 56% / 52% 60% 40% 48%; }
          66%      { border-radius: 44% 56% 64% 36% / 40% 48% 52% 60%; }
        }
        @keyframes slideInLeft  { from{opacity:0;transform:translateX(-36px);}  to{opacity:1;transform:translateX(0);} }
        @keyframes slideInUp    { from{opacity:0;transform:translateY(36px);}   to{opacity:1;transform:translateY(0);} }
        @keyframes slideInRight { from{opacity:0;transform:translateX(36px);}   to{opacity:1;transform:translateX(0);} }
        @keyframes fadeUp       { from{opacity:0;transform:translateY(14px);}   to{opacity:1;transform:translateY(0);} }
        @keyframes dotPulse     { 0%,100%{opacity:1;transform:scale(1);}        50%{opacity:.45;transform:scale(.75);} }
        @keyframes scrollLine   { 0%,100%{opacity:.25;} 50%{opacity:.9;} }

        /* Image: slides from left on ≥768px, from bottom on mobile */
        .h-img-side { animation: slideInLeft .9s cubic-bezier(.22,1,.36,1) .15s both; }
        @media (max-width: 767px) {
          .h-img-side { animation: slideInUp .8s cubic-bezier(.22,1,.36,1) .1s both; }
        }

        /* Text: slides from right on ≥768px, from bottom on mobile */
        .h-txt-side { animation: slideInRight .9s cubic-bezier(.22,1,.36,1) .35s both; }
        @media (max-width: 767px) {
          .h-txt-side { animation: slideInUp .8s cubic-bezier(.22,1,.36,1) .25s both; }
        }

        /* Staggered text children */
        .h-eyebrow { animation: fadeUp .7s ease .65s  both; }
        .h-name    { animation: fadeUp .7s ease .8s   both; }
        .h-role    { animation: fadeUp .7s ease .95s  both; }
        .h-bio     { animation: fadeUp .7s ease 1.1s  both; }
        .h-chips   { animation: fadeUp .7s ease 1.2s  both; }
        .h-cta     { animation: fadeUp .7s ease 1.3s  both; }
        .h-scroll  { animation: fadeUp .7s ease 1.75s both; }

        /* Morphing ring */
        .h-avatar-ring {
          position:absolute; inset:-14px;
          border-radius: 36% 64% 56% 44% / 48% 40% 60% 52%;
          background: conic-gradient(from 200deg,#c8a97e1a,#d4a05430,#a0784099,#c8a97e1a);
          animation: morphRing 9s ease-in-out infinite;
          filter: blur(2px);
        }

        /* Avatar hover */
        .h-avatar-img { transition: transform .5s ease; filter: grayscale(12%) contrast(1.05); }
        .h-avatar-img:hover { transform: scale(1.04); }

        /* Pulse dot */
        .h-dot { animation: dotPulse 2.2s ease-in-out infinite; }

        /* Scroll pulse */
        .h-scroll-line { animation: scrollLine 2s ease-in-out infinite; }

        /* ── Primary button ── */
        .h-btn-primary {
          position:relative; overflow:hidden;
          background: linear-gradient(135deg,#c8a97e,#a07840);
          color: #0a0a0c !important;
          border: none;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .h-btn-primary::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg,#e8c898,#c8a97e);
          color: #0a0a0c !important;
          opacity:0; transition:opacity .25s ease; border-radius:inherit;
        }
        .h-btn-primary:hover::after { opacity:1; }
        .h-btn-primary:hover  { transform:translateY(-2px); box-shadow:0 8px 22px rgba(200,169,126,.28);
        color: #0a0a0c !important; }
        .h-btn-primary:active { transform:scale(.97); }
        .h-btn-primary > * { position:relative; z-index:1; }

        /* ── Secondary button ── */
        .h-btn-secondary {
          background: transparent;
          color: #c8a97e !important;
          border: 1px solid rgba(200,169,126,.4);
          transition: all .25s ease;
        }
        .h-btn-secondary:hover {
          background: rgba(200,169,126,.08);
          border-color: rgba(200,169,126,.65);
          transform: translateY(-2px);
        }
        .h-btn-secondary:active { transform:scale(.97); }

        /* ── Tech chip ── */
        .h-chip {
          font-family:'Inter',sans-serif;
          font-size:10px; font-weight:500;
          letter-spacing:.05em; text-transform:uppercase;
          padding:4px 11px; border-radius:4px;
          background:#1c1912; border:1px solid #3a3020; color:#b09870;
        }

        /* ── Center divider (desktop only) ── */
        .h-divider {
          position:absolute; left:50%; top:50%;
          transform:translate(-50%,-50%);
          width:1px; height:55%;
          background:linear-gradient(to bottom,transparent,rgba(200,169,126,.2),transparent);
          pointer-events:none;
        }
        @media (max-width: 767px) { .h-divider { display:none; } }

        /* ── Corner accents ── */
        .h-corner { position:fixed; pointer-events:none; z-index:0; opacity:.35; }
        @media (max-width: 480px) { .h-corner { opacity:.2; } }

        /* ── Hide scroll hint on mobile ── */
        @media (max-width: 767px) { .h-scroll { display:none !important; } }

        /* ── On ≥768px, left-align the text column ── */
        @media (min-width: 768px) {
          .h-txt-side    { text-align:left !important; }
          .h-eyebrow-row { justify-content:flex-start !important; }
          .h-role-row    { justify-content:flex-start !important; }
          .h-chips-row   { justify-content:flex-start !important; }
          .h-cta-row     { justify-content:flex-start !important; }
          .h-bio-p       { margin:0 !important; }
        }
      `}</style>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0, opacity:.38 }}
      />

      {/* Corner accents */}
      <div className="h-corner" style={{ top:18, left:18, width:'clamp(55px,8vw,90px)', height:'clamp(55px,8vw,90px)', borderTop:'1px solid rgba(200,169,126,.28)', borderLeft:'1px solid rgba(200,169,126,.28)', borderRadius:'9px 0 0 0' }} aria-hidden="true" />
      <div className="h-corner" style={{ bottom:18, right:18, width:'clamp(55px,8vw,90px)', height:'clamp(55px,8vw,90px)', borderBottom:'1px solid rgba(200,169,126,.28)', borderRight:'1px solid rgba(200,169,126,.28)', borderRadius:'0 0 9px 0' }} aria-hidden="true" />

      {/* ───────────── Hero section ───────────── */}
      <section
        id="hero"
        style={{
          position:'relative', zIndex:1,
          minHeight:'100vh',
          display:'flex', alignItems:'center',
          /* Fluid padding: generous on desktop, compact on mobile */
          padding:'clamp(4.5rem,10vw,6rem) clamp(1.1rem,5vw,5rem) clamp(2.5rem,6vw,4rem)',
        }}
      >
        <div style={{ width:'100%', maxWidth:1200, margin:'0 auto', position:'relative' }}>
          <div className="h-divider" aria-hidden="true" />

          {/* ── Responsive grid: 1-col mobile → 2-col desktop ── */}
          <div style={{
            display:'grid',
            /* 1 column on mobile, 2 equal columns at ≥768px */
            gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))',
            alignItems:'center',
            gap:'clamp(2rem,6vw,3.5rem)',
          }}>

            {/* ── IMAGE COLUMN ── */}
            <div className="h-img-side" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
              <div style={{
                position:'relative',
                /* Fluid size: small phone → large desktop */
                width: 'clamp(199px,38vw,300px)',
                height:'clamp(250px,46vw,360px)',
              }}>
                <div className="h-avatar-ring" aria-hidden="true" />

                {/* Frame */}
                <div style={{
                  position:'relative', width:'100%', height:'100%',
                  borderRadius:'clamp(16px,3vw,28px)',
                  overflow:'hidden',
                  border:'1.5px solid rgba(200,169,126,.3)',
                  background:'linear-gradient(135deg,#1a1610,#0f0d0a)',
                }}>
                  <img
                    src={Pro}
                    alt="Debasish Panda"
                    className="h-avatar-img"
                    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }}
                  />
                  <div aria-hidden="true" style={{
                    position:'absolute', inset:0,
                    background:'linear-gradient(135deg,transparent 40%,rgba(200,169,126,.07) 60%,transparent 70%)',
                    pointerEvents:'none',
                  }} />
                </div>

                {/* Status badge */}
                <div style={{
                  position:'absolute', bottom:-13, left:'50%', transform:'translateX(-50%)',
                  background:'#141210', border:'1px solid rgba(200,169,126,.3)',
                  borderRadius:24, padding:'5px 15px',
                  display:'flex', alignItems:'center', gap:7,
                  whiteSpace:'nowrap',
                  fontFamily:"'Inter',sans-serif",
                  fontSize:'clamp(8px,1.4vw,11px)',
                  color:'#c8a97e', letterSpacing:'.08em', textTransform:'uppercase',
                }}>
                  <span className="h-dot" style={{ width:6, height:6, borderRadius:'50%', background:'#6fcf6f', flexShrink:0, display:'inline-block' }} />
                  Open to opportunities
                </div>
              </div>
            </div>

            {/* ── TEXT COLUMN ── */}
            <div
              className="h-txt-side"
              style={{
                display:'flex', flexDirection:'column',
                gap:'clamp(0.8rem,2vw,1.25rem)',
                textAlign:'center', /* overridden to left on ≥768 via CSS */
              }}
            >
              {/* Eyebrow */}
              <div
                className="h-eyebrow h-eyebrow-row"
                style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:11,
                  fontFamily:"'Inter',sans-serif",
                  fontSize:'clamp(9px,1.3vw,11px)',
                  fontWeight:500, letterSpacing:'.18em', textTransform:'uppercase', color:'#c8a97e',
                }}
              >
                <span style={{ width:24, height:1, background:'#c8a97e', display:'inline-block', flexShrink:0 }} />
                Portfolio · 2025
                <span style={{ width:24, height:1, background:'#c8a97e', display:'inline-block', flexShrink:0 }} />
              </div>

              {/* Name */}
              <h1
                className="h-name"
                style={{
                  fontFamily:"'Lobster',cursive",
                  fontSize:'clamp(2.4rem,7.5vw,4.2rem)',
                  lineHeight:1.05, margin:0,
                  background:'linear-gradient(135deg,#f0e8d8 0%,#c8a97e 50%,#8a6a3e 100%)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                }}
              >
                Debasish Panda
              </h1>

              {/* Role */}
              <div className="h-role-row" style={{ display:'flex', justifyContent:'center' }}>
                <div
                  className="h-role"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    background:'rgba(200,169,126,.08)', border:'1px solid rgba(200,169,126,.2)',
                    borderRadius:8, padding:'clamp(5px,1vw,7px) clamp(11px,2vw,16px)',
                    fontSize:'clamp(9px,1.6vw,12px)', fontWeight:600,
                    letterSpacing:'.07em', textTransform:'uppercase', color:'#d4b88a',
                  }}
                >
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#c8a97e', display:'inline-block', flexShrink:0 }} />
              Full Stack Developer
                </div>
              </div>

              {/* Bio */}
              <p
                className="h-bio h-bio-p"
                style={{
                  fontFamily:"'Inter',sans-serif",
                  fontSize:'clamp(13px,1.8vw,15px)',
                  fontWeight:300, lineHeight:1.85, color:'#a09880',
                  maxWidth:480, margin:'0 auto',
                }}
              >
                A passionate{' '}
                <strong style={{ color:'#ddd5c0', fontWeight:500 }}>Full Stack Developer</strong>{' '}
                crafting scalable, high-performance web applications. Specialized in{' '}
                <strong style={{ color:'#ddd5c0', fontWeight:500 }}>React.js, Tailwind&nbsp;CSS,Express JS, Python &amp; Django</strong>{' '}
                — with a sharp eye for clean architecture and intuitive interfaces.
              </p>

              {/* Tech chips */}
              <div
                className="h-chips h-chips-row"
                style={{ display:'flex', flexWrap:'wrap', gap:7, justifyContent:'center' }}
              >
                {[
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Python',
  'Django',
  'Tailwind CSS',
  'REST API'
].map(t => (
                  <span key={t} className="h-chip">{t}</span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="h-cta h-cta-row"
                style={{
                  display:'flex', flexWrap:'wrap',
                  gap:'clamp(9px,2vw,13px)',
                  justifyContent:'center',
                  paddingTop:'clamp(0.2rem,1vw,0.5rem)',
                }}
              >
                {/* Resume */}
                <a
                  href="https://drive.google.com/file/d/1ahNu13bKzuQ2ibNLsMAAgq2ovrj3oW82/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-btn-primary"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    padding:'clamp(10px,1.6vw,13px) clamp(16px,2.8vw,25px)',
                    borderRadius:10,
                    fontFamily:"'Syne',sans-serif",
                    fontSize:'clamp(11px,1.5vw,13px)', fontWeight:600,
                    letterSpacing:'.06em', textTransform:'uppercase',
                    textDecoration:'none', cursor:'pointer', flexShrink:0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  Resume
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className="h-btn-secondary"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    padding:'clamp(10px,1.6vw,13px) clamp(16px,2.8vw,25px)',
                    borderRadius:10,
                    fontFamily:"'Syne',sans-serif",
                    fontSize:'clamp(11px,1.5vw,13px)', fontWeight:600,
                    letterSpacing:'.06em', textTransform:'uppercase',
                    textDecoration:'none', cursor:'pointer', flexShrink:0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
            {/* end text column */}
          </div>
          {/* end grid */}
        </div>
      </section>

      {/* Scroll hint — hidden on mobile via CSS */}
      <div
        className="h-scroll"
        aria-hidden="true"
        style={{
          position:'fixed', bottom:'1.6rem', left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:6, zIndex:2,
          pointerEvents:'none',
        }}
      >
        <span style={{ fontFamily:"'Inter',sans-serif", fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', color:'#5a5040' }}>Scroll</span>
        <div className="h-scroll-line" style={{ width:1, height:30, background:'linear-gradient(to bottom,rgba(200,169,126,.55),transparent)' }} />
      </div>
    </>
  );
}