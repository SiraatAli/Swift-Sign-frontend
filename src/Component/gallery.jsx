import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa"; // Replaced FaRocket with FaArrowUp

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

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

  const galleryData = [
    {
      id: 1,
      category: "Wooden Pallets",
      img: "images/home 01.jpg",
      title: "Standard EPAL Pallet",
    },
    {
      id: 2,
      category: "Wooden Pallets",
      img: "images/home 1.jpg",
      title: "Stacked Pine Pallets",
    },
    {
      id: 3,
      category: "Custom Designs",
      img: "images/home 6.jpg",
      title: "Industrial Storage",
    },
    {
      id: 4,
      category: "Bulk Supply",
      img: "images/home 9.jpeg",
      title: "Warehouse Logistics",
    },
    {
      id: 5,
      category: "Custom Designs",
      img: "images/home 11.jpg",
      title: "Heat Treated Wood",
    },
    {
      id: 6,
      category: "Bulk Supply",
      img: "images/home card 1.jpg",
      title: "Factory Stock",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  const categories = ["All", "Wooden Pallets", "Custom Designs", "Bulk Supply"];

  return (
    <div className="w-full bg-white font-sans relative">
      {/* --- HERO HEADER --- */}
      <section
        className="relative h-64 w-full bg-cover bg-center flex items-center px-8"
        style={{
          backgroundImage: `url('images/home card 3.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-center h-full">
          <h1 className="text-white text-5xl font-bold">Gallery</h1>
          <div className="absolute -bottom-1 right-10 bg-[#FF5E13] px-8 py-5 flex items-center text-white font-semibold">
            <Link to="/" className="">
              Home
            </Link>
            <span className="mx-2">|</span>{" "}
            <span className="text-black">Gallery</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#FF5E13]"></div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <main className="w-full max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#0A1128] mb-2">
          Swift Sign General Trading Gallery
        </h2>
        <div className="h-0.5 w-40 flex mx-auto mb-8">
          <div className="bg-gray-300 w-1/2"></div>
          <div className="bg-[#FF5E13] w-1/2"></div>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Swift Sign General Trading provides pallet solutions of the highest
          quality, delivering durable, custom-built, and bulk supply pallet
          systems.
        </p>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-0 mb-12 border border-gray-100 shadow-sm inline-flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-4 text-base font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#FF5E13] text-white"
                  : "bg-[#0A1128] text-white hover:bg-[#1a253a]"
              } border-r border-white/10 last:border-0`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC IMAGE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-gray-100 h-64 rounded-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold text-xl">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>











      

      {/* --- SCROLL TO TOP ARROW BUTTON --- */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-md bg-[#FF5E13] text-white shadow-2xl transition-all duration-500 hover:bg-[#0A1128] hover:-translate-y-2 ${
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

export default Gallery;