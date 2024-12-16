// components/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            Dive into the essentials of UI design with our guides and resources.
            We empower creators to build intuitive and beautiful designs.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/About" className="hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-purple-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Portfolio" className="hover:text-purple-400">
                Portfolio
              </Link>
            </li>

            <li>
              <Link href="/Contact" className="hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest updates and resources in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
