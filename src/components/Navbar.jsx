import React, { useState } from 'react';
import logo from "../assets/uialogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar mb-4 md:mb-10 lg:mb-20 flex items-center justify-between py-6 px-4 md:px-8 font-bold'>
      <div className='flex items-center'>
        {/* Uncomment the logo when needed */}
        {/* <img className="w-16 border-r-2 pr-4" src={logo} alt="UIA logo" /> */}
        <h3 className='text-2xl text-center md:text-3xl pl-4 font-bold hover:text-lime-300'>GRUPPE-7</h3>
      </div>

      {/* Navbar Links */}
      <div className={`flex ${isOpen ? 'flex-col' : 'hidden'} mt-8 md:mt-0 w-full md:w-auto md:flex md:flex-row items-center justify-center gap-4 sm:gap-2 md:gap-10 text-xl transition-all duration-300`}>
        <a href="#hjem" className="hover:text-lime-300">Hjem</a>
        <a href="#om-oss" className="hover:text-lime-300">Om oss</a>
        <a href="#medlemmer" className="hover:text-lime-300">Medlemmer</a>
        <a href="#technologies" className="hover:text-lime-300">Teknologier</a>
        <a href="#projects" className="hover:text-lime-300">Prosjekter</a>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white focus:outline-none focus:ring-2 focus:ring-lime-300" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
