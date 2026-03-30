
import React, { useState, useEffect } from "react"; // Added useState, useEffect
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSkype,
  FaPinterestP,
  FaArrowUp, // Added Arrow Icon
} from "react-icons/fa";

const About = () => {
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

 



   const teamMembers = [
     {
       id: 1,
       name: "Saeed",
       role: "Operations Manager",
       image:
         "images/about manager.avif", // Unique URL here
     },
     {
       id: 1,
       name: "Siraat Ali",
       role: "Mechanical Enginner",
       image:
         "images/abiut 3.jpg", // Unique URL here
     },
     {
       id: 1,
       name: "John Doe",
       role: "Quality Control Specialist",
       image:
         "images/about 4.webp", // Unique URL here
     },
     {
       id: 2,
       name: "Jane Smith",
       role: "Logistics Coordinator",
       image:
         "images/about 5.avif", // Unique URL here
     },
     // ... and so on
   ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const stats = [
    { label: "Happy Clients", value: 285 },
    { label: "Projects Completed", value: 128 },
    { label: "Customer Support Cases", value: 130 },
    { label: "Awards Won", value: 275 },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={12} />,
      href: "https://www.google.com/search?q=facebook+login...",
      label: "Facebook",
    },
    {
      icon: <FaTwitter size={12} />,
      href: "https://www.google.com/search?q=twitter+login...",
      label: "Twitter",
    },
    {
      icon: <FaLinkedinIn size={12} />,
      href: "https://www.google.com/search?q=linkedin+login...",
      label: "LinkedIn",
    },
    {
      icon: <FaSkype size={12} />,
      href: "https://www.google.com/search?q=skype+login...",
      label: "Skype",
    },
    {
      icon: <FaPinterestP size={12} />,
      href: "https://www.google.com/search?q=pinterest+login...",
      label: "Pinterest",
    },
  ];
 
  return (
    <main className="overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section
        className="relative h-[300px] w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('images/about 2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold">About US</h1>
        </div>
        <div className="absolute bottom-0 right-10 md:right-20">
          <div className="bg-[#ff661a] text-white px-8 py-4 flex items-center gap-2 font-semibold relative">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>|</span>
            <span className="opacity-90 text-black">About</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-[#ff661a] border-l-transparent border-r-transparent"></div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CONTENT */}
      <section className="py-20 bg-white container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-[#0e172c]">
            About Swift Signature <br /> General Trading
          </h2>
          <div className="w-16 h-1 bg-[#ff661a]"></div>

          <p className="text-gray-700 text-lg">
            Swift Signature General Trading is a trusted provider of
            high-quality pallet solutions, specializing in durable, custom-built
            systems for warehouses, factories, and logistics operations. Our
            commitment to excellence ensures that every pallet we supply meets
            the highest industry standards. <br /> <br /> From bulk supply
            orders to custom-designed pallets, we offer innovative and reliable
            solutions tailored to your specific storage and transportation
            needs. Our experienced team is dedicated to delivering efficiency,
            safety, and sustainability in every project we undertake.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#ff661a] text-white font-bold px-8 py-3 uppercase text-sm"
          >
            Contact Us
          </Link>
        </div>
        <img
          src="images/about 1.jpg"
          alt="Pallets"
          className="rounded shadow-xl"
        />
      </section>

      {/* 4. TEAM BANNER */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center text-center text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1587293855726-578f48511281?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0e172c]/90"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h2 className="text-5xl font-bold mb-6">Meet Our Expert Team</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            At Swift Signature General Trading, our dedicated team...
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 -mt-24 relative z-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white p-8 shadow-lg text-center transition-all duration-500 hover:bg-[#0e172c] border-b-4 border-transparent hover:border-[#ff661a]"
            >
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#0e172c] group-hover:border-white transition-colors duration-500">
                  {/* UPDATED LINE BELOW */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0e172c] group-hover:text-white transition-colors duration-500">
                {member.name}
              </h3>
              <p className="text-[#ff661a] font-medium mt-1 group-hover:text-white transition-colors duration-500">
                {member.role}
              </p>
              <div className="flex gap-2 justify-center mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-7 h-7 bg-white text-[#0e172c] flex items-center justify-center rounded-sm hover:bg-[#ff661a] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 3. TESTIMONIAL & STATS SECTION */}
      <section className="bg-[#f46020] py-20 text-white" ref={ref}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="flex gap-6 items-start">
            <img
              src="images/about 7.jpg"
              className="w-20 h-20 rounded-full border-2 border-white object-cover"
              alt="User"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Saeed</h3>
              <p className="italic text-lg opacity-90">
                "The team at Swift Signature General Trading provided excellent
                support..."
              </p>
              <div className="flex text-yellow-300">★★★★★</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-5xl font-bold">
                  {inView ? (
                    <CountUp start={0} end={stat.value} duration={2.5} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-xl font-medium opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
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
    </main>
  );
};

export default About;
