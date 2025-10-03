import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About TechGear Electronics
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At TechGear, we provide cutting-edge computer hardware and
            electronics to empower students, gamers, and businesses. With a
            commitment to quality and innovation, we are your trusted partner in
            the ever-evolving world of technology.
          </p>
        </div>

        {/* Company Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://miro.medium.com/0*aDCHjBVFoKm7nvEN.jpg"
            alt="Computer Hardware"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, TechGear Electronics started as a small local
              shop catering to tech enthusiasts. Over the years, we have grown
              into a trusted supplier of laptops, desktops, gaming rigs,
              networking devices, and electronics across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we proudly serve thousands of customers — from individual
              gamers to large corporations — delivering reliable technology that
              helps people connect, create, and perform at their best.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission is simple: to make premium technology accessible and
            affordable for everyone. We believe in empowering our customers with
            the right tools to succeed in education, business, and entertainment.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                We partner with top brands to ensure you get authentic and
                reliable products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We bring the latest technology to your doorstep to keep you
                ahead of the curve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team ensures your experience is smooth and
                hassle-free.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                “TechGear helped me build my dream gaming PC at a fair price.
                Their team is knowledgeable and super helpful.”
              </p>
              <h4 className="font-semibold text-gray-800">— Alex, Gamer</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                “Our company upgraded all office PCs through TechGear. Excellent
                service and quick delivery!”
              </p>
              <h4 className="font-semibold text-gray-800">— Linda, Manager</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                “I always find the latest laptops and accessories here. Highly
                recommended for students and professionals.”
              </p>
              <h4 className="font-semibold text-gray-800">— Sam, Student</h4>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Upgrade Your Tech?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our wide range of computer hardware and electronics today.
          </p>
          <a
            href="/product"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
