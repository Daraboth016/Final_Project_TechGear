import { useState, useEffect } from 'react';
import { StarIcon, ShieldCheckIcon, TruckIcon, ArrowPathIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

const AdvertisementSection = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const ads = [
    {
      id: 1,
      title: "Back to School Sale",
      subtitle: "Up to 30% Off on MacBooks",
      description: "Gets ready for the academic year with powerful Apple technology",
      cta: "Shop Now",
      bgColor: "bg-gradient-to-r from-blue-600 to-purple-700",
      textColor: "text-white",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/back-to-school-202309?wid=2000&hei=1000&fmt=jpeg&qlt=90&.v=1693500902667"
    },
    {
      id: 2,
      title: "Free Shipping & Returns",
      subtitle: "On All Orders Over $499",
      description: "Fast, free delivery and easy returns within 30 days",
      cta: "Learn More",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Apple Certified Refurbished",
      subtitle: "Like New, Priced Right",
      description: "Fully tested, 1-year warranty, and savings up to 40%",
      cta: "Browse Deals",
      bgColor: "bg-gradient-to-r from-gray-800 to-black",
      textColor: "text-white",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurbished-hero-202309?wid=2000&hei=1000&fmt=jpeg&qlt=90&.v=1693500902667"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % ads.length);
  };

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + ads.length) % ads.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
        <div className={`${ads[currentAd].bgColor} ${ads[currentAd].textColor}`}>
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {ads[currentAd].title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  {ads[currentAd].subtitle}
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  {ads[currentAd].description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
                  {ads[currentAd].cta}
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={ads[currentAd].image} 
                  alt={ads[currentAd].title}
                  className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevAd}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextAd}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {ads.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentAd ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <ShieldCheckIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">1-Year Warranty</h3>
          <p className="text-gray-600">All products include full manufacturer warranty</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <TruckIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
          <p className="text-gray-600">Free delivery on orders over $499</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <ArrowPathIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
          <p className="text-gray-600">30-day return policy, no questions asked</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <DevicePhoneMobileIcon className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
          <p className="text-gray-600">24/7 customer service and technical support</p>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Banner - Seasonal Sale */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 text-white">
            <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Limited Time
            </span>
            <h2 className="text-3xl font-bold mb-4">Summer Tech Sale</h2>
            <p className="text-lg mb-6 opacity-90">Save big on laptops, accessories, and more</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2">
                  <span className="text-2xl font-bold">25%</span>
                </div>
                <span className="text-sm">Off</span>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2">
                  <span className="text-2xl font-bold">$0</span>
                </div>
                <span className="text-sm">Shipping</span>
              </div>
            </div>
            <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Shop the Sale
            </button>
          </div>
        </div>

        {/* Right Banner - New Arrivals */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-lg overflow-hidden relative">
          <div className="p-8 text-white relative z-10">
            <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              New Arrivals
            </span>
            <h2 className="text-3xl font-bold mb-4">Latest MacBook Air M4</h2>
            <p className="text-lg mb-6 opacity-90">Experience the next generation of performance</p>
            <div className="flex items-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="w-5 h-5 text-yellow-400" />
              ))}
              <span className="text-sm ml-2">4.9/5 (2,347 reviews)</span>
            </div>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Explore Now
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent to-indigo-800"></div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Thousands of Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Graphic Designer",
              comment: "The refurbished MacBook Pro I bought works perfectly. Saved over $500!",
              rating: 5
            },
            {
              name: "Michael Chen",
              role: "Software Engineer",
              comment: "Fast shipping and excellent customer service. Will definitely shop again.",
              rating: 5
            },
            {
              name: "Emily Rodriguez",
              role: "University Student",
              comment: "Great prices for students. The back-to-school discount was amazing!",
              rating: 4
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
          Get exclusive deals, new product announcements, and tech tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
        <p className="text-sm opacity-75 mt-4">No spam, unsubscribe at any time</p>
      </div>
    </div>
  );
};

export default AdvertisementSection;