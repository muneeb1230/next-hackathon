// import React from "react";

// const Header = () => {
//   return (
//     <header className="w-full">
//       {/* Top Bar */}
//       <div className="bg-blue-900 text-white text-sm py-2 flex justify-between items-center px-6">
//         <p>✔ Free Shipping On All Orders Over $50</p>
//         <div className="flex items-center space-x-6">
//           <span>Eng ▼</span>
//           <a href="#faq" className="hover:underline">
//             FAQs
//           </a>
//           <a href="#help" className="hover:underline">
//             Need Help
//           </a>
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="bg-gray-100 py-4 px-6 flex items-center justify-between shadow">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <img
//             src="/Icon.png"
//             alt="Comforty Logo"
//             className="h-10 w-10"
//           />
//           <span className="text-2xl font-semibold text-teal-600">Comforty</span>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           <img
//             src="/Buy2.png"
//             alt="Icon 1"
//             className="h-6 w-6 cursor-pointer"
//           />
//           <img
//             src="/Cart.png"
//             alt="Icon 2"
//             className="h-6 w-6 cursor-pointer"
//           />
//           <img
//             src="/No.png"
//             alt="Icon 3"
//             className="h-6 w-6 cursor-pointer"
//           />
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <div className="bg-white py-3 px-6 flex items-center justify-between">
//         {/* Menu Links */}
//         <nav className="flex space-x-8 text-gray-600">
//           <a href="#" className="hover:text-teal-600">
//             Home
//           </a>
//           <a href="#" className="hover:text-teal-600">
//             Shop
//           </a>
//           <a href="#" className="hover:text-teal-600">
//             Product
//           </a>
//           <a href="#" className="hover:text-teal-600">
//             Pages
//           </a>
//           <a href="#" className="hover:text-teal-600">
//             About
//           </a>
//         </nav>

//         {/* Contact Info */}
//         <span className="text-sm text-gray-600">
//           Contact: <a href="tel:0800555011" className="hover:underline">(0800) 555-011</a>
//         </span>
//       </div>
    
//     </header>
//   );
// };

// export default Header;


"use client"

import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 flex justify-between items-center px-6">
        <p>✔ Free Shipping On All Orders Over $50</p>
        <div className="flex items-center space-x-6">
          <span>Eng ▼</span>
          <a href="#faq" className="hover:underline">
            FAQs
          </a>
          <a href="#help" className="hover:underline">
            Need Help
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-gray-100 py-4 px-6 flex items-center justify-between shadow">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/LogoIcon.png"
            alt="Comforty Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-semibold text-teal-600">Comforty</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <img
            src="/Buy2.png"
            alt="Icon 1"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/Cart.png"
            alt="Icon 2"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/No.png"
            alt="Icon 3"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white py-3 px-6 flex items-center justify-between">
        {/* Menu Links */}
        <nav
          className={`flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-gray-600 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href="#" className="hover:text-teal-600">
            Home
          </a>
          <a href="#" className="hover:text-teal-600">
            Shop
          </a>
          <a href="#" className="hover:text-teal-600">
            Product
          </a>
          <a href="#" className="hover:text-teal-600">
            Pages
          </a>
          <a href="#" className="hover:text-teal-600">
            About
          </a>
        </nav>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="md:hidden block text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Contact Info */}
        <span className="text-sm text-gray-600 hidden md:block">
          Contact: <a href="tel:0800555011" className="hover:underline">(0800) 555-011</a>
        </span>
      </div>
    </header>
  );
};

export default Header;
