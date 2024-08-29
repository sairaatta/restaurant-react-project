import React from 'react';
import img13 from '../assets/images/img13.png';
import chickenMeal from '../assets/images/chickenMeal.jpg';

const Cart = () => {

  const handleRemoveProduct = (productId) => {
    // Replace with your remove function logic
    console.log(`Remove product with ID: ${productId}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-transparent">
        <div
          style={{
            backgroundImage: `url(${img13})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            filter: 'brightness(1.2) contrast(1.1)',
          }}
          className="absolute inset-0 z-0"
        >
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Cart Items</h1>
        </div>
      </section>
      {/* Sidebar */}
      <div className="absolute top-0 right-0 w-full sm:w-24 md:w-32 lg:w-36 xl:w-40 h-3/4 mt-16 sm:mt-24 md:mt-32 lg:mt-40 mr-4 sm:mr-6 lg:mr-10 xl:mr-20 rounded-3xl bg-gray-800 bg-opacity-75 text-white p-2 sm:p-4 hidden md:block">
        <ul className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 mt-4 sm:mt-6">
          <li className="flex flex-col items-center hover:text-gray-300">
            <i className="fas fa-home fa-sm sm:fa-lg md:fa-2x mb-1 sm:mb-2"></i>
            <a href="/">HOME</a>
          </li>
          <li className="flex flex-col items-center hover:text-gray-300">
            <i className="fas fa-utensils fa-sm sm:fa-lg md:fa-2x mb-1 sm:mb-2"></i>
            <a href="/menu">MENU</a>
          </li>
          <li className="flex flex-col items-center hover:text-gray-300">
            <i className="fas fa-store fa-sm sm:fa-lg md:fa-2x mb-1 sm:mb-2"></i>
            <a href="/franchising">FRANCHISE</a>
          </li>
          <li className="flex flex-col items-center hover:text-gray-300">
            <i className="fas fa-info-circle fa-sm sm:fa-lg md:fa-2x mb-1 sm:mb-2"></i>
            <a href="/about">ABOUT</a>
          </li>
          <li className="flex flex-col items-center hover:text-gray-300">
            <i className="fas fa-phone fa-sm sm:fa-lg md:fa-2x mb-1 sm:mb-2"></i>
            <a href="/contact">CONTACT US</a>
          </li>
          <li className="flex flex-col items-center">
            <button className="bg-[#00BCA8] hover:bg-[#04a796] p-1 sm:p-2 md:p-3 rounded-lg">
              Book Now
            </button>
          </li>
        </ul>
      </div>
      {/* Product Listing Detail */}
      <div className="p-4 mt-24 md:mt-36">
        <div className="overflow-x-auto">
          <ul className="flex flex-col space-y-4">
            {/* Item 1 */}
            <li className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <h1 className="text-lg font-semibold mb-4">Product</h1>
                <div className="flex items-center space-x-4">
                  <img src={chickenMeal} alt="Product Image" className="w-32 h-32" />
                  <div className="text-center">
                    <p className="text-sm mb-2">Product Name</p>
                    <p className="text-sm">
                      <span className="text-red-600">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Price</h1>
                  <p className="text-sm">$35.00</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Quantity</h1>
                  <div className="flex items-center justify-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span className="text-sm font-medium">1</span>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Total</h1>
                  <p className="text-sm">$35.00</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Remove</h1>
                  <button
                    className="text-sm text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveProduct('productId1')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            {/* Item 2 */}
            <li className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <h1 className="text-lg font-semibold mb-4">Product</h1>
                <div className="flex items-center space-x-4">
                  <img src={chickenMeal} alt="Product Image" className="w-32 h-32" />
                  <div className="text-center">
                    <p className="text-sm mb-2">Product Name 2</p>
                    <p className="text-sm">
                      <span className="text-red-600">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Price</h1>
                  <p className="text-sm">$45.00</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Quantity</h1>
                  <div className="flex items-center justify-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span className="text-sm font-medium">2</span>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Total</h1>
                  <p className="text-sm">$90.00</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Remove</h1>
                  <button
                    className="text-sm text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveProduct('productId2')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>

            {/* Item 3 */}
            <li className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <h1 className="text-lg font-semibold mb-4">Product</h1>
                <div className="flex items-center space-x-4">
                  <img src={chickenMeal} alt="Product Image" className="w-32 h-32" />
                  <div className="text-center">
                    <p className="text-sm mb-2">Product Name 2</p>
                    <p className="text-sm">
                      <span className="text-red-600">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Price</h1>
                  <p className="text-sm">$45.00</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Quantity</h1>
                  <div className="flex items-center justify-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span className="text-sm font-medium">2</span>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Total</h1>
                  <p className="text-sm">$90.00</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-lg font-semibold mb-4">Remove</h1>
                  <button
                    className="text-sm text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveProduct('productId2')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center lg:h-1/2 p-4'>
        <div className='flex flex-col lg:flex-row justify-between items-start w-full max-w-screen-lg'>
          {/* Coupon Code Section */}
          <div className='w-full lg:max-w-xs mb-4 lg:mb-0'>
            <h1 className='text-2xl font-normal mb-4 text-center lg:text-left'>Coupon Code</h1>
            <div className='flex h-10'>
              <input
                type="text"
                placeholder='Enter code here'
                className='p-2 bg-white border border-gray-600 rounded-l-sm flex-grow h-10'
              />
              <button className='bg-[#00BCA8] p-2 border-b-4 text-white rounded-r-sm h-11'>
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill Section */}
          <div className='border border-gray-300 p-5 rounded-md w-full lg:w-[300px]'>
            <h1 className='mb-5 text-center text-2xl'>Total Bill</h1>
            <div>
              <div className='flex justify-between mb-3'>
                <p>Cart Subtotal</p>
                <p>$100.00</p> {/* Replace $100.00 with the actual subtotal value */}
              </div>
              <div className='flex justify-between mb-3'>
                <p>Shipping Charge</p>
                <p>$10.00</p> {/* Replace $10.00 with the actual shipping charge value */}
              </div>
              <hr />
              <div className='flex justify-between mt-3 font-bold'>
                <p>Total Amount</p>
                <p>$110.00</p> {/* Replace $110.00 with the actual total amount value */}
              </div>
            </div>
          </div>
        </div>


      </div>
      {/* Order Now Button */}
      <div className='w-full lg:w-auto md:w-60 sm:w-60 flex justify-center lg:justify-end mt-4 lg:mt-0 lg:mr-56'>
        <button className='p-2 bg-[#00BCA8] text-white rounded-md w-full sm:w-auto'>
          Order Now
        </button>
      </div>











    </>
  );
};

export default Cart;
