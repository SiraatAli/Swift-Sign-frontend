import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Design = () => {
  // --- Scroll-to-Top Logic ---
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0, make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // ---------------------------

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative h-[250px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/about 1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-[#1e293b]/85 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Service Details
          </h1>
          <nav className="text-sm font-medium flex items-center justify-center gap-3">
            <a href="/" className="hover:text-blue-300 transition-colors">
              Home
            </a>{" "}
            <span>|</span>
            <a
              href="/services"
              className="hover:text-blue-300 transition-colors"
            >
              Services
            </a>{" "}
            <span>|</span>
            <span className="opacity-80">Pallets Wooden Sale</span>
          </nav>
        </div>
      </section>

      {/* 2. MAIN GRID LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
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

            <div className="bg-[#3b4a6b] p-6 rounded-lg text-white shadow-lg relative overflow-hidden">
              <img
                src="/images/image.jpeg"
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

          {/* RIGHT CONTENT AREA */}
          <main className="lg:col-span-8 space-y-12">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/sale 2.jpg"
                alt="Signage Design"
                className="w-full h-auto"
              />
            </div>

            <article className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#1e293b]">
                  Custom Signage Solutions
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  At Swift Sign, we take pride in offering a seamless process
                  for creating your custom business signs. Whether you're
                  looking to enhance your storefront or upgrade your office
                  interior, we provide a straightforward solution that ensures
                  high visibility and professional quality.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1e293b]">
                  Why Choose Swift Sign for Your Business?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-blue-900 font-bold">•</span>
                    <p>
                      <strong>Premium Design Quality:</strong> We offer modern
                      designs based on the current market trends, ensuring your
                      brand receives maximum attention.
                    </p>
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-blue-900 font-bold">•</span>
                    <p>
                      <strong>Precision Engineering:</strong> Our streamlined
                      manufacturing process makes getting your signs installed
                      hassle-free and efficient.
                    </p>
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-blue-900 font-bold">•</span>
                    <p>
                      <strong>Durable Materials:</strong> By choosing Swift
                      Sign, you invest in sustainable and long-lasting materials
                      that withstand the elements.
                    </p>
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-blue-900 font-bold">•</span>
                    <p>
                      <strong>Trust and Reliability:</strong> With years of
                      experience in the signage industry, Swift Sign is a
                      trusted partner known for integrity and prompt delivery.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Single Image Feature Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-slate-50/70 p-8 rounded-3xl border border-slate-100">
                <div className="overflow-hidden rounded-2xl shadow-sm border-4 border-white">
                  <img
                    src="/images/sale 3.png"
                    alt="Swift Sign Manufacturing"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-[#1e293b]">
                    How It Works
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    When you choose Swift Sign for your custom branding needs,
                    here's what you can expect:
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-bold text-[#1e293b]">
                      Consultation & Design:
                    </h5>
                    <p className="text-slate-600 text-sm">
                      We assess your location and brand requirements to create a
                      sign that fits your space perfectly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Details Section */}
              <div className="space-y-6 pt-6 border-l-4 border-[#d4c3a3] pl-6 text-slate-600">
                <p className="font-bold text-[#1e293b]">
                  When you choose Swift Sign, you can expect:
                </p>
                <p>
                  <strong>Proposal:</strong> Based on our consultation, we
                  provide a competitive quote for your custom project.
                </p>
                <p>
                  <strong>Manufacturing:</strong> We build your signs using
                  high-precision technology in our local workshop.
                </p>
                <p>
                  <strong>Installation:</strong> Once the signage is ready, we
                  arrange for professional installation at your site.
                </p>
              </div>

              {/* Bottom Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                {[
                  {
                    t: "Illuminated Signs",
                    d: "High-visibility LED signs tailored to make your brand stand out day and night.",
                  },
                  {
                    t: "Vinyl Graphics",
                    d: "Precision-cut vinyl for windows, walls, and vehicles to maximize your reach.",
                  },
                  {
                    t: "Custom 3D Letters",
                    d: "Premium dimensional lettering that adds depth and professionalism to your office.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#d4c3a3] rounded-lg flex items-center justify-center mb-6">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 fill-[#1e293b]"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#1e293b] mb-4">
                      {card.t}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {card.d}
                    </p>
                  </div>
                ))}
              </div>

              {/* Final Contact Us Section */}
              <div className="pt-16 space-y-6">
                <h3 className="text-3xl font-bold text-[#1e293b]">
                  Contact Us Today
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Ready to upgrade your business visibility? Contact Swift Sign
                  today to discuss your project and receive a professional
                  quote. Join numerous businesses who trust us for our quality,
                  reliability, and commitment to excellence.
                </p>
              </div>
            </article>
          </main>
        </div>
      </section>

      {/* --- SCROLL TO TOP SLIDER BUTTON --- */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="group relative flex items-center justify-center w-12 h-12 bg-[#1e293b] text-[#d4c3a3] rounded-full shadow-2xl hover:bg-[#d4c3a3] hover:text-[#1e293b] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-none stroke-current stroke-2 transform group-hover:-translate-y-1 transition-transform"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          {/* Tooltip-style slider label */}
          <span className="absolute right-14 bg-[#1e293b] text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Back to Top
          </span>
        </button>
      </div>
    </div>
  );
};

export default Design;
