import Image from "next/image";

export default function Services() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1C1C1C] to-[#333333] text-white p-6 relative overflow-hidden">
      <section className=" py-16 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-300 mb-12 max-w-xl mx-auto">
            Discover the range of services we offer to help you bring your ideas
            to life. From design to development, we have the expertise to turn
            your vision into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-[280px] text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-400 mb-6">
                Crafting visually engaging and user-friendly designs that
                captivate your audience.
              </p>
              <button className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-[280px] text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-400 mb-6">
                Building responsive, high-performance websites to bring your
                online presence to life.
              </p>
              <button className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-[280px] text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                E-commerce Solutions
              </h3>
              <p className="text-gray-400 mb-6">
                Creating secure and scalable e-commerce platforms to boost your
                business growth.
              </p>
              <button className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
