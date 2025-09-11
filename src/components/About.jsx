import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false });
  }, []);

  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-3 text-stone-300"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h2>
        <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-left sm:text-center text-2xl font-semibold text-white mb-4">Education:</h3>
          <ul className="space-y-3 text-base">
            {[
              ["B.Tech", "Einstein Academy Of Technology And Management(EATM), 2020 – CONTINUE"],
              ["Intermediate (Science)", "Tara Tarini Higher Secondary School, 2020 – 2022 (83.16%)"],
              ["Matriculation", "Netro Chhaba High School, 2020 (80%)"],
            ].map(([degree, details], i) => (
              <li
                key={i}
                className="flex items-start gap-2 hover:text-white text-[14px] transition-all duration-300 cursor-pointer"
                data-aos="fade-right"
                data-aos-delay={300 + i * 100}
              >
                <FaGraduationCap className="mt-[5px] text-stone-400" />
                <span>
                  <strong>{degree}</strong> - {details}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <h3
          className="text-left sm:text-center text-2xl font-semibold text-white mb-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Skills:
        </h3>
        <ul
          className="mt-4 list-none pl-0 space-y-3 text-base"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          {[
            ["Frontend", "React.js, Tailwind, TypeScript"],
            ["Backend", "Python, Django, REST APIs"],
            ["Databases", "SQL, MySQL"],
            ["Tools", "Git, GitHub, Vercel, Netlify, Postman"],
          ].map(([category, skills], i) => (
            <li
              key={i}
              className="flex items-start gap-2 hover:text-white transition-all duration-300 cursor-pointer"
              data-aos="fade-right"
              data-aos-delay={900 + i * 100}
            >
              <FaCheckCircle className="mt-[5px] text-stone-400" />
              <span>
                <strong>{category}:</strong> {skills}
              </span>
            </li>
          ))}
        </ul>

        {/* Info Cards */}
        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-stone-400"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="flex items-center gap-2 bg-stone-800/50 px-4 py-3 rounded-lg">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>
              <strong>Location:</strong> Berhampur, Odisha
            </span>
          </div>
          <div className="flex items-center gap-2 bg-stone-800/50 px-4 py-3 rounded-lg">
            <FaCode className="text-yellow-400" />
            <span className="text-[13px]">
              <strong>Focus:</strong> Python Full Stack Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
