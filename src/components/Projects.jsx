import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import quote from "./quote.png";
import qr from "./qr.png";
import txtspeech from "./txtspeech.png";
import Todo from "./todo.png";
import crud from "./crud.png";
import blogzone from "./blogzone.png";
import blog from './blog.png';
import eshop from "./eshop.png";
import cal from "./cal.png";
import tem from "./tem.png";
import landing from './landing.png';
import jwt from './jwt.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BiSolidShow } from "react-icons/bi";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false });
  }, []);

  const projectData = [
  {
    title: "BlogZone",
    description:
      "A modern blogging platform built with React and tailwindcss,PWA featuring reusable components and responsive design.",
    imageUrl: blogzone,
    projectUrl: "https://blogzone.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/BlogZone",
  },
  {
    title: "E-Shop",
    description:
      "A full-fledged e-commerce store with product listings, shopping cart, checkout flow.",
    imageUrl: eshop, 
    projectUrl: "https://eshop.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/E-Commerce",
  },
  {
  title: 'JWT Authentication System',
  description: 'A secure authentication and authorization system built with React, Django REST Framework, and JWT. Includes protected routes, role-based access, and password reset via email.',
  imageUrl: jwt, 
  projectUrl: 'https://jwt-auth.debasish.xyz/', 
  githubUrl: 'https://github.com/debasish39/jwt-authentication' 
},
{
  title: 'Blog App',
  description: 'A full-stack blogging platform using Django where users can create, view, and manage posts with authentication and user-friendly UI.',
  imageUrl: blog,
  projectUrl: 'https://blog.debasish.xyz/',
  githubUrl: 'https://github.com/debasish39/Blog-with-Authentication' 
}
,
  {
    title: "Quote Generator",
    description: "An app that generates random quotes to inspire you.",
    imageUrl: quote,
    projectUrl: "https://quotes.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/quote-generator",
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for any text or link easily.",
    imageUrl: qr,
    projectUrl: "https://qrcode.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/qr-code-generator",
  },
  {
    title: "Text to Speech Converter",
    description: "Convert text into speech using this simple tool.",
    imageUrl: txtspeech,
    projectUrl: "https://texttospeech.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/text-to-speech",
  },
  {
    title: "To-Do App",
    description: "A simple to-do list app to manage your tasks efficiently.",
    imageUrl: Todo,
    projectUrl: "https://todo.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/Todo_Redux",
  },
 {
  title: 'Credentials Manager',
  description: 'A secure credentials management app to store and manage user login details with password visibility toggle and validation.',
  imageUrl: crud,  
  projectUrl: 'https://crud.debasish.xyz/',
  githubUrl: 'https://github.com/debasish39/CRUD-by-React' 
}
,
  {
    title: "Advanced Calculator",
    description: "A more advanced calculator with additional functions.",
    imageUrl: cal,
    projectUrl: "https://calculator.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/advanced-calculator",
  },
  {
    title: "Temperature Converter",
    description:
      "Convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    imageUrl: tem,
    projectUrl: "https://temp.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/temp-converter",
  },
{
  title: 'Landing Page',
  description: 'A modern, responsive landing page with smooth navigation, call-to-action buttons, and a clean layout for startups or businesses.',
  imageUrl: landing, 
  projectUrl: 'https://landing.debasish.xyz/', 
  githubUrl: 'https://github.com/debasish39/Landing_page' 
},



];
  return (
    <section id="projects" className="px-6 sm:px-10 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
        className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
              className="relative group rounded-2xl overflow-hidden shadow-lg 
                         bg-white/5 backdrop-blur-md border border-gray-700
                         hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                         transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
              />

              {/* Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              flex items-center justify-center gap-5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/30 
                             hover:shadow-lg hover:shadow-white/30 transition"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/30 
                             hover:shadow-lg hover:shadow-white/30 transition"
                >
                  <BiSolidShow size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}
