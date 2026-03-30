

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa"; // 1. Import the icon

const Service = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-x-hidden relative">
      <style>{`
        .reveal-hidden {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s ease-out;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* 1. HERO BANNER SECTION */}
      <section className="relative h-64 w-full bg-slate-800 flex items-center px-10 overflow-hidden">
        <img
          src="images/home card 4.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Warehouse"
        />
        <h1 className="relative z-10 text-5xl font-bold text-white">Service</h1>

        <div className="absolute bottom-0 right-10 bg-[#ff661a] p-4 text-white z-20">
          <span>
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            | <b className="text-black">Service</b>
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-[#ff661a]"></div>
        </div>
      </section>

      {/* 2. INTRO TEXT SECTION */}
      <section
        ref={addToRefs}
        className="reveal-hidden max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10"
      >
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 text-lg">
          Swift Sign General Trading provides pallet solutions of the highest
          quality, delivering durable, reliable, and cost-effective products
          designed to support efficient storage and transportation.
        </p>
      </section>

      {/* 3. SERVICE CARDS GRID */}
      <section className="max-w-6xl mx-auto pb-20 px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div
          ref={addToRefs}
          className="reveal-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 space-y-4 hover:bg-[#14203b] p-2"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src="images/home card 1.jpg"
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Wooden Pallets"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-[#ff661a] rounded-full shrink-0 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5" />
                <path d="M4 10h16" />
                <path d="M4 14h16" />
                <path d="M4 18h16" />
                <path d="M20 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5" />
              </svg>
            </div>
            <h3 className="font-bold text-xl group-hover:text-[#ff661a] transition-colors duration-300">
              Wooden Pallets
            </h3>
          </div>
          <p className="text-gray-500 group-hover:text-white">
            High-strength wooden pallets manufactured from quality timber.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={addToRefs}
          className="reveal-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 space-y-4 hover:bg-[#14203b] p-2"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src="images/home card 2.jpg"
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Custom Design"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-[#ff661a] rounded-full shrink-0 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="2" y1="14" x2="6" y2="14" />
                <line x1="10" y1="8" x2="14" y2="8" />
                <line x1="18" y1="16" x2="22" y2="16" />
              </svg>
            </div>
            <h3 className="font-bold text-xl group-hover:text-[#ff661a] transition-colors duration-300">
              Custom Design
            </h3>
          </div>
          <p className="text-gray-500 group-hover:text-white">
            Tailor-made pallet solutions for specific size and load needs.
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={addToRefs}
          className="reveal-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 space-y-4 hover:bg-[#14203b] p-2"
          style={{ transitionDelay: "300ms" }}
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src="images/home card 3.jpg"
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Repair Service"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-[#ff661a] rounded-full shrink-0 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl group-hover:text-[#ff661a] transition-colors duration-300">
              Repair Service
            </h3>
          </div>
          <p className="text-gray-500 group-hover:text-white">
            Cost-effective pallet repair and refurbishment services.
          </p>
        </div>

        {/* Card 4 */}
        <div
          ref={addToRefs}
          className="reveal-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 space-y-4 hover:bg-[#14203b] p-2"
          style={{ transitionDelay: "450ms" }}
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src="images/home card 4.jpg"
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Bulk Supply"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-[#ff661a] rounded-full shrink-0 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className="font-bold text-xl group-hover:text-[#ff661a] transition-colors duration-300">
              Bulk Supply
            </h3>
          </div>
          <p className="text-gray-500 group-hover:text-white">
            Reliable bulk pallet supply with timely delivery services.
          </p>
        </div>
      </section>

      {/* 2. UPDATED SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#ff661a] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center animate-bounce"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Service;