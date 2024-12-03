import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1C1C1C] to-[#333333] text-white p-6 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full top-1/3 left-1/4 transform -translate-y-1/2 blur-3xl"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full bottom-1/4 right-1/4 transform translate-y-1/2 blur-3xl"></div>

      {/* Left Section */}
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-6xl font-extrabold">
          Explore <span className="text-purple-500">UI</span>.
        </h1>

        <div className="text-md font-semibold text-gray-400 mt-20 flex flex-col space-y-1">
          <span>BEGINNER</span>
          <span className="text-purple-500">•</span>
          <span>PRO DESIGNER</span>
        </div>
      </div>

      {/* Center Image with Overlay */}
      <div className="relative mx-16 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-1">
        <Image
          src="/image.png"
          alt="Designer"
          width={250}
          height={250}
          className="relative z-10 object-cover rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 rounded-full"></div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-6 max-w-sm animate-fadeIn">
        <div className="text-right">
          <p className="text-gray-400 text-sm">Edition</p>
          <p className="text-4xl font-semibold text-white">2022</p>
        </div>
        <h2 className="text-3xl font-bold leading-snug">
          A Guide for Modern UI Designers
        </h2>
        <p className="text-gray-300">
          Dive into the essentials of UI design with a comprehensive guide made
          for modern creators. Learn techniques, tips, and start designing with
          confidence.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-white bg-opacity-20 text-white font-semibold rounded-lg shadow-lg backdrop-blur-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
            Get Started
          </button>
          <button className="px-6 py-2 border border-gray-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 hover:text-black">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-10 text-gray-400">
        <span className="cursor-pointer hover:text-white transition-colors">
          <FaArrowLeft />
        </span>
        <span className="cursor-pointer hover:text-white transition-colors">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
