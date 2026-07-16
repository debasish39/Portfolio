import React, { useEffect, useRef } from "react";

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("ab-visible");
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Data ── */
const education = [
  {
    degree: "B.Tech",
    institution: "Einstein Academy Of Technology And Management (EATM)",
    period: "2022 –  2026",
    grade: "83.52%",
  },
  {
    degree: "Intermediate (Science)",
    institution: "Tara Tarini Higher Secondary School",
    period: "2020 – 2022",
    grade: "83.16%",
  },
  {
    degree: "Matriculation",
    institution: "Netro Chhaba High School",
    period: "2020",
    grade: "80%",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "Django"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
  },
];
const infoCards = [
  {
    label: "Location",
    value: "Berhampur, Odisha",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    accent: "#7eb8c8",
  },
  {
    label: "Focus",
value: "Full Stack Development",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    accent: "#c8a97e",
  },
];

/* ── Sub-components ── */

function SectionLabel({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, marginBottom: "1.75rem",
    }}>
      <span style={{
        fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
        letterSpacing: ".18em", textTransform: "uppercase", color: "#c8a97e",
      }}>{children}</span>
      <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,rgba(200,169,126,.35),transparent)" }} />
    </div>
  );
}

function EducationCard({ degree, institution, period, grade, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="ab-reveal"
      style={{ "--ab-delay": `${delay}ms` }}
    >
      <div
        className="ab-edu-card"
        style={{
          position: "relative",
          background: "rgba(28,25,18,0.6)",
          border: "1px solid rgba(200,169,126,.14)",
          borderRadius: 14,
          padding: "clamp(14px,2.5vw,20px) clamp(16px,3vw,24px)",
          display: "flex", alignItems: "flex-start", gap: 16,
          cursor: "default",
          transition: "border-color .3s ease, transform .3s ease",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Timeline dot */}
        <div style={{
          flexShrink: 0, marginTop: 4,
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(200,169,126,.1)",
          border: "1px solid rgba(200,169,126,.28)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Cap icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c8a97e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "6px 12px", marginBottom: 4 }}>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(13px,2vw,15px)",
              fontWeight: 600, color: "#e8e0d0",
            }}>{degree}</span>
            {grade && (
              <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
                color: "#c8a97e", background: "rgba(200,169,126,.1)",
                border: "1px solid rgba(200,169,126,.22)", borderRadius: 20,
                padding: "1px 10px", letterSpacing: ".04em",
              }}>{grade}</span>
            )}
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px,1.7vw,13px)",
            color: "#9a8e78", lineHeight: 1.5, margin: "0 0 4px",
          }}>{institution}</p>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11,
            color: "#6a6050", letterSpacing: ".04em", margin: 0,
          }}>{period}</p>
        </div>
      </div>
    </div>
  );
}

function SkillRow({ category, items, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="ab-reveal" style={{ "--ab-delay": `${delay}ms` }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "10px 0" }}>
        {/* Category label */}
        <div style={{
          flexShrink: 0, width: "clamp(78px,12vw,96px)",
          fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
          letterSpacing: ".06em", textTransform: "uppercase", color: "#8a7a60",
          paddingTop: 3,
        }}>{category}</div>

        {/* Divider */}
        <div style={{ flexShrink: 0, width: 1, alignSelf: "stretch", background: "rgba(200,169,126,.18)", margin: "2px 0" }} />

        {/* Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, flex: 1 }}>
          {items.map(item => (
            <span
              key={item}
              className="ab-skill-chip"
              style={{
                fontFamily: "'Inter', sans-serif", fontSize: "clamp(10px,1.5vw,12px)",
                fontWeight: 400, color: "#c8b898",
                background: "rgba(200,169,126,.06)",
                border: "1px solid rgba(200,169,126,.18)",
                borderRadius: 6, padding: "4px 12px",
                transition: "all .25s ease", cursor: "default",
              }}
            >{item}</span>
          ))}
        </div>
      </div>
      {/* Hairline separator */}
      <div style={{ height: 1, background: "rgba(255,255,255,.04)", margin: "0 0 0 110px" }} />
    </div>
  );
}

/* ── Main component ── */
export default function About() {
  const titleRef  = useReveal(0.2);
  const introRef  = useReveal(0.1);
  const eduRef    = useReveal(0.1);
  const skillRef  = useReveal(0.1);
  const cardsRef  = useReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Syne:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');

        /* ── Reveal animation ── */
        .ab-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .65s cubic-bezier(.22,1,.36,1) var(--ab-delay, 0ms),
                      transform .65s cubic-bezier(.22,1,.36,1) var(--ab-delay, 0ms);
        }
        .ab-visible.ab-reveal,
        .ab-visible .ab-reveal { opacity: 1; transform: translateY(0); }

        /* Wrappers that trigger children */
        .ab-title-wrap, .ab-intro-wrap, .ab-edu-wrap, .ab-skill-wrap, .ab-cards-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
        }
        .ab-visible.ab-title-wrap,
        .ab-visible.ab-intro-wrap,
        .ab-visible.ab-edu-wrap,
        .ab-visible.ab-skill-wrap,
        .ab-visible.ab-cards-wrap { opacity: 1; transform: translateY(0); }

        /* Education card hover */
        .ab-edu-card:hover {
          border-color: rgba(200,169,126,.3) !important;
          transform: translateY(-2px);
        }

        /* Skill chip hover */
        .ab-skill-chip:hover {
          background: rgba(200,169,126,.12) !important;
          border-color: rgba(200,169,126,.35) !important;
          color: #e8d8b8 !important;
        }

        /* Info card hover */
        .ab-info-card:hover {
          border-color: rgba(200,169,126,.3) !important;
          transform: translateY(-2px);
        }

        /* Section heading accent underline */
        .ab-heading-accent {
          display: inline-block;
          position: relative;
        }
        .ab-heading-accent::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 0;
          width: 100%; height: 1px;
          background: linear-gradient(to right, #c8a97e88, transparent);
        }
      `}</style>

      <section
        id="about"
        style={{
          position: "relative", zIndex: 1,
          padding: "clamp(4rem,10vw,7rem) clamp(1.1rem,5vw,5rem)",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>

          {/* ── Section title ── */}
          <div ref={titleRef} className="ab-title-wrap" style={{ textAlign: "center", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
              letterSpacing: ".2em", textTransform: "uppercase", color: "#c8a97e",
              marginBottom: "1rem",
            }}>
              <span style={{ width: 24, height: 1, background: "#c8a97e", display: "inline-block" }} />
              Who I Am
              <span style={{ width: 24, height: 1, background: "#c8a97e", display: "inline-block" }} />
            </div>
            <h2 style={{
              fontFamily: "'Lobster', cursive",
              fontSize: "clamp(2.2rem,6vw,3.5rem)",
              lineHeight: 1.1, margin: 0,
              background: "linear-gradient(135deg,#f0e8d8 0%,#c8a97e 55%,#8a6a3e 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>About Me</h2>
          </div>

          {/* ── Intro paragraph ── */}
          <div ref={introRef} className="ab-intro-wrap" style={{ marginBottom: "clamp(2.5rem,5vw,3.5rem)" }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px,1.8vw,15px)",
              fontWeight: 300, lineHeight: 1.9, color: "#9a9080",
              maxWidth: 680, margin: "0 auto", textAlign: "center",
            }}>
      I'm a <strong style={{ color: "#ddd5c0", fontWeight: 500 }}>Full Stack Developer</strong> based in Berhampur, Odisha, passionate about building scalable, responsive, and user-friendly web applications. I enjoy solving real-world problems through clean code, modern technologies, and intuitive user experiences.
            </p>
          </div>

          {/* ── Two-column layout: Education | Skills ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(2rem,4vw,3rem)",
            marginBottom: "clamp(2rem,4vw,3rem)",
          }}>

            {/* Education */}
            <div ref={eduRef} className="ab-edu-wrap">
              <SectionLabel>Education</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {education.map((edu, i) => (
                  <EducationCard key={i} {...edu} delay={i * 100} />
                ))}
              </div>
            </div>

            {/* Skills */}
            <div ref={skillRef} className="ab-skill-wrap">
              <SectionLabel>Skills</SectionLabel>
              <div style={{
                background: "rgba(28,25,18,0.5)",
                border: "1px solid rgba(200,169,126,.12)",
                borderRadius: 14,
                padding: "clamp(14px,2.5vw,20px) clamp(16px,3vw,22px)",
                backdropFilter: "blur(8px)",
              }}>
                {skills.map((s, i) => (
                  <SkillRow key={i} {...s} delay={i * 80} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Info cards ── */}
          <div
            ref={cardsRef}
            className="ab-cards-wrap"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "clamp(10px,2vw,16px)",
            }}
          >
            {infoCards.map(({ label, value, icon, accent }) => (
              <div
                key={label}
                className="ab-info-card"
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "rgba(28,25,18,0.6)",
                  border: "1px solid rgba(200,169,126,.14)",
                  borderRadius: 12,
                  padding: "clamp(12px,2vw,16px) clamp(14px,2.5vw,20px)",
                  backdropFilter: "blur(8px)",
                  transition: "border-color .3s ease, transform .3s ease",
                  cursor: "default",
                }}
              >
                {/* Icon circle */}
                <div style={{
                  flexShrink: 0,
                  width: 36, height: 36, borderRadius: "50%",
                  background: `${accent}14`,
                  border: `1px solid ${accent}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: accent,
                }}>{icon}</div>

                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
                    letterSpacing: ".12em", textTransform: "uppercase",
                    color: "#6a6050", margin: "0 0 3px",
                  }}>{label}</p>
                  <p style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(12px,1.8vw,14px)",
                    fontWeight: 600, color: "#d8cdb8", margin: 0,
                  }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}