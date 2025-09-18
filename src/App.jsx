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
import  { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <ClickSpark 
      sparkColor="#A9AFBA" 
      sparkSize={18} 
      sparkRadius={3} 
      sparkCount={30} 
      duration={400} 
      easing="ease-out"
      extraScale={1.0}
    >
      <div className="overflow-hidden text-stone-300 antialiased ">
        <div className="fixed inset-0 -z-10 overflow-x-hidden">
          <div className="relative h-full w-full ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[100vh] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        <div className="w-full mx-auto  px-0 cursor-pointer overflow-x-hidden">
          <Navbar className="overflow-hidden"/>
                 <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Default styles
            style: {
              background: "#1f2937", // dark gray
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            success: {
              style: {
                background: "#16a34a", // green
                color: "#fff",                  fontSize:'12px'
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#16a34a",
              },
            },
            error: {
              style: {
                background: "#dc2626", // red
                color: "#fff",
                fontSize:'12px'
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#dc2626",
              },
            },
            loading: {
              style: {
                background:"rgb(0,0,0)",
                color: "#fff",
              },
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
