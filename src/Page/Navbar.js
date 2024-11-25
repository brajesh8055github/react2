import React from 'react'
const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/50 shadow-md backdrop-blur-md z-50 flex items-center justify-between p-4">
      <div className="text-red-600 font-bold text-lg">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          className="w-20 h-10"
        >
          <path
            fill="currentColor"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
          ></path>
        </svg>
      </div>
      <div className="hidden sm:flex space-x-6 text-red-600 font-semibold">
        <a href="#main" className="hover:text-red-800">
          Home
        </a>
        <a href="#products" className="hover:text-red-800">
          Products
        </a>
        <a href="#about" className="hover:text-red-800">
          About Us
        </a>
        <a href="#contact" className="hover:text-red-800">
          Contact Us
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button className="text-red-600 focus:outline-none">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
