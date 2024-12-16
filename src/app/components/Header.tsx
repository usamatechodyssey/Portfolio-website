"use client";
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold">YourBrand</div>

        {/* Navigation Menu for Large Screens */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="hover:text-gray-300">
            Features
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Toggle Icon for Small Screens */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Responsive Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900`}>
        <Link
          href="#features"
          className="block px-4 py-2 text-white hover:bg-gray-700"
        >
          Features
        </Link>
        <Link
          href="#about"
          className="block px-4 py-2 text-white hover:bg-gray-700"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="block px-4 py-2 text-white hover:bg-gray-700"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
