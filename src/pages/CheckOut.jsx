import React from 'react'
import img13 from '../assets/images/img13.png';

const CheckOut = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Check Out </h1>
        </div>
      </section>

      {/* Sidebar */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-36 lg:w-40 h-3/4 mt-24 sm:mt-32 lg:mt-40 mr-4 sm:mr-10 lg:mr-20 rounded-3xl bg-gray-800 bg-opacity-75 text-white p-2 sm:p-4">
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

      {/* other section */}
      <div className="flex justify-between items-start mx-auto mt-16 mb-32 space-x-10">
        {/* Left Section - Other Section */}
        <div className='flex flex-col ml-36 mt-28 '>
          {/* Row 1 */}
          <div className='flex mb-6'>
            {/* First Name */}
            <div className='flex flex-col mr-6 flex-1'>
              <label>First name</label>
              <input
                type="text"
                className='p-3 border border-b-2 border-gray-600 w-96'
              />
            </div>
            {/* Last Name */}
            <div className='flex flex-col flex-1'>
              <label>Last name</label>
              <input
                type="text"
                className='p-3 border border-b-2 border-gray-600 w-96'
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className='flex mb-6'>
            {/* Email Address */}
            <div className='flex flex-col mr-6 flex-1'>
              <label>Email address</label>
              <input
                type="text"
                className='p-3 border border-b-2 border-gray-600 w-96'
              />
            </div>
            {/* Phone Number */}
            <div className='flex flex-col flex-1'>
              <label>Phone number</label>
              <input
                type="text"
                className='p-3 border border-b-2 border-gray-600 w-96'
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className='flex'>
            {/* Address */}
            <div className='flex flex-col mr-6 flex-1'>
              <label>Address</label>
              <input
                type="text"
                className='p-3 border border-b-2 border-gray-600 w-96'
              />
            </div>
            {/* Area */}
            <div className='flex flex-col flex-1'>
              <label>Area</label>
              <input
                type="text"
                className='p-3 border border-b-2 border-gray-600 w-96'
              />
            </div>
          </div>
        </div>

        {/* Right Section - Product Items */}
        <div className="w-full max-w-md p-4 mr-52 mt-16">
          {/* Product Items */}
          <div className="mb-6">
            <div className="flex mb-4">
              <img src="" alt="Product 1" className="w-20 h-20 mr-4" />
              <div>
                <h1 className="text-lg font-semibold">Product Name</h1>
                <p>Qty: 1</p>
                <p>$50</p>
              </div>
            </div>
            <div className="flex mb-4">
              <img src="" alt="Product 2" className="w-20 h-20 mr-4" />
              <div>
                <h1 className="text-lg font-semibold">Product Name</h1>
                <p>Qty: 1</p>
                <p>$50</p>
              </div>
            </div>
            <div className="flex mb-4">
              <img src="" alt="Product 3" className="w-20 h-20 mr-4" />
              <div>
                <h1 className="text-lg font-semibold">Product Name</h1>
                <p>Qty: 1</p>
                <p>$50</p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Subtotals */}
          <div className="mb-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$130</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>$10</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>$10</p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Total */}
          <div className="flex justify-between mb-6">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">$150</p>
          </div>

          {/* Checkout Button */}
          <div className="text-center">
            <button className="p-3 bg-[#00BCA8] text-white rounded-md w-full">
              Check Out
            </button>
          </div>
        </div>
      </div>






    </>
  )
}

export default CheckOut