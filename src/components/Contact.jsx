import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPaperPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.access_key = accessKey;

    const loadingToast = toast.loading('Submitting...');

    try {
      const response = await axios.post(
        'https://api.web3forms.com/submit',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.success) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    } finally {
      toast.dismiss(loadingToast);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-16 text-white ">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        {/* Hot-toast container */}
        <Toaster position="top-right" reverseOrder={false} />

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-stone-300 text-lg">
          Feel free to reach out via email or phone. I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 border border-gray-600"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 border border-gray-600"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 border border-gray-600"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            data-aos="zoom-in"
            data-aos-delay="600"
            className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-md justify-center cursor-pointer 
              ${loading ? 'opacity-50 cursor-not-allowed bg-stone-700' : 'bg-gradient-to-r from-stone-600 to-stone-800 hover:shadow-lg hover:scale-105'}
              text-white transform duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 transition`}
          >
            <FaPaperPlane />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
