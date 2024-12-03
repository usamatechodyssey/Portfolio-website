"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <div className="  bg-[#1E1E1E] text-white font-[Montserrat]  h-[91px] w-full mx-auto">
      <header className="flex items-center  h-[91px] max-w-[1046px]  px-6    mx-auto   ">
        {/* BrandName Section */}
        <div className="text-2xl font-bold">
          <h3>BrandName</h3>
        </div>

        {/* Navigation Links and Right Section */}
        <div className="flex items-center justify-between w-full md:ml-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-[#8C92AC] font-semibold">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/About" className="hover:text-white">
              About
            </Link>
            <Link href="/Services " className="hover:text-white">
              Services
            </Link>
            <Link href="/Portfolio" className="hover:text-white">
              Portfolio
            </Link>
          </nav>

          {/* Login and Join Us */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <Link href="/Contact" className="text-[#8C92AC] hover:text-white">
              Contact
            </Link>
            <button className="bg-purple-500 text-white font-semibold px-6 py-2 rounded-md  hover:bg-purple-700">
              Join Us
            </button>
          </div>
        </div>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={handleNavToggle} className="text-2xl">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          navOpen ? "block" : "hidden"
        } bg-[#252B42] text-center py-4`}
      >
        <nav className="flex flex-col space-y-4 text-[#8C92AC] font-semibold">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/About" className="hover:text-white">
            About
          </Link>
          <Link href="/ Services " className="hover:text-white">
            Services
          </Link>
          <Link href="/Portfolio" className="hover:text-white">
            Portfolio
          </Link>
          <Link href="/Contact" className="text-[#8C92AC] hover:text-white">
            Contact
          </Link>
          <button className="bg-[#23A6F0] text-white font-semibold px-6 py-2 rounded-md mt-4 border border-blue-500 hover:bg-[#2A4BAF]">
            Join Us
          </button>
        </nav>
      </div>
    </div>
  );
}
