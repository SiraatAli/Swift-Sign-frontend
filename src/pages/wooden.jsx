
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// --- Custom SVG Icon Components ---
const ChevronRightIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const MoveRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8L22 12L18 16" />
    <path d="M2 12H22" />
  </svg>
);

const DoorIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d97706"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 12h18M12 3v18" />
  </svg>
);

// New Icon for Scroll Top
const ScrollTopIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const Wooden = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Logic to show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[300px] w-full flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/about 1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#2d3a5a]/85 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Wooden Pallets Sale
          </h1>
          <nav className="text-sm md:text-base text-gray-200 font-medium">
            <ul className=" text-xl flex items-center justify-center space-x-2">
              <li>
                <a href="/" className="hover:text-orange-300 transition-colors">
                  Home
                </a>
              </li>
            
              <li className="before:content-['|'] before:mr-2">
                <span className="text-white">Wooden Pallets Sale</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white p-6 border border-slate-100 shadow-sm rounded-md">
            <h3 className="text-xl font-bold text-[#1e293b] mb-6">
              Popular Services
            </h3>

            <div className="flex flex-col space-y-3">
              <Link
                to="/services/buying"
                className="group flex items-center justify-between p-4 border border-slate-200 rounded text-slate-700 font-semibold hover:bg-orange-300 hover:border-blue-200 transition-all no-underline"
              >
                {/* Added group-hover:text-white here */}
                <span className="group-hover:text-white transition-colors duration-300">
                  Buying Used Pallets
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-[#1e293b] stroke-2 group-hover:translate-x-1 group-hover:stroke-white transition-all"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>

              <Link
                to="/services/custom"
                className="group flex items-center justify-between p-4 border border-slate-200 rounded text-slate-700 font-semibold hover:bg-orange-300 hover:border-blue-200 transition-all no-underline"
              >
                <span className="group-hover:text-white transition-colors duration-300">
                  Custom Size Pallets
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-[#1e293b] stroke-2 group-hover:translate-x-1 group-hover:stroke-white transition-all"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>

              <Link
                to="/products/wooden"
                className="group flex items-center justify-between p-4 border border-slate-200 rounded text-slate-700 font-semibold hover:bg-orange-300 hover:border-blue-200 transition-all no-underline"
              >
                <span className="group-hover:text-white transition-colors duration-300">
                  Wooden Pallets Sale
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-[#1e293b] stroke-2 group-hover:translate-x-1 group-hover:stroke-white transition-all"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Profile Card */}
          <div className="bg-[#3b4a6b] p-6 rounded-lg text-white shadow-lg relative overflow-hidden">
            <img
              src="/images/buy 1.jpeg"
              alt="Swift Sign Workshop"
              className="rounded-md mb-6 w-full h-48 object-cover shadow-inner"
            />
            <h4 className="text-xl font-bold mb-3">Swift Sign Profile</h4>
            <p className="text-slate-200 text-sm mb-8 leading-relaxed">
              Trust Swift Sign for superior quality, reliability, and
              personalized branding services tailored to meet your business
              identity.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#122249] hover:bg-[#1a2542] text-white font-semibold py-4 px-8 transition-colors duration-300"
            >
              Download
            </Link>
          </div>
        </aside>

        <main className="lg:col-span-8 w-100">
          <div className="relative">
            <div className="relative h-[450px] overflow-hidden rounded-sm">
              <img
                src="/images/sale 2.jpg"
                className="w-100 h-full object-cover"
                alt="Truck with pallets"
              />
            </div>
            <div className="mt-16 px-2">
              <h2 className="text-3xl font-extrabold text-[#1e293b] mb-4">
                Wooden Pallets Sale
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
                NAF Carpentry, your reliable partner for purchasing high-quality
                wooden pallets. We specialize in providing sturdy solutions that
                meet international shipping standards.
              </p>
              <a
                href="/services/buying"
                className="inline-flex items-center font-bold text-[#2d3a5a] group hover:text-orange-300 transition-colors"
              >
                Read More
                <span className="ml-3 group-hover:translate-x-2 transition-transform">
                  <MoveRightIcon />
                </span>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* --- FLOATING BUTTONS --- */}

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-28 right-8 z-50 p-3 rounded-md bg-[#2d3a5a] text-white shadow-xl transition-all duration-300 hover:bg-blue-600 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ScrollTopIcon />
      </button>
    </div>
  );
};

export default Wooden;