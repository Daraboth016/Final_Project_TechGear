import React from 'react'

const Contact = () => {
  return (
    <div>
   

    <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions about our products or need support? We're here to help.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4 text-gray-600">
              Check out to us through any of the methods below. Our supporter
              will get back to you as soon as possible.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                📍 <span className="font-medium">Address:</span> #835 Street 5,
                Phnom Penh, Cambodia
              </li>
              <li>
                📞 <span className="font-medium">Phone:</span> +855 16 487 688
              </li>
              <li>
                📧 <span className="font-medium">Email:</span> Daraboth819@gmail.com
              </li>
            </ul>
          </div>

          {/* Google Map Embed */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251843.18708479446!2d104.67764365913189!3d11.579670741420272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513b9946bdfd%3A0x9fc828434b6eb9cf!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1696600067935!5m2!1sen!2skh"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>


    </div>
  )
}

export default Contact
