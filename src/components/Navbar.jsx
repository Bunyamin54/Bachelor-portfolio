import React from 'react';
import logo from "../assets/uialogo.png";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex items-center ml-11'>
        <img className="mx-2 w-20 border-r-2 pr-4" src={logo} alt="logo" />
        <h3 className='text-3xl pl-4 font-bold hover:text-yellow-500'>GRUPPE - 7</h3>
      </div>

      <div className="m-8 flex items-center justify-center gap-8 text-3xl">
        <a href="#hjem" className="hover:text-yellow-500">Hjem</a>
        <a href="#om-oss" className="hover:text-yellow-500">Om oss</a>
        <a href="#medlemmer" className="hover:text-yellow-500">Medlemmer</a>
        <a href="#technologies" className="hover:text-yellow-500">Technologies</a>
        <a href="#projects" className="hover:text-yellow-500">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
