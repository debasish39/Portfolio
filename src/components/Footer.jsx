import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-stone-300 px-4 sm:px-6 py-12 ">
      <hr className="mb-8 border-stone-100" />

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">Debasish Panda</h3>
          <p className="mt-1 text-sm leading-relaxed">
            Python Full Stack Developer passionate about building scalable web applications 
            and delivering clean, efficient code.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm flex flex-col gap-1 sm:gap-0 w-39">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-semibold mb-3 text-white">Connect With Me</h4>
          <div className="flex gap-2 justify-center sm:justify-start flex-wrap">
            <a
              href="https://github.com/debasish39"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/debasish-panda-857715314/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:debasishpanda0333@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaEnvelope />
            </a>
                   <a
              href="https://www.instagram.com/deba_369/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-stone-500 border-t border-stone-700 pt-4">
        © {new Date().getFullYear()} Debasish Panda | Python Full Stack Developer. All rights reserved.
      </div>
    </footer>
  );
}
