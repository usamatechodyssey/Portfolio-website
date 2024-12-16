import React from "react";
import Services from "./components/services";
import Contact from "./components/contact";
import Skill from "./components/skill";
import Counter from "./components/counter";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-[#1C1C1C] to-[#333333] text-white p-6 ">
      {/* Header Section */}

      <div className="flex  justify-center items-center">
        <div className="flex flex-col  w-full max-w-screen-xl  items-center justify-center pt-[80px] pb-[80px] pl-[16px] pr-[16px]  lg:flex-row gap-10 lg:gap-0 xl:gap-20">
          <div className=" flex flex-col gap-10 justify-center text-center   lg:text-left">
            <div className=" flex flex-col gap-7 ">
              <h3 className="xm:text-[#4F9CF9] w-[288px]    font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px]  md:text-[54px] md:leading-[65.35px] lg:w-[500px]  lg:text-[64px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                Unlock the Power of Modern
                <span className="text-blue-600">Web Design</span>
              </h3>
              <p className=" text-gray-300 w-[288px]  font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[500px] lg:text-left xl:w-[630px]">
                Project management software that enables your teams to
                collaborate, plan, analyze, and manage everyday tasks. Build
                faster, scalable, and beautiful web applications with our
                cutting-edge solutions.
              </p>
            </div>
            <div>
              <button className="w-[232px]  h-[70px] rounded-[8px] bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans lg:w-[219px]  lg:h-[63px] ">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/papa.png" // Image ka path public folder ke andar se
              alt="Example Image"
              width={500} // Required: width in pixels
              height={300} // Required: height in pixels
              priority // Optional: Automatically adjusts size
            />
          </div>
        </div>
      </div>

      <Counter />

      <div id="about" className="flex  justify-center items-center">
        <div className="flex flex-col  w-full max-w-screen-xl  items-center justify-center pt-[80px] pb-[80px] pl-[16px] pr-[16px]  lg:flex-row gap-10 lg:gap-0 xl:gap-20">
          <div className=" flex flex-col gap-10 justify-center text-center   lg:text-left">
            <div className=" flex flex-col gap-7 ">
              <h3 className="xm:text-[#4F9CF9] w-[288px]    font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px]  md:text-[54px] md:leading-[65.35px] lg:w-[500px]  lg:text-[60px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                About <span className="text-blue-600">Us</span>
              </h3>
              <p className=" text-gray-300 w-[288px]  font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[500px] lg:text-left xl:w-[630px]">
                We are passionate about building innovative web solutions that
                help businesses grow and succeed. Our team combines creativity,
                technology, and expertise to deliver world-class results.
              </p>
            </div>
            <div>
              <button className="w-[232px]  h-[70px] rounded-[8px] bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans lg:w-[219px]  lg:h-[63px] ">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/ali.png" // Image ka path public folder ke andar se
              alt="Example Image"
              width={500} // Required: width in pixels
              height={300} // Required: height in pixels
              priority // Optional: Automatically adjusts size
            />
          </div>
        </div>
      </div>

      <Skill />

      <Services />

      {/* Call to Action Section */}

      <Contact />
      {/* Footer Section */}
    </div>
  );
};

export default HomePage;
