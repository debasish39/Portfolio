import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedin,
  FaGithub,
  FaFeatherAlt,
  FaHome,
  FaUserAlt,
  FaCode,
  FaCertificate,
  FaEnvelopeOpenText,
  FaEnvelope,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY <= lastScrollY || currentY < 60);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#hero", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUserAlt /> },
    { name: "Projects", href: "#projects", icon: <FaCode /> },
    { name: "Certificates", href: "#gallery", icon: <FaCertificate /> },
    { name: "Message", href: "#contact", icon: <MdEmail /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-black/50 backdrop-blur-md border-b border-gray-800 text-white`}
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-semibold tracking-wide"
          >
            <span
              className="text-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text font-thin"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Debasish
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-stone-300 hover:text-white transition duration-300 flex items-center gap-2 group"
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 text-xl ml-4">
              <a
                href="https://www.linkedin.com/in/debasish-panda-857715314/"
                target="_blank"
                className="text-stone-300 hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/debasish39"
                target="_blank"
                className="text-stone-300 hover:text-white transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden bg-black/10 backdrop-blur-md border-b border-gray-800">
        <a href="/" className="flex items-center gap-2 text-xl font-semibold">
          <span
            className="text-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text font-thin"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Debasish
          </span>
        </a>
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/debasish-panda-857715314/"
            target="_blank"
            className="text-stone-300 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/debasish39"
            target="_blank"
            className="text-stone-300 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:deba@example.com"
            className="text-stone-300 hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-black/30 backdrop-blur-md border-t border-gray-800 
              flex justify-around border border-t-white/30 items-center py-1.5 md:hidden z-50 transition-transform duration-500 shadow-2xl ${
                showNavbar ? "translate-y-0" : "translate-y-full"
              }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative flex flex-col items-center text-stone-300 hover:text-white 
                 text-[12px] transition-all duration-300 group transform hover:-translate-y-1"
          >
            {/* Icon */}
            <span className="mt-1 text-[15px]">{link.icon}</span>

            {/* Label */}
            <span className="text-[12px]">{link.name}</span>

            {/* Underline animation (just like desktop) */}
            <span className="absolute -top-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </>
  );
}
