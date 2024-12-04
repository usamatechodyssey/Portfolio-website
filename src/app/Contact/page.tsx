export default function Contact() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1C1C1C] to-[#333333] text-white p-6 relative overflow-hidden">
      <section id="contact" className=" text-white py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

          <p className="text-center text-lg mb-12">
            Have a project in mind or just want to say hello? Reach out, and
            let's start a conversation!
          </p>

          <div className="flex flex-col lg:flex-row lg:space-x-8 justify-center items-center">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg w-full lg:w-1/2 mb-8 lg:mb-0">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-4">
                Feel free to contact us through email or call. We are always
                ready to discuss your projects or opportunities to be part of
                your vision.
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Email:</span>{" "}
                contact@brandname.com
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Address:</span> 123 Your Street,
                City, Country
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
