import React, { useState } from 'react';
import logo from "../assets/uialogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar mb-20 flex items-center justify-between py-6 px-4 md:px-8 font-bold '>
      <div className='flex items-center'>
        <img className="w-16 border-r-2 pr-4" src={logo} alt="logo" />
        <h3 className='text-2xl text-center md:text-3xl pl-4 font-bold  hover:text-lime-300'>GRUPPE 7 </h3>
      </div>

      {/* Hamburger Menu */}
      

      {/* Navbar Links */}
      <div className={`flex ${isOpen ? 'flex-col' : 'hidden'} mt-8 md:mt-0 w-full md:w-auto md:flex md:flex-row items-center justify-center gap-4 md:gap-8 text-xl`}>
        <a href="#hjem" className="hover:text-lime-300">Hjem</a>
        <a href="#om-oss" className="hover:text-lime-300">Om oss</a>
        <a href="#medlemmer" className="hover:text-lime-300">Medlemmer</a>
        <a href="#technologies" className="hover:text-lime-300">Teknologier</a>
        <a href="#projects" className="hover:text-lime-300">Prosjekter</a>
      </div> 

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
