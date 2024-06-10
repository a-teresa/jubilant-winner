'use client';
import React from 'react';
import c_transparent from '@/assets/images/ClosedMill_transparent.png';
import Image from "next/image";
import Link from 'next/link';
import {useState} from 'react';


const Navbar = () => {

  const [open, setOpen] = useState(true);
  const [hidden, setHidden]=useState(false);

  function navToggle() {
    setOpen(!open);
    setHidden(!hidden);
    console.log(open);
    console.log(hidden);
  }


  return (
    <div>
    <nav className="flex items-center justify-between font-bold text-white">
      {/** menu/ logo container */}
      <Image src={c_transparent} alt="milling solutions" style={{ width: '300px', height: '300px' } } className='inline pr-2 text-3xl'/>
      <div className="hidden h-10-font-alata md:flex md:space-x-8">
        <div className="group">
        <Link href="#feature"> Mission</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
        <Link href="#creations"> Products</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
        <Link href="#services"> Services</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
        <Link href="#quality-policy"> Quality Policy</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
        <Link href="#careers"> Careers</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>

      </div>
       {/** hamburguer button on mobile */}
       <div className="md:hidden">
        <button id="menu-btn" type="button" onClick={navToggle} className={`${open ? open: 'open'} "z-40 block hamburger md:hidden focus:outline-none"` }>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
       </div>
        
    </nav>
    {/**  mobile menu */}

    <div id="menu" style={{ display: hidden ? 'flex' : 'none' }} className=  {`"absolute md:hidden top-0 bottom-0 left-0 flex flex-col self-end hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black" `}>
      <a href="#feature" className="hover:text-blue-800">Mission</a>
      <a href="#creations" className="hover:text-blue-800">Products</a>
      <a href="#services" className="hover:text-blue-800">Services</a>
      <a href="#quality-policy" className="hover:text-blue-800">Quality Policy</a>
      <a href="#careers" className="hover:text-blue-800">Careers</a>
    </div>
    <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        CNC milling: high quality solutions
    </div>

    </div>
  )
}

export default Navbar;
