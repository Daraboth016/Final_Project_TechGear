import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductGrid = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const products = [

    //Macbook
    {
      id: 1,
      name: "Restored Macbook Pro-Model A-1990 15 - Intel Core i9 -16GB RAM 512GB Storage - Gray Refurbished",
      price: 884.43,
      image: "https://loop-mobile.es/cdn/shop/products/macbook_pro_2019_grey_1_212e2f46-3552-4ffa-bdd2-7732418b7632.jpg?v=1644993729"
    },
    {
      id: 2,
      name: "Apple MacBook Air M1 Chip 13-inch, 8GB RAM, 256GB Cambodia",
      price: 1030.08,
      image: "https://i5.walmartimages.com/seo/Open-Box-Apple-MacBook-Air-with-Apple-M1-Chip-13-inch-8GB-RAM-256GB-SSD-Storage-Gold-Latest-Model_df56cdc2-3790-485d-9772-9deafc28dc9e.e229737c44843a1e09b9131a3bc672ee.jpeg"
    },
    {
      id: 3,
      name: "Apple MacBook Air M4 Chip 13 with 10-core CPU and 8-core GPU, 16GB-256GB SSD Sky Blue",
      price: 1204.43,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk"
    },
    {
      id: 4,
      name: "Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage",
      price: 1003.60,
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg"
    },
    //Keyboard
    {
      id: 5,
      name: "Apple Magic Keyboard with Touch ID and Numeric Keypad",
      price: 199.00,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2C3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010471000",
      category: "keyboards"
    },
    {
      id: 6,
      name: "Logitech MX Keys Advanced Wireless Illuminated Keyboard",
      price: 99.99,
      image: "https://www.system-max.com/wp-content/uploads/2023/06/1-Logitech-MX-Keys-Advanced-Wireless-Illuminated-Keyboard-%E2%80%93-Graphite-600x600.jpg",
      category: "keyboards"
    },
    {
      id: 7,
      name: "Keychron K2 Wireless Mechanical Keyboard",
      price: 79.99,
      image: "https://m.media-amazon.com/images/I/61dXb5X1mYL._UF1000,1000_QL80_.jpg",
      category: "keyboards"
    },
    {
      id: 8,
      name: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
      price: 139.99,
      image: "https://m.media-amazon.com/images/I/71lMt5pVuvL._UF1000,1000_QL80_.jpg",
      category: "keyboards"
    },
    // Mice
    {
      id: 9,
      name: "Apple Magic Mouse 2 - Wireless Mouse",
      price: 79.00,
      image: "https://olcha.uz/image/original/products/IBrjPRDQwBl2bMEsiq1UFPZKia25mjOPqrKzXOW80rvZpo9zWZLJn8q21tvY.jpg",
      category: "mice"
    },
    {
      id: 10,
      name: "Logitech MX Master 3S Wireless Performance Mouse",
      price: 99.99,
      image: "https://m.media-amazon.com/images/I/31jFlUatNDL._UF894,1000_QL80_.jpg",
      category: "mice"
    },
    {
      id: 11,
      name: "Razer DeathAdder Essential Gaming Mouse",
      price: 49.99,
      image: "https://s3.us-east-1.amazonaws.com/product-image-bucket-nz-prod-us/396473-Product-1-I-638917011746070842.jpg",
      category: "mice"
    },
    {
      id: 12,
      name: "Microsoft Surface Precision Mouse",
      price: 89.99,
      image: "https://support.microsoft.com/images/en-us/1bacdacf-f1b7-e5b6-7f61-10d6efe92ed0",
      category: "mice"
    },

    // Accessories
    {
      id: 13,
      name: "Apple AirPods Pro (2nd Generation)",
      price: 249.00,
      image: "https://media.johnlewiscontent.com/i/JohnLewis/111063331?fmt=auto&$background-off-white$",
      category: "accessories"
    },
    {
      id: 14,
      name: "Apple iPad Air 11-inch (M2 Chip)",
      price: 599.00,
      image: "https://m.media-amazon.com/images/I/71QFATKzwqL._UF1000,1000_QL80_.jpg",
      category: "accessories"
    },
    {
      id: 15,
      name: "Samsung T7 Shield 2TB Portable SSD",
      price: 149.99,
      image: "https://m.media-amazon.com/images/I/71QECJDuCYL._UF350,350_QL80_.jpg",
      category: "accessories"
    },
    {
      id: 16,
      name: "Anker 7-in-1 USB-C Hub with 4K HDMI",
      price: 45.99,
      image: "https://i5.walmartimages.com/seo/Anker-USB-C-Hub-Adapter-7-in-1-USB-C-Adapter-with-4K-HDMI-Power-Delivery-for-MacBook-Pro-Pixelbook-XPS_b6b6a8c8-1044-49b8-b8d0-b18ea9c061e3_1.f8b2556dfb94c326381c0bc00997323a.jpeg",
      category: "accessories"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Optional: Show a quick confirmation
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Proceeding to payment! Total: $${getTotalPrice()}`);
    // Here you would typically redirect to a payment page
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="relative">
      <h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
        Welcome to our shop
      </h1>

      {/* Shopping Cart Icon */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Your Cart ({cart.length})</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-4 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-3">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                          <p className="text-green-600 font-semibold">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-green-600">${getTotalPrice()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Proceed to Payment
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-20 px-4'>
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
            <a href="#">
              <img 
                className="rounded-t-lg w-full h-48 object-cover" 
                src={product.image} 
                alt={product.name} 
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
                  {product.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Price: <span className="text-green-600 font-semibold">${product.price}</span>
              </p>
              
              {/* Add to Cart Button */}
              <button 
                onClick={() => addToCart(product)}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200"
              >
                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                Add to Cart
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;