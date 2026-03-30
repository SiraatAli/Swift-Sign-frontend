

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-md">
      <Link to="/">
        <img
          src="images/logo.png"
          alt="Swift Signature Logo"
          className="h-12 md:h-15"
        />
      </Link>

      {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
      <nav className="hidden lg:block">
        <ul className="flex gap-4 md:gap-8 font-bold text-[#0e172c]">
          <li>
            <Link to="/" className="hover:text-[#f46020] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#f46020] transition-colors"
            >
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative group">
            <Link
              to="/services"
              className="hover:text-[#f46020] transition-colors flex items-center gap-1"
            >
              Service <span className="text-xs">▼</span>
            </Link>
            <ul className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <li>
                <Link
                  to="/services/design"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  PALLETS SALE
                </Link>
              </li>
              <li>
                <Link
                  to="/services/buying"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  BUYING USED PALLETS
                </Link>
              </li>
              <li>
                <Link
                  to="/services/custom"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  CUSTOM SIZE PALLETS
                </Link>
              </li>
            </ul>
          </li>

          {/* PRODUCTS DROPDOWN */}
          <li className="relative group">
            <Link
              to="/products"
              className="hover:text-[#f46020] transition-colors flex items-center gap-1"
            >
              Products <span className="text-xs">▼</span>
            </Link>
            <ul className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <li>
                <Link
                  to="/products/new"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  NEW PALLETS
                </Link>
              </li>
              <li>
                <Link
                  to="/products/euro"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  EURO PALLETS
                </Link>
              </li>
              <li>
                <Link
                  to="/products/recycled"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Recycled Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/heavy"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Heavy Duty Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/heat"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Heat Treated Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/skid"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Skid Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/chemical"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Chemical (CP) Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/refurbished"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Refurbished Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/plastic"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Plastic Pallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/wooden"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#f46020]"
                >
                  Wooden Box
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/gallery"
              className="hover:text-[#f46020] transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#f46020] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {/* GET QUOTE BUTTON - Now hidden on small screens, flex on medium+ screens */}
        <Link
          to="/contact"
          className="hidden md:flex bg-[#f46020] text-white px-5 py-2.5 rounded items-center gap-2 font-bold hover:bg-[#2f1d17] transition-all md:text-base whitespace-nowrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 hidden sm:block"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12v1.17c0 1.05.78 1.94 1.82 2.08 1.49.2 2.68 1.4 2.68 2.92 0 1.66 1.34 3 3 3h4.83c.53 0 1.04-.21 1.41-.59l4.59-4.59c.38-.37.59-.88.59-1.41V12c0-5.52-4.48-10-10-10z" />
          </svg>
          Get Quote
        </Link>

        {/* BURGER BUTTON (Visible on Mobile/Tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#0e172c] focus:outline-none p-2"
        >
          {isOpen ? (
            <span className="text-2xl font-bold">X</span>
          ) : (
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-[#0e172c]"></span>
              <span className="block w-6 h-0.5 bg-[#0e172c]"></span>
              <span className="block w-6 h-0.5 bg-[#0e172c]"></span>
            </div>
          )}
        </button>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[300px] bg-[#0e172c] text-white z-[60] transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="flex justify-end p-6 bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-xl font-bold"
          >
            X
          </button>
        </div>

        <ul className="flex flex-col text-sm font-bold uppercase tracking-wider">
          <li className="border-b border-gray-700">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 hover:text-[#f46020]"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 hover:text-[#f46020]"
            >
              About
            </Link>
          </li>

          {/* MOBILE SERVICE DROPDOWN */}
          <li className="border-b border-gray-700">
            <div className="flex items-center justify-between">
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 flex-grow"
              >
                Service
              </Link>
              <button
                onClick={() => toggleDropdown("service")}
                className="px-6 py-4 border-l border-gray-700 bg-gray-800/50"
              >
                {activeDropdown === "service" ? "−" : "+"}
              </button>
            </div>
            {activeDropdown === "service" && (
              <ul className="bg-gray-800/30 text-xs">
                <li>
                  <Link
                    to="/services/design"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Pallets Sale
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/buying"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Buying Used Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/custom"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Custom Size Pallets
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* MOBILE PRODUCTS DROPDOWN */}
          <li className="border-b border-gray-700">
            <div className="flex items-center justify-between">
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 flex-grow"
              >
                Products
              </Link>
              <button
                onClick={() => toggleDropdown("products")}
                className="px-6 py-4 border-l border-gray-700 bg-gray-800/50"
              >
                {activeDropdown === "products" ? "−" : "+"}
              </button>
            </div>
            {activeDropdown === "products" && (
              <ul className="bg-gray-800/30 text-xs max-h-60 overflow-y-auto">
                <li>
                  <Link
                    to="/products/new"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    New Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/euro"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Euro Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/recycled"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Recycled Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/heavy"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Heavy Duty Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/heat"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Heat Treaetd Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/skid"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Skid Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/chemical"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Chemical (CD) Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/refurbished"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Refurbished Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/plastic"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Plastic Pallets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/wooden"
                    onClick={() => setIsOpen(false)}
                    className="block px-10 py-3 border-b border-gray-700/50"
                  >
                    Wooden Pallets
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="border-b border-gray-700">
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 hover:text-[#f46020]"
            >
              Gallery
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 hover:text-[#f46020]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}