

import React, { useState, useEffect } from "react"; // Added useEffect
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Skid = () => {
  // --- STATE FOR SCROLL TO TOP ---
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      name: "Abdul Fahad",
      role: "BDM",
      image: "/images/team3.jpg",
      text: "Swift Sign's branding solutions have proven to be a cost-effective and eye-catching solution for our business.",
    },
    {
      name: "Robert",
      role: "Purchase Manager",
      image: "/images/team3.jpg",
      text: "Swift Sign provided us with durable and customized signage that perfectly fit our retail needs.",
    },
    {
      name: "Evelyn",
      role: "Admin Mnager",
      image: "/images/team3.jpg", // Placeholder for new image
      text: "The turnaround time was incredible. We had our entire storefront rebranded in less than a week!",
    },
  ];

  // --- STATE FOR SECTION 2 (Tabs) ---
  const [activeTab, setActiveTab] = useState("NEW SIGNAGE");

  // --- STATE FOR SECTION 3 (Slider) ---
  const sliderImages = [
    "/images/product new 1.jpg",
    "/images/product new 2.jpg",
    "/images/product new 1.jpg",
    "/images/product new 2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 relative">
      {/* SCROLL TO TOP BUTTON (No hover effects) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#2b3a55] text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center border border-white/10 transition-opacity duration-300"
        >
          ↑
        </button>
      )}

      {/* 1. HERO HEADER SECTION */}
      <section className="relative h-[350px] flex flex-col items-center justify-center text-white text-center">
        <div className="absolute inset-0 z-0 bg-[#2b3a55]">
          <img
            src="/images/about 1.jpg"
            className="w-full h-full object-cover opacity-40"
            alt="Swift Sign Warehouse"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold uppercase tracking-tight">
            SKID PALLETS
          </h1>
          <p className="text-xl mt-3 font-medium opacity-90">
            <a href="/" className="hover:text-orange-300 transition-colors">
              Home
            </a>{" "}
            | Skid Pallets
          </p>
        </div>
      </section>

      {/* 2. CATEGORY SELECTION SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <h4 className="text-[#d6c2a1] font-bold uppercase tracking-[0.2em] text-sm">
              Swift Sign UAE
            </h4>
            <h2 className="text-5xl font-black text-[#2b3a55] mt-2">
              Find Your Dream Signage
            </h2>
          </div>

          <div className="flex flex-wrap gap-1">
            {[
              "NEW SIGNAGE",
              "USED DISPLAYS",
              "HEAVY DUTY MOUNTS",
              "STRING PALLETS",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-xs font-bold uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#d6c2a1] text-white shadow-lg"
                    : "text-slate-400 hover:text-[#2b3a55]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Outdoor Signage",
              "Acrylic Letters",
              "Neon Displays",
              "Digital Displays",
              "Wing Type Pallets",
              "4-way 3 Bottom",
            ].map((feat) => (
              <div
                key={feat}
                className="flex items-center p-6 bg-white border border-slate-100 rounded shadow-sm hover:border-b-[#d6c2a1] hover:border-b-2 transition-all"
              >
                <span className="text-green-500 mr-4 font-bold text-xl">✓</span>
                <span className="font-bold text-slate-700">{feat}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-100 h-96 border-[12px] border-white">
            <img
              src={
                activeTab === "NEW SIGNAGE"
                  ? "/images/product new 1.jpg"
                  : activeTab === "USED DISPLAYS"
                    ? "/images/product new 2.jpg"
                    : "/images/product new 1.jpg"
              }
              alt={activeTab}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      {/* 3. EXPLORE PRODUCT DETAILS SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-12 rounded-full shadow-inner aspect-square flex items-center justify-center relative overflow-hidden">
              <img
                src={sliderImages[currentIndex]}
                className="w-4/5 drop-shadow-2xl transition-all duration-500"
                alt="Swift Sign Slider"
              />
            </div>

            {/* LEFT BUTTON */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-x-1/2 bg-[#d6c2a1] text-white p-4 rounded-full shadow-xl hover:bg-blue-900 transition-colors z-10"
            >
              ←
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 translate-x-1/2 bg-[#d6c2a1] text-white p-4 rounded-full shadow-xl hover:bg-blue-900 transition-colors z-10"
            >
              →
            </button>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-4xl font-black text-[#2b3a55] mb-8 leading-tight">
              Explore High-Quality {activeTab} Solutions at Swift Sign UAE
            </h2>
            <div className="border-l-8 border-[#d6c2a1] pl-8 mb-10">
              <p className="text-slate-600 text-lg leading-relaxed italic">
                Welcome to Swift Sign UAE, your trusted partner for premium
                branding crafted with precision. We specialize in delivering
                top-quality signage solutions tailored to meet the diverse needs
                of our clients.
              </p>
            </div>
            <p className="font-bold text-[#2b3a55] mb-6 text-xl">
              Applications of {activeTab}:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Corporate Branding",
                "Retail Frontages",
                "Events and Exhibitions",
                "Interior Decor",
              ].map((app) => (
                <div key={app} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#d6c2a1] rounded-full flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                  <span className="font-bold text-slate-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-black text-[#2b3a55] mb-8">
          Why Choose Swift Sign?
        </h2>
        <div className="space-y-8">
          {[
            {
              t: "Premium Materials",
              d: "Our signs are crafted using high-grade acrylic, metal, and LED components.",
            },
            {
              t: "Customization",
              d: "Visual designs and dimensions tailored to your specific brand identity.",
            },
            {
              t: "Durability",
              d: "Weather-resistant finishes ensure your brand stays bright for years.",
            },
            {
              t: "Expert Installation",
              d: "Professional mounting and maintenance to ensure long-term visibility.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-2xl font-black text-slate-300">
                {i + 1}.
              </span>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-800 text-lg">{item.t}:</strong>{" "}
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="relative pt-24 pb-32 bg-[#f8f9fa]">
        {/* Background Header Block */}
        <div className="absolute top-0 left-0 w-full h-80 bg-[#34445e]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d6c2a1] font-bold uppercase tracking-widest text-sm mb-4">
              Client Testimonials
            </p>
            <h2 className="text-5xl font-black text-white">
              What our clients say
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="pb-12">
                <div className="bg-white p-10 shadow-xl flex flex-col items-start text-left h-full">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative">
                      <img
                        src={item.image}
                        className="w-20 h-20 rounded-full object-cover"
                        alt={item.name}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#d6c2a1] text-[#34445e] w-8 h-8 rounded-full flex items-center justify-center font-serif text-xl">
                        “
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#2b3a55]">
                        {item.name}
                      </h4>
                      <p className="text-slate-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .testimonial-swiper .swiper-pagination-bullet-active {
            background: #d6c2a1 !important;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Skid;