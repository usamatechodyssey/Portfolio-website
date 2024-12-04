import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1C1C1C] to-[#333333] text-white p-6 relative overflow-hidden">
      <section className=" text-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/aboutimage.webp"
              alt="About Us"
              height={500}
              width={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              We are a team of passionate designers and developers, committed to
              creating unique and beautiful experiences. Our goal is to help you
              bring your ideas to life with precision and creativity.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a focus on modern aesthetics and seamless user experiences,
              we strive to deliver solutions that not only look great but also
              function smoothly. Join us on this journey as we redefine the
              digital landscape together.
            </p>
            <button className="px-6 py-2 bg-purple-600 rounded-lg font-semibold transition-transform hover:scale-105 hover:bg-purple-500">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
