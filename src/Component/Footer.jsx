// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const orange = "#f26522"; // The exact orange from your image
//   const navy = "#0d1526"; // The exact dark background

//   return (
//     <footer
//       style={{ backgroundColor: navy }}
//       className="text-white pt-12 pb-6 font-sans"
//     >
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* 1. About Section */}
//         <div className="space-y-4">
//           <div className="bg-white p-2 inline-block rounded">
//             <img src="images/logo.png" alt="Swift Sign Logo" className="h-20" />
//           </div>
//           <p className="text-gray-400 text-sm leading-relaxed">
//             Swift Sign General Trading provides high-quality wooden and
//             customized pallet solutions for logistics, warehousing, and export
//             industries.
//           </p>

//           {/* Social Icons (SVGs) */}
//           <div className="flex gap-2">
//             {/* Facebook */}
//             <a
//               href="https://www.google.com/search?q=facebook+login&sca_esv=0c0ded2c55dfde36&rlz=1C1YTUH_en-GBPK1186PK1187&sxsrf=ANbL-n7e_6Fi15w7MVWgbSg6tk-12b1J6g%3A1772640593542&ei=UVmoae_rIJqakdUPmvuUqAs&biw=1366&bih=607&oq=facebook&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGZhY2Vib29rKgIIBzIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIREC4YgAQYsQMY0QMYgwEYxwEyChAAGIAEGEMYigUyChAAGIAEGEMYigUyEBAAGIAEGLEDGIMBGBQYhwIyCBAAGIAEGLEDMggQABiABBixA0ivM1CxBFimD3ABeAGQAQCYAYsDoAGjCqoBBTItMS4zuAEDyAEA-AEBmAIFoAKNQ8ICChAAGLADGNYEGEfCAhMQLhiABBiwAxjRAxhDGMcBGIoFwgINEAAYgAQYsAMYQxiKBcICIBAuGIAEGLEDGNEDGIMBGMcBGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYKugYGCAEQARgUkgcLMS4zLTEuMS45LTKgB5UfsgcFMy0xLjG4B_MFwgcHMi0xLjMuMcgHS4AIAA&sclient=gws-wiz-serp"
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
//               style={{ backgroundColor: orange }}
//             >
//               <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
//                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
//               </svg>
//             </a>

//             {/* Twitter / X */}
//             <a
//               href="https://www.google.com/search?q=twitter+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=twiter+lo&gs_lcrp=EgZjaHJvbWUqEQgBEAAYChgLGIMBGLEDGIAEMgYIABBFGDkyEQgBEAAYChgLGIMBGLEDGIAEMg4IAhAAGAoYCxixAxiABDILCAMQABgKGAsYgAQyCwgEEAAYChgLGIAEMgsIBRAAGAoYCxiABDILCAYQABgKGAsYgAQyCwgHEAAYChgLGIAEMgsICBAAGAoYCxiABDILCAkQABgKGAsYgATSAQg1NDE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
//               style={{ backgroundColor: orange }}
//             >
//               <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//               </svg>
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://www.google.com/search?q=linkedin+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=linked&gs_lcrp=EgZjaHJvbWUqEggDEAAYQxiDARixAxiABBiKBTIOCAAQRRgnGDsYgAQYigUyBggBEEUYOTIbCAIQLhhDGIMBGMcBGLEDGMkDGNEDGIAEGIoFMhIIAxAAGEMYgwEYsQMYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhAFGEAyBggHEEUYPNIBCDQ0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
//               style={{ backgroundColor: orange }}
//             >
//               <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.google.com/search?q=instagram+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=inst&gs_lcrp=EgZjaHJvbWUqEggDEAAYQxiDARixAxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyEggCEAAYQxiDARixAxiABBiKBTISCAMQABhDGIMBGLEDGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgYIBxAFGEDSAQg0NTA5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
//               style={{ backgroundColor: orange }}
//             >
//               <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* 2. Our Pallet Solutions */}
//         <div>
//           <h3 className="font-bold mb-6 uppercase tracking-wide border-b-2 border-orange-600 inline-block pb-1">
//             Our Pallet Solutions
//           </h3>
//           <ul className="space-y-3 text-sm text-white hover:text-orange-600">
//             {[
//               <p className="text-white hover:text-orange-600">
//                 Wooden Pallets
//               </p>,
//               <p className="text-white hover:text-orange-600">
//                 Heat-Treated Pallets
//               </p>,
//               <p className="text-white hover:text-orange-600">
//                 Custom Size Pallets
//               </p>,
//               <p className="text-white hover:text-orange-600">
//                 Heavy-Duty Industrial Pallets
//               </p>,
//               <p className="text-white hover:text-orange-600">
//                 Pallet Repair & Recycling
//               </p>,
//               <p className="text-white hover:text-orange-600">
//                 Export Packaging Support
//               </p>,
//             ].map((link) => (
//               <li
//                 key={link}
//                 className="flex gap-2 hover:text-white cursor-pointer"
//               >
//                 <span style={{ color: orange }}>⌝</span>
//                 <span
//                   className={
//                     link === "Pallet Repair & Recycling" ? "text-white" : ""
//                   }
//                 >
//                   {link}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 3. Quick Links */}
//         <div>
//           <h3 className="font-bold mb-6 uppercase tracking-wide border-b-2 border-orange-600 inline-block pb-1">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-sm text-gray-300">
//             {[
//               <p className="text-white hover:text-orange-600">About Us</p>,
//               <p className="text-white hover:text-orange-600">Our Products</p>,
//               <p className="text-white hover:text-orange-600">
//                 Quality Standards
//               </p>,
//               <p className="text-white hover:text-orange-600">FAQ</p>,
//               <p className="text-white hover:text-orange-600">Contect Us</p>,
//               <p className="text-white hover:text-orange-600">Sitemap</p>,
//             ].map((link) => (
//               <li
//                 key={link}
//                 className="flex gap-2 hover:text-white cursor-pointer"
//               >
//                 <span style={{ color: orange }}>⌝</span> {link}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 4. Contact Information */}
//         <div className="space-y-5">
//           <h3 className="font-bold mb-6 uppercase tracking-wide border-b-2 border-orange-600 inline-block pb-1">
//             Contact Information
//           </h3>

//           {/* Address */}
//           <div className="flex gap-4 items-center">
//             <div
//               style={{ backgroundColor: orange }}
//               className="w-11 h-11 shrink-0 flex items-center justify-center"
//             >
//               <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//               </svg>
//             </div>
//             <p className="text-sm font-bold">Dubai, United Arab Emirates</p>
//           </div>

//           {/* Email */}
//           <div className="flex gap-4 items-center">
//             <div
//               style={{ backgroundColor: orange }}
//               className="w-11 h-11 shrink-0 flex items-center justify-center"
//             >
//               {/* Mail icon with @ detail */}
//               <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
//                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
//                 <circle cx="12" cy="14" r="2" />
//               </svg>
//             </div>
//             <div className="text-sm font-bold">
//               <p>info@swiftsigntrading.com</p>
//               <p>sales@swiftsigntrading.com</p>
//             </div>
//           </div>

//           {/* Phone - EXACT MATCH TO IMAGE */}
//           <div className="flex gap-4 items-center">
//             <div
//               style={{ backgroundColor: orange }}
//               className="w-11 h-11 shrink-0 flex items-center justify-center"
//             >
//               <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
//                 <path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8.1,13.6 6.6,10.8L8.8,8.6C9,8.4 9.1,8.2 9.1,7.9C9.1,7.8 9.1,7.7 9.1,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.4 8.1,3 7.5,3H4C3.4,3 3,3.4 3,4C3,13.4 10.6,21 20,21C20.6,21 21,20.6 21,20V16.5C21,15.9 20.6,15.5 20,15.5M19,12H21C21,8.1 17.9,5 14,5V7C16.8,7 19,9.2 19,12M15,12H17C17,10.3 15.7,9 14,9V11C14.6,11 15,11.4 15,12Z" />
//               </svg>
//             </div>
//             <div className="text-sm font-bold">
//               <p>+971 561552714</p>
//               <p>+971 561552714</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 pt-6 border-t border-gray-800 text-center text-l text-gray-500 px-4">
//         <p>
//           © 2026 Swift Sign General Trading. All Rights Reserved. |{" "}
//           <span className="text-orange-500">
//             <Link to="https://it.swiftsignbm.com/">Swift Sign IT</Link>
//           </span>
//         </p>
//       </div>
//     </footer>
//   );
// }




















import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const orange = "#f26522"; // The exact orange from your image
  const navy = "#0d1526"; // The exact dark background

  return (
    <footer
      style={{ backgroundColor: navy }}
      className="text-white pt-12 pb-6 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1. About Section */}
        <div className="space-y-4">
          <div className="bg-white p-2 inline-block rounded">
            <img src="images/logo.png" alt="Swift Sign Logo" className="h-20" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Swift Sign General Trading provides high-quality wooden and
            customized pallet solutions for logistics, warehousing, and export
            industries.
          </p>

          {/* Social Icons (SVGs) */}
          <div className="flex gap-2">
            {/* Facebook */}
            <a
              href="https://www.google.com/search?q=facebook+login&sca_esv=0c0ded2c55dfde36&rlz=1C1YTUH_en-GBPK1186PK1187&sxsrf=ANbL-n7e_6Fi15w7MVWgbSg6tk-12b1J6g%3A1772640593542&ei=UVmoae_rIJqakdUPmvuUqAs&biw=1366&bih=607&oq=facebook&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGZhY2Vib29rKgIIBzIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIREC4YgAQYsQMY0QMYgwEYxwEyChAAGIAEGEMYigUyChAAGIAEGEMYigUyEBAAGIAEGLEDGIMBGBQYhwIyCBAAGIAEGLEDMggQABiABBixA0ivM1CxBFimD3ABeAGQAQCYAYsDoAGjCqoBBTItMS4zuAEDyAEA-AEBmAIFoAKNQ8ICChAAGLADGNYEGEfCAhMQLhiABBiwAxjRAxhDGMcBGIoFwgINEAAYgAQYsAMYQxiKBcICIBAuGIAEGLEDGNEDGIMBGMcBGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYKugYGCAEQARgUkgcLMS4zLTEuMS45LTKgB5UfsgcFMy0xLjG4B_MFwgcHMi0xLjMuMcgHS4AIAA&sclient=gws-wiz-serp"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: orange }}
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://www.google.com/search?q=twitter+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=twiter+lo&gs_lcrp=EgZjaHJvbWUqEQgBEAAYChgLGIMBGLEDGIAEMgYIABBFGDkyEQgBEAAYChgLGIMBGLEDGIAEMg4IAhAAGAoYCxixAxiABDILCAMQABgKGAsYgAQyCwgEEAAYChgLGIAEMgsIBRAAGAoYCxiABDILCAYQABgKGAsYgAQyCwgHEAAYChgLGIAEMgsICBAAGAoYCxiABDILCAkQABgKGAsYgATSAQg1NDE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: orange }}
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.google.com/search?q=linkedin+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=linked&gs_lcrp=EgZjaHJvbWUqEggDEAAYQxiDARixAxiABBiKBTIOCAAQRRgnGDsYgAQYigUyBggBEEUYOTIbCAIQLhhDGIMBGMcBGLEDGMkDGNEDGIAEGIoFMhIIAxAAGEMYgwEYsQMYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhAFGEAyBggHEEUYPNIBCDQ0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: orange }}
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.google.com/search?q=instagram+login&rlz=1C1YTUH_en-GBPK1186PK1187&oq=inst&gs_lcrp=EgZjaHJvbWUqEggDEAAYQxiDARixAxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyEggCEAAYQxiDARixAxiABBiKBTISCAMQABhDGIMBGLEDGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgYIBxAFGEDSAQg0NTA5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: orange }}
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 2. Our Pallet Solutions */}
        <div>
          <h3 className="font-bold mb-6 uppercase tracking-wide border-b-2 border-orange-600 inline-block pb-1">
            Our Pallet Solutions
          </h3>
          <ul className="space-y-3 text-sm text-white hover:text-orange-600">
            {[
              { name: "Wooden Pallets", path: "/products/wooden" },
              { name: "Heat-Treated Pallets", path: "/products/heat" },
              { name: "Custom Size Pallets", path: "/services/custom" },
              {
                name: "Heavy-Duty Industrial Pallets",
                path: "/products/heavy",
              },
              { name: "Pallet Repair & Recycling", path: "/products/recycled" },
              { name: "Export Packaging Support", path: "" },
            ].map((link) => (
              <li
                key={link.name}
                className="flex gap-2 hover:text-white cursor-pointer"
              >
                <span style={{ color: orange }}>⌝</span>
                <Link
                  to={link.path}
                  className={`text-white hover:text-orange-600 ${
                    link.name === "Pallet Repair & Recycling"
                      ? "text-white"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Quick Links */}
        <div>
          <h3 className="font-bold mb-6 uppercase tracking-wide border-b-2 border-orange-600 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { name: "About Us", path: "/about" },
              { name: "Our Products", path: "/products" },
              { name: "Quality Standards", path: "/quality-standards" },
              { name: "FAQ", path: "#" },
              { name: "Contect Us", path: "/contact" },
              { name: "Sitemap", path: "#" },
            ].map((link) => (
              <li
                key={link.name}
                className="flex gap-2 hover:text-white cursor-pointer"
              >
                <span style={{ color: orange }}>⌝</span>
                <Link
                  to={link.path}
                  className="text-white hover:text-orange-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Contact Information */}
        <div className="space-y-5">
          <h3 className="font-bold mb-6 uppercase tracking-wide border-b-2 border-orange-600 inline-block pb-1">
            Contact Information
          </h3>

          {/* Address */}
          <div className="flex gap-4 items-center">
            <div
              style={{ backgroundColor: orange }}
              className="w-11 h-11 shrink-0 flex items-center justify-center"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <p className="text-sm font-bold">Dubai, United Arab Emirates</p>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <div
              style={{ backgroundColor: orange }}
              className="w-11 h-11 shrink-0 flex items-center justify-center"
            >
              {/* Mail icon with @ detail */}
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                <circle cx="12" cy="14" r="2" />
              </svg>
            </div>
            <div className="text-sm font-bold">
              <p>info@swiftsigntrading.com</p>
              <p>sales@swiftsigntrading.com</p>
            </div>
          </div>

          {/* Phone - EXACT MATCH TO IMAGE */}
          <div className="flex gap-4 items-center">
            <div
              style={{ backgroundColor: orange }}
              className="w-11 h-11 shrink-0 flex items-center justify-center"
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8.1,13.6 6.6,10.8L8.8,8.6C9,8.4 9.1,8.2 9.1,7.9C9.1,7.8 9.1,7.7 9.1,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.4 8.1,3 7.5,3H4C3.4,3 3,3.4 3,4C3,13.4 10.6,21 20,21C20.6,21 21,20.6 21,20V16.5C21,15.9 20.6,15.5 20,15.5M19,12H21C21,8.1 17.9,5 14,5V7C16.8,7 19,9.2 19,12M15,12H17C17,10.3 15.7,9 14,9V11C14.6,11 15,11.4 15,12Z" />
              </svg>
            </div>
            <div className="text-sm font-bold">
              <p>+971 561552714</p>
              <p>+971 561552714</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-l text-gray-500 px-4">
        <p>
          © 2026 Swift Sign General Trading. All Rights Reserved. |{" "}
          <span className="text-orange-500">
            <Link to="https://it.swiftsignbm.com/">Swift Sign IT</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
