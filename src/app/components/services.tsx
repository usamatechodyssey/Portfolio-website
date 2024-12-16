export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Crafting visually engaging and user-friendly designs that captivate your audience.",
    },
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance websites to bring your online presence to life.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Creating secure and scalable e-commerce platforms to boost your business growth.",
    },
  ];

  return (
    <div
      id="features"
      className="flex items-center justify-center min-h-screen  text-white p-6 relative overflow-hidden"
    >
      <section className="text-white pt-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-xl mx-auto">
            Discover the range of services we offer to help you bring your ideas
            to life. From design to development, we have the expertise to turn
            your vision into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg w-full sm:w-[280px] text-center shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-purple-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
