

import React, { useState, useEffect } from "react"; // Added hooks
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa"; // Ensure react-icons is installed



const Contact = () => {
  // --- Scroll to Top Logic ---
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // ---------------------------

  return (
    <div className="w-full bg-white font-sans text-[#001d3d] relative">
      {/* 1. HERO SECTION */}
      <section className="relative h-64 w-full bg-slate-900 flex items-center px-6 md:px-16 overflow-hidden">
        <img
          src="images/about 1.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Warehouse Background"
        />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
        <div className="absolute bottom-0 right-10 bg-[#ff661a] px-6 py-4 text-white z-20 hidden md:block">
          <span className="text-sm">
            <Link to="/" className="">
              Home
            </Link>
            <span className="mx-2">|</span>{" "}
            <b className="text-black">Contact Us</b>
          </span>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#ff661a]"></div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT SIDE: CONTACT FORM */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 bg-gray-50 border border-gray-200 focus:outline-[#ff661a]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="p-4 bg-gray-50 border border-gray-200 focus:outline-[#ff661a]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 bg-gray-50 border border-gray-200 focus:outline-[#ff661a]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 bg-gray-50 border border-gray-200 focus:outline-[#ff661a]"
            />
            <textarea
              placeholder="Write Your Message"
              rows="5"
              className="p-4 bg-gray-50 border border-gray-200 focus:outline-[#ff661a] md:col-span-2 resize-none"
            ></textarea>
            <button
              type="button"
              className="bg-[#ff661a] text-white font-bold py-4 px-10 w-fit hover:bg-[#0e172c] transition-all uppercase text-sm tracking-widest"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: CONTACT INFO */}
        <div className="space-y-10">
          <div className="flex gap-4 items-start">
            <div className="bg-[#ff661a] p-3 text-white min-w-[50px] flex justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="text-gray-500">Dubai, United Arab Emirates</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-[#ff661a] p-3 text-white min-w-[50px] flex justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">E-Mail</h3>
              <p className="text-gray-500 break-all text-sm">
                ceo@swiftsigngeneraltrading.com
              </p>
              <p className="text-gray-500 break-all text-sm">
                info@swiftsigngeneraltrading.com
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-[#ff661a] p-3 text-white min-w-[50px] flex justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">WhatsApp</h3>
              <p className="text-gray-500 hover:text-[#ff661a] cursor-pointer transition-colors">
                Chat with us on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAP SECTION */}
      <section className="w-full h-[450px] bg-gray-200">
        <iframe
          title="Swift Sign Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.40695029272!2d55.20108395!3d25.1353272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709530000000!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#ff661a] text-white shadow-2xl transition-all duration-300 hover:bg-[#0e172c] hover:scale-110 ${
          showScroll
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Contact;