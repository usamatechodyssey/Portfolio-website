"use client";

import Image from "next/image";

// components/Portfolio.tsx
import React, { useState, useEffect } from "react";

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay of 2-3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1C1C1C] to-[#333333] text-white p-6 relative overflow-hidden">
      <section id="portfolio" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-8">Our Portfolio</h2>

          {isLoading ? (
            // Loading Spinner
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600 border-solid"></div>
              <span className="ml-4 text-lg">Loading portfolio...</span>
            </div>
          ) : (
            // Portfolio Items

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 1"
                  className="rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">Project 1</h3>
                <p className="text-gray-400">Description of project 1.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 2"
                  className="rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">Project 2</h3>
                <p className="text-gray-400">Description of project 2.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 3"
                  className="rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">Project 3</h3>
                <p className="text-gray-400">Description of project 3.</p>
              </div>
              {/* Add more projects as needed */}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
