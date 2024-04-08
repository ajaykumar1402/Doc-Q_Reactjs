import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import './navbar.css';
// import FindADoctor from '../data/doctor_data';

const Navbar = ({ setSearchTerm }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    document.querySelector('nav').classList.add('active')
    if (menuOpen) {
      document.querySelector('nav').classList.remove('active')
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header id='doctors-header' className='w-full flex items-center justify-between px-6 py-2 relative text-[#BBBBBB]'>
        <div id='doctors-logo' className="logo w-40 h-20">
          <img src="src/assets/images/doctor_imgs/logo.png" alt="logo" className='w-full h-full object-contain object-center'/>
        </div>
        <nav id='doctors-nav'>
          <ul id='doctors-ul' className='wii flex gap-6 text-lg max-[991px]:flex-col max-[640px]:gap-3 max-[991px]:items-center '>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li className='clr-blue'><a href="#">Find Doctors</a></li>
            <li><a href="#">Login/Register</a></li>
          </ul>
        </nav>
        <div className="doctors-search flex gap-4">
          <input id='doctors-search' onChange={(e) => setSearchTerm(e.target.value)} type="text" className='px-4 py-1 w-96 text-lg outline-none border border-gray-700 rounded-full' placeholder='Search..'/>
          <div className={`hidden text-2xl border border-zinc-600 p-2 max-[991px]:block max-[991px]:text-lg`} onClick={handleMenu}>{menuOpen ? <IoIosClose /> : <RxHamburgerMenu />}</div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
