import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSkype,
  FaPinterestP,
} from "react-icons/fa";

export default function TopBar() {
  
  const socialLinks = [
    {
      icon: <FaFacebookF size={12} />,
      href: "https://www.google.com/search?q=facebook+login&sca_esv=0c0ded2c55dfde36&rlz=1C1YTUH_en-GBPK1186PK1187&sxsrf=ANbL-n7e_6Fi15w7MVWgbSg6tk-12b1J6g%3A1772640593542&ei=UVmoae_rIJqakdUPmvuUqAs&biw=1366&bih=607&oq=facebook&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGZhY2Vib29rKgIIBzIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIREC4YgAQYsQMY0QMYgwEYxwEyChAAGIAEGEMYigUyChAAGIAEGEMYigUyEBAAGIAEGLEDGIMBGBQYhwIyCBAAGIAEGLEDMggQABiABBixA0ivM1CxBFimD3ABeAGQAQCYAYsDoAGjCqoBBTItMS4zuAEDyAEA-AEBmAIFoAKNQ8ICChAAGLADGNYEGEfCAhMQLhiABBiwAxjRAxhDGMcBGIoFwgINEAAYgAQYsAMYQxiKBcICIBAuGIAEGLEDGNEDGIMBGMcBGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYKugYGCAEQARgUkgcLMS4zLTEuMS45LTKgB5UfsgcFMy0xLjG4B_MFwgcHMi0xLjMuMcgHS4AIAA&sclient=gws-wiz-serp",
      label: "Facebook",
    },
    {
      icon: <FaTwitter size={12} />,
      href: "https://www.google.com/search?q=twitter+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=twiter+lo&gs_lcrp=EgZjaHJvbWUqEQgBEAAYChgLGIMBGLEDGIAEMgYIABBFGDkyEQgBEAAYChgLGIMBGLEDGIAEMg4IAhAAGAoYCxixAxiABDILCAMQABgKGAsYgAQyCwgEEAAYChgLGIAEMgsIBRAAGAoYCxiABDILCAYQABgKGAsYgAQyCwgHEAAYChgLGIAEMgsICBAAGAoYCxiABDILCAkQABgKGAsYgATSAQg1NDE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
      label: "Twitter",
    },
    {
      icon: <FaLinkedinIn size={12} />,
      href: "https://www.google.com/search?q=linkedin+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=linked&gs_lcrp=EgZjaHJvbWUqEggDEAAYQxiDARixAxiABBiKBTIOCAAQRRgnGDsYgAQYigUyBggBEEUYOTIbCAIQLhhDGIMBGMcBGLEDGMkDGNEDGIAEGIoFMhIIAxAAGEMYgwEYsQMYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhAFGEAyBggHEEUYPNIBCDQ0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
      label: "LinkedIn",
    },
    {
      icon: <FaSkype size={12} />,
      href: "https://www.google.com/search?q=skype+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=Skype&gs_lcrp=EgZjaHJvbWUqDwgBEAAYQxixAxiABBiKBTIPCAAQABhDGLEDGIAEGIoFMg8IARAAGEMYsQMYgAQYigUyDAgCEAAYQxiABBiKBTIPCAMQABhDGLEDGIAEGIoFMgwIBBAAGEMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDAgIEAAYQxiABBiKBTIMCAkQABhDGIAEGIoF0gEJMTE5NTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
      label: "Skype",
    },
    {
      icon: <FaPinterestP size={12} />,
      href: "https://www.google.com/search?q=pinterest+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=pinterest&gs_lcrp=EgZjaHJvbWUqEggBEAAYQxiDARixAxiABBiKBTIXCAAQRRg5GEMYgwEYsQMYyQMYgAQYigUyEggBEAAYQxiDARixAxiABBiKBTIPCAIQABhDGLEDGIAEGIoFMgoIAxAAGLEDGIAEMgoIBBAAGLEDGIAEMg0IBRAAGIMBGLEDGIAEMg0IBhAAGIMBGLEDGIAEMgYIBxAFGEDSAQkxMDkwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
      label: "Pinterest",
    },
  ];

  return (
    <nav className="bg-[#0e172c] text-white border-b border-gray-700 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Contact Info Group */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6 text-[10px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#f46020] font-bold whitespace-nowrap">
              CONTACT US
            </span>
            <a
              href="tel:+971561552714"
              className="hover:text-[#f46020] transition-colors flex items-center gap-1"
            >
              <span>📞</span> +971 561552714
            </a>
          </div>

          {/* Vertical divider hidden on mobile */}
          <div className="hidden md:block text-gray-700">|</div>

          <a
            href="mailto:info@swiftsigngeneraltrading.com"
            className="hover:text-[#f46020] transition-colors flex items-center gap-1"
          >
            <span>✉️</span> info@swiftsigngeneraltrading.com
          </a>
        </div>

        {/* Social Media Group */}
        <div className="flex items-center gap-3">
          <span className="text-[#f46020] font-bold text-[10px] sm:text-xs">
            FOLLOW US
          </span>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-7 h-7 bg-white text-[#0e172c] flex items-center justify-center rounded-sm hover:bg-[#0e172c] hover:text-white transition-all duration-300 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}