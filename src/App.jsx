import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from './components/ScrollToTopButton';
import ClickSpark from './components/ClickSpark';
import Projects from "./components/Projects";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ClickSpark
      sparkColor="#c8a97e"
      sparkSize={14}
      sparkRadius={2.5}
      sparkCount={24}
      duration={500}
      easing="ease-out"
      extraScale={1.0}
    >
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Syne:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: #0a0a0c;
          color: #e8e3d8;
          font-family: 'Syne', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0c; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #c8a97e55, #a0784088);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover { background: #c8a97e99; }

        /* ── Section fade-in on scroll ── */
        .section-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
        }
        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Selection colour ── */
        ::selection {
          background: rgba(200, 169, 126, 0.25);
          color: #f0e8d8;
        }
      `}</style>

      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden',
          color: '#e8e3d8',
          background: '#0a0a0c',
        }}
      >
        {/* ── Background layers ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            overflowX: 'hidden',
          }}
        >
          {/* Fine grid */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right,rgba(200,169,126,0.04) 1px,transparent 1px),' +
              'linear-gradient(to bottom,rgba(200,169,126,0.03) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          {/* Radial glow — top center */}
          <div style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 900,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center,rgba(200,169,126,0.07) 0%,transparent 65%)',
          }} />

          {/* Radial glow — bottom right */}
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center,rgba(160,120,64,0.05) 0%,transparent 65%)',
          }} />

          {/* Subtle noise grain */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.025,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }} />
        </div>

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />

          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontFamily: "'Syne', sans-serif",
                background: '#1a1612',
                color: '#e8e3d8',
                borderRadius: '10px',
                border: '1px solid rgba(200,169,126,0.2)',
                padding: '12px 18px',
                fontSize: '13px',
                letterSpacing: '0.02em',
              },
              success: {
                style: {
                  background: '#0e1f14',
                  color: '#86efac',
                  border: '1px solid rgba(134,239,172,0.2)',
                  fontSize: '13px',
                },
                iconTheme: { primary: '#86efac', secondary: '#0e1f14' },
              },
              error: {
                style: {
                  background: '#1f0e0e',
                  color: '#fca5a5',
                  border: '1px solid rgba(252,165,165,0.2)',
                  fontSize: '13px',
                },
                iconTheme: { primary: '#fca5a5', secondary: '#1f0e0e' },
              },
              loading: {
                style: {
                  background: '#141210',
                  color: '#c8a97e',
                  border: '1px solid rgba(200,169,126,0.2)',
                },
                iconTheme: { primary: '#c8a97e', secondary: '#141210' },
              },
            }}
          />

          <Hero />
          <About />
          <Projects />
          <Gallery />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </div>
      </div>
    </ClickSpark>
  );
}