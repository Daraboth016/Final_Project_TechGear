import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="">
        <div className="">
          {/* Text */}
          {/* <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-4">
              Buy the New iPhone 15
            </h2>
            <p className="text-lg mb-6">
              Experience the future of mobile technology with powerful
              performance, stunning design, and advanced camera systems.
            </p>
            <a
              href="#shop"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              Shop Now
            </a>
          </div> */}
          {/* Image */}
          {/* Background Image */}
          <div className="relative bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="IT electronic devices"
              className="w-full h-[500px] object-cover opacity-70"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Explore the Future of Electronics
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-6">
                From laptops and smartphones to accessories and smart gadgets —
                discover the best in IT technology all in one place.
              </p>
              <a href="/product">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="shop" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto px-7 text-center mb-12">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Our Products & Promotions
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Explore our best-selling computer hardware and electronics. Don’t miss
      out on our latest promotions and exclusive deals!
    </p>
  </div>

  
   
</section>


      {/* Call to Action */}

      {/* Footer */}

      <main>
        <div></div>

        <div className="grid gap-4">
          {/* Big featured product */}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Laptop setup"
            />
            <div className="text-center">
              <h3 className="mt-2 text-lg font-semibold">Laptop Pro 15"</h3>
              <p className="text-gray-600">$1,299.00</p>
            </div>
          </div>

          {/* Product grid */}
          <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen max-w-7xl mx-auto px-4 py-12">
            {/* Section Header with Promotion Badge */}
            <div className="text-center mb-12">
              <span className="inline-block bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                🔥 Hot Deals - Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our premium selection of tech accessories with
                exclusive discounts and free shipping on all orders.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {/* Product Card 1 - Headphones */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHJN65lzbQV6kYvNejOmmws8kJTzvC5FKOA&s"
                    alt="Wireless Headphones"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Best Seller
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      -20%
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(128)</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    Premium Wireless Headphones
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Noise-cancelling with 30hr battery life. Free shipping
                    included.
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      {/* <span className="text-2xl font-bold text-gray-900">
                        $199.00
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        $249.00
                      </span> */}
                    </div>
                  </div>

                  
                </div>
              </div>

              {/* Product Card 2 - Keyboard */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MECHANICAL-KEYBOARDS-2048px-0673.jpg?auto=webp&quality=75&width=1024"
                    alt="Mechanical Keyboard"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      RGB Lighting
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 4].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(89)</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Mechanical Gaming Keyboard
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Cherry MX switches with customizable RGB backlighting.
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-gray-900">
                      $89.00
                    </span> */}
                  </div>

                  
                </div>
              </div>

              {/* Product Card 3 - Mouse */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://m.media-amazon.com/images/I/61QY3V6A-NL._UF894,1000_QL80_.jpg"
                    alt="Gaming Mouse"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Wireless
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 3].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(67)</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Precision Gaming Mouse
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    16,000 DPI optical sensor with 8 programmable buttons.
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-gray-900">
                      $49.00
                    </span> */}
                  </div>

                  
                </div>
              </div>

              {/* Product Card 4 - Hard Drive */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://m.media-amazon.com/images/I/61dh9pIxNBL._UF1000,1000_QL80_.jpg"
                    alt="External Hard Drive"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      2TB Storage
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 4].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(42)</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    High-Speed External SSD
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    USB-C 3.2 with transfer speeds up to 1000MB/s.
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-gray-900">
                      $129.00
                    </span> */}
                  </div>

                  
                </div>
              </div>

              {/* Product Card 5 - Smartwatch */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://i0.wp.com/chinthanagsm.lk/wp-content/uploads/2024/10/Iw10.png?fit=650%2C650&ssl=1"
                    alt="Smartwatch"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Iwatch
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm ml-2">(156)</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Advanced Smartwatch
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Health monitoring, GPS, and 7-day battery life.
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      {/* <span className="text-2xl font-bold text-gray-900">
                        $249.00
                      </span> */}
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              🚚 Free Shipping on All Orders Over $99
            </h3>
            <p className="mb-6 opacity-90">
              Plus 30-day money-back guarantee and 2-year warranty on all
              products
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
              Shop All Deals
            </button>
          </div> */}
        </div>
        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Tech?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Discover the latest laptops, accessories, and smart devices designed
            to keep you ahead.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/product"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
