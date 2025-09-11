import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'yet-another-react-lightbox';  
import 'yet-another-react-lightbox/styles.css';

import Rahichi from './api.png';
import Sathire from './aws.png';
import KedarGouri from './w3school.png';
import FM from './deloitte.png';
import Tarini from './skillup.png';
import { BiShowAlt } from "react-icons/bi";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);

  const images = [Rahichi, Sathire, KedarGouri, FM, Tarini];
  const slides = images.map((img) => ({ src: img }));

  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="px-6  text-white relative"
    >
      {/* Section Heading */}
      <h2
        className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center"
          data-aos="fade-up"
      >Certificates</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="relative group w-full h-48 sm:h-52 lg:h-56 overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt={`Certificate ${i + 1}`}
              className="rounded-xl object-cover w-full h-full 
                         transition-transform duration-500 
                         group-hover:scale-110 group-active:scale-105"
              onClick={() => setIndex(i)}
            />
            {/* Overlay effect */}
            <div
              className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 
                         flex items-center justify-center transition-all duration-500 
                         cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <span className="px-3 py-1 bg-white/30 border border-white/40 text-sm rounded-md flex items-center justify-center gap-3">
               <BiShowAlt size={18} /><span>View</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
}
