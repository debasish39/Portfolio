import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pro from '../../public/our.png';
import { MdContactPhone, MdEmail } from 'react-icons/md';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section className="pt-9 sm:pt-18 pb-16 px-4 sm:px-6 md:pt-30 lg:px-16" id="hero">
      <div className="flex flex-col md:flex-row items-center gap-12 sm:mt-3">
        
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <img
            src={Pro}
            alt="Simanchala Padhi"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] rounded-4xl shadow-2xl
                       transition-transform duration-300 
                       hover:scale-105 active:scale-106"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left md:mt-9">
          {/* Name */}
          <h1
            className="text-3xl sm:text-5xl md:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text mb-2"
            style={{ fontFamily: 'Lobster, cursive' }}
            data-aos="zoom-in"
          >
            Debasish Panda
          </h1>

          {/* Role */}
          <span
            className="inline-block mb-4 text-2xl sm:text-3xl font-semibold uppercase text-transparent bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Python Full Stack Developer
          </span>

          {/* Paragraph */}
          <p
            className="text-stone-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I am a passionate <strong className="text-white">Full Stack Developer</strong> specializing in building scalable web applications. 
            Skilled in <strong className="text-white">React.js, Tailwind CSS, Python, Django</strong>, and experienced with 
            REST APIs, MySQL, and modern development tools. I love crafting clean, efficient, and visually appealing applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="mailto:tusalaa291@gmail.com"
              className="px-6 py-3 flex items-center gap-2 rounded-lg bg-gradient-to-r from-stone-700 to-stone-900 text-white text-sm sm:text-base font-semibold shadow-md 
                         hover:from-[#34363a] hover:to-[#A9AFBA] hover:text-black
                         focus:outline-none focus:ring-2 focus:ring-stone-500 
                         active:scale-95 
                         transition duration-300 justify-center"
            >
              <MdEmail size={20} /> Email Me
            </a>

            <a
              href="#contact"
              className="px-6 py-3 flex items-center gap-2 rounded-lg bg-gradient-to-r from-stone-700 to-stone-900 text-white text-sm sm:text-base font-semibold shadow-md 
                         hover:from-[#34363a] hover:to-[#A9AFBA] hover:text-black
                         focus:outline-none focus:ring-2 focus:ring-stone-500 
                         active:scale-95 
                         transition duration-300 justify-center"
            >
              <MdContactPhone size={20} /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
