
import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect } from "react"; // Added useEffect
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa"; // Added Arrow Up Icon




const LandingPage = () => {


  // Add your image URLs here
  const slides = [
 
    "images/home 01.jpg",
    "images/sale 2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play logic (moves every 5 seconds)
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  // 1. State for the About Section Tabs
  const [activeTab, setActiveTab] = useState("history");

  // 2. State for Gallery Filtering
  const [activeFilter, setActiveFilter] = useState("All");

  // --- 3. Scroll to Top Logic ---
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
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

  // Data for About Tabs
  const tabContent = {
    history: {
      title: "Our History",
      text: (
        <>
          <p>
            Swift Sign General Trading is a trusted supplier of pallet solutions
            of the highest quality. Since our establishment, we have focused on
            delivering durable, cost-effective, and performance-driven pallet
            products tailored to meet the needs of logistics, warehousing,
            manufacturing, and distribution sectors.
          </p>
          <p>
            Our commitment to quality materials, precision manufacturing, and
            reliable service has positioned us as a dependable partner for
            businesses seeking strong and sustainable pallet systems.
          </p>
        </>
      ),
    },
    mission: {
      title: "Our Mission",
      text: (
        <>
          <p>
            Our mission is to provide sustainable and innovative pallet
            solutions that enhance global supply chain efficiency. We aim to be
            the industry leader by maintaining the highest standards of
            durability and customer satisfaction.
          </p>
          <p>
            We strive to empower our clients with products that ensure safety
            and optimize storage space, reducing operational overhead for
            businesses worldwide.
          </p>
        </>
      ),
    },
    support: {
      title: "Support",
      text: (
        <>
          <p>
            We offer dedicated support to ensure your logistics never stop. From
            custom design consultations to bulk supply maintenance, our expert
            team is available 24/7 to help you choose the right materials.
          </p>
          <p>
            Whether you need technical advice on ISPM-15 standards or urgent
            delivery for a large-scale project, Swift Sign is committed to your
            success.
          </p>
        </>
      ),
    },
  };


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

     const categories = [
       "All",
       "Wooden Pallets",
       "Custom Designs",
       "Bulk Supply",
     ];

  return (
    <main className="w-full min-h-screen bg-white font-sans relative">
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
        {/* --- SLIDING BACKGROUND LAYER --- */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((url, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url('${url}')` }}
            >
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-black/50 to-black/60 mix-blend-multiply"></div>
            </div>
          ))}
        </div>

        {/* --- PREVIOUS BUTTON (Orange Tab) --- */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff6a28] hover:bg-[#0e172c] text-white py-12 px-3 md:px-5 flex items-center justify-center transition-all shadow-xl group"
          style={{ clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0% 100%)" }}
        >
          <span className="[writing-mode:vertical-lr] rotate-180 font-bold tracking-widest text-xs md:text-sm uppercase">
            Previous
          </span>
        </button>

        {/* --- NEXT BUTTON (Orange Tab) --- */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff6a28] hover:bg-[#0e172c] text-white py-12 px-3 md:px-5 flex items-center justify-center transition-all shadow-xl group"
          style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" }}
        >
          <span className="[writing-mode:vertical-lr] font-bold tracking-widest text-xs md:text-sm uppercase">
            Next
          </span>
        </button>

        {/* --- CONTENT AREA (Static over the sliding background) --- */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto pointer-events-none">
          <div className="pointer-events-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 tracking-tight drop-shadow-2xl">
              Pallet Solutions Of The <br className="hidden md:block" /> Highest
              Quality
            </h1>

            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-3xl font-medium mx-auto">
              Swift Sign General Trading: Supplier of durable, high-quality
              pallets for efficient storage and transport
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6a28] hover:bg-[#0e172c] text-white font-bold py-4 px-10 transition-colors duration-300"
              >
                Learn More <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0e172c] border border-transparent hover:bg-transparent border-black text-white text-white font-bold py-4 px-10 transition-colors duration-300"
              >
                Contact Us <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* --- SLIDE INDICATORS (Optional) --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 ">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === i ? "w-10 bg-[#ff6a28]" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: ABOUT SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveTab("history")}
                className={`${activeTab === "history" ? "bg-[#f46020]" : "bg-[#0e172c]"} text-white px-8 py-3 font-bold transition hover:bg-[#cf5d1f]`}
              >
                Our History
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`${activeTab === "mission" ? "bg-[#f46020] " : "bg-[#0e172c]"} text-white px-8 py-3 font-bold transition hover:bg-[#cf5d1f]`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("support")}
                className={`${activeTab === "support" ? "bg-[#f46020]" : "bg-[#0e172c]"} text-white px-8 py-3 font-bold transition hover:bg-[#cf5d1f]`}
              >
                Support
              </button>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0e172c] mb-2">
              {tabContent[activeTab].title}
            </h2>
            <div className="w-16 h-1 bg-[#f46020] mb-8"></div>

            <div className="text-gray-700 text-lg leading-relaxed space-y-6 min-h-[220px]">
              {tabContent[activeTab].text}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#f46020]  text-white font-semibold py-3 px-5 mt-5  transition-colors duration-300"
            >
              Read More <span>→</span>
            </Link>
          </div>

          <div className="flex-1 w-full">
            <img
              src="/images/home 1.jpg"
              alt="Pallets"
              className="rounded-lg shadow-xl w-full h-auto object-cover min-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES */}
      <section className="py-20 bg-gray-50 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-[#0e172c] mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Swift Sign General Trading provides pallet solutions of the
                highest quality, delivering durable, reliable, and
                cost-effective products.
              </p>
            </div>
            <a
              href="/services"
              className="text-[#f46020] font-bold flex items-center gap-2 border-b-2 border-[#f46020] pb-1 hover:text-black transition"
            >
              View All Services <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wooden Pallets",
                img: "images/home card 1.jpg",
                desc: "High-quality, durable wooden pallets designed for heavy-duty logistics and secure storage.",
              },
              {
                title: "Custom Pallet Design",
                img: "images/home card 2.jpg",
                desc: "Tailor-made pallet solutions designed to meet your specific dimensions and load requirements.",
              },
              {
                title: "Pallet Repair",
                img: "images/home 8.jpg",
                desc: "Extend the life of your inventory with our professional repair and maintenance services.",
              },
              {
                title: "Bulk Supply",
                img: "images/home card 4.jpg",
                desc: "Reliable bulk supply chains to keep your warehouse and logistics operations running smoothly.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col h-full bg-white group cursor-pointer shadow-sm transition-all duration-300 hover:bg-[#0e172c]"
              >
                <div className="overflow-hidden">
                  <img
                    src={`${service.img}`}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 border-t-2 border-[#f46020] flex flex-col flex-grow text-left">
                  <h3 className="font-bold text-[#0e172c] text-xl mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow group-hover:text-gray-200 transition-colors">
                    {service.desc}
                  </p>

                  <a
                    href="/services"
                    className="text-[#f46020] font-bold flex items-center gap-2 pb-1 hover:text-orange-700 transition"
                  >
                    Learn More <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="lg:w-1/2 w-full h-[400px] lg:h-auto">
          <img
            src="images/hime 5.jpg"
            alt="Large stack of pallets"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full bg-[#0e172c] text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#f46020]"></div>
            <span className="text-[#f46020] font-bold tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Choose Swift Sign <br /> General Trading
          </h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f46020] rounded-full flex items-center justify-center z-10">
                🏢
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Premium Quality Materials
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Swift Sign provides pallet solutions of the highest quality,
                  using durable raw materials and strict quality control.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f46020] rounded-full flex items-center justify-center z-10">
                🚚
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Reliable & Efficient Delivery
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We ensure timely delivery and consistent supply chains to keep
                  your operations moving without interruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-amber-600">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Contact Swift Sign General Trading For High-Quality Pallet
              Solutions
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-95">
              Swift Sign General Trading provides pallet solutions of the
              highest quality, ensuring reliable supply, durable materials, and
              professional customer support tailored to your business needs.
            </p>
          </div>

          {/* The Dark Navy Button */}
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-[#0e172c] hover:bg-white hover:text-[#0e172c] text-white px-8 py-5 font-bold text-sm md:text-base transition-all duration-300 group shadow-2xl"
            >
              REQUEST A QUOTE
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
                »
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: GALLERY SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <main className="w-full max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-bold text-[#0A1128] mb-2">
              Swift Sign General Trading Gallery
            </h2>
            <div className="h-0.5 w-40 flex mx-auto mb-8">
              <div className="bg-gray-300 w-1/2"></div>
              <div className="bg-[#FF5E13] w-1/2"></div>
            </div>

            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              Swift Sign General Trading provides pallet solutions of the
              highest quality, delivering durable, custom-built, and bulk supply
              pallet systems.
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

          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 bg-[#e13d20] hover:bg-[#0e0d34] text-white font-semibold py-4 px-8 mt-10 transition-colors duration-300"
          >
            view more <span>→</span>
          </Link>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://swiftsigngeneraltrading.com/img/prod/3.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#0e172c]/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="group bg-white hover:bg-[#f46020] p-8 md:p-10 relative flex flex-col shadow-lg transition-all duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="images/officer.jpg"
                  alt="Saeed"
                  className="w-16 h-16 rounded-full border-2 border-gray-100 object-cover"
                />
                <div>
                  <h4 className="font-bold text-xl text-[#0e172c] group-hover:text-white">
                    Siraat Ali
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-orange-100">
                    Logistics Manager
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic group-hover:text-white transition-colors">
                "Swift Sign General Trading consistently delivers high-quality
                wooden pallets that meet our heavy-load requirements. Their
                reliability and fast delivery have significantly improved our
                supply chain efficiency."
              </p>
              <div className="mt-6 flex text-yellow-300 text-xl group-hover:scale-110 transition-transform origin-left">
                ★★★★★
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white hover:bg-[#f46020] p-8 md:p-10 relative flex flex-col shadow-lg transition-all duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="images/super.jpg"
                  alt="Ali"
                  className="w-16 h-16 rounded-full border-2 border-orange-400 object-cover"
                />
                <div>
                  <h4 className="font-bold text-xl group-hover:text-white">
                    Ali
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-orange-100">
                    Procurement Officer
                  </p>
                </div>
              </div>
              <p className="leading-relaxed italic text-gray-700 group-hover:text-white transition-colors">
                "The custom pallet solutions provided were exactly tailored to
                our export specifications. Quality standards are excellent, and
                their team is highly professional throughout the process."
              </p>
              <div className="mt-6 flex text-yellow-300 text-xl group-hover:scale-110 transition-transform origin-left">
                ★★★★★
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white hover:bg-[#f46020] p-8 md:p-10 relative flex flex-col shadow-lg transition-all duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="images/team3.jpg"
                  alt="Saeed Ali"
                  className="w-16 h-16 rounded-full border-2 border-gray-100 object-cover"
                />
                <div>
                  <h4 className="font-bold text-xl text-[#0e172c] group-hover:text-white">
                    Saeed Ali
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-orange-100">
                    Warehouse Supervisor
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic group-hover:text-white transition-colors">
                "Their pallet repair and bulk supply services help us reduce
                operational costs without compromising durability. Swift Sign
                General Trading is a trusted partner for our daily logistics
                needs."
              </p>
              <div className="mt-6 flex text-yellow-300 text-xl group-hover:scale-110 transition-transform origin-left">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LATEST INSIGHTS */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e172c] mb-6">
              Latest Insights & Industry Updates
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Swift Sign General Trading provides reliable and durable pallet
              solutions for logistics, warehousing, and export industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col h-full bg-white group">
              <div className="overflow-hidden mb-0">
                <img
                  src="images/home 6.jpg"
                  alt="Wooden Pallets"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 border-t-2 border-[#f46020] flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    🕒 10 Jan 2026
                  </span>
                  <span className="flex items-center gap-1">👤 Swift Team</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e172c] mb-4  transition-colors leading-tight">
                  Choosing The Right Wooden Pallets For Heavy-Duty Logistics
                </h3>
                <p>
                  Selecting the correct pallet type is critical for load safety
                  and warehouse efficiency. Learn how heavy-duty wooden pallets
                  improve durability, stacking strength, and transportation
                  reliability
                </p>
                <a
                  href="#"
                  className="mt-auto text-[#f46020] hover:text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  LEAR MORE <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col h-full bg-white group">
              <div className="overflow-hidden mb-0">
                <img
                  src="images/home 11.jpg"
                  alt="Export Pallets"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 border-t-2 border-[#f46020] flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    🕒 25 Jan 2026
                  </span>
                  <span className="flex items-center gap-1">👤 Swift Team</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e172c] mb-4  transition-colors leading-tight">
                  Why ISPM-15 Certification Matters For Export Pallets
                </h3>
                <p>
                  International shipping regulations require heat-treated
                  pallets that comply with ISPM-15 standards. Discover how
                  certified pallets protect your shipments and prevent customs
                  delays.
                </p>
                <a
                  href="#"
                  className="mt-auto text-[#f46020] hover:text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  LEAR MORE <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col h-full bg-white group">
              <div className="overflow-hidden mb-0">
                <img
                  src="images/home 1.jpg"
                  alt="Warehouse Optimization"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 border-t-2 border-[#f46020] flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    🕒 05 Feb 2026
                  </span>
                  <span className="flex items-center gap-1">👤 Swift Team</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e172c] mb-4  transition-colors leading-tight">
                  Custom Pallet Solutions For Warehouse Optimization
                </h3>
                <p>
                  Custom-sized pallets maximize storage space and improve
                  operational workflow. Explore how tailored pallet
                  manufacturing supports safer handling and cost efficiency
                </p>
                <a
                  href="#"
                  className="mt-auto text-[#f46020] hover:text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  LEAR MORE <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <div className="fixed bottom-10 right-8 z-50 group flex items-center">
        {/* Hover Input Box */}
        <div
          className="mr-3 bg-white text-gray-700 px-4 py-2 rounded-md shadow-lg 
  opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
  transition-all duration-300 pointer-events-none"
        >
          Chat with us
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+971561552714"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center rounded-full 
    bg-green-500 hover:bg-green-600 text-white text-3xl shadow-xl 
    transition-transform duration-300 hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* --- SCROLL TO TOP ARROW BUTTON --- */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-1 right-10 z-50 p-2 rounded-md bg-[#f46020] text-white shadow-2xl transition-all duration-500 hover:bg-[#0e172c] hover:-translate-y-2 ${
          showScroll
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
        z
      >
        <FaArrowUp size={24} />
      </button>
    </main>
  );
};;;

export default LandingPage;