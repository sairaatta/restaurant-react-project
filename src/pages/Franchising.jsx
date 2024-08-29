import React from 'react'
import img15 from '../assets/images/img15.png';
import img17 from '../assets/images/img17.png';
const Franchising = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-transparent">
        <div
          style={{
            backgroundImage: `url(${img15})`,
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Our Branches</h1>
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

      {/* Introducing New Look img 1 */}
      <div className='relative mx-auto mt-52 text-center'>
        <h1 className='text-3xl font-semibold mb-8'>Introducing New Look</h1>

        {/* Image with dots and navigation icons */}
        <div className='relative'>
          <img
            src={img15}
            className='mx-auto'
          />

          {/* Dots Navigation */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <div className='flex justify-center'>
              <span className='w-3 h-3 rounded-full bg-[#00BCA8] mx-1'></span> {/* Blue dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
            </div>
          </div>

          {/* Navigation Icons */}
          <div className='absolute bottom-4 right-4 flex space-x-3 sm:space-x-4 mr-48'>
            <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
              <span className='text-sm sm:text-lg font-bold'>{'<'}</span>
            </div>
            <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
              <span className='text-sm sm:text-lg font-bold'>{'>'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* text with image */}
      <div className='flex justify-between items-start'>
        {/* text detail */}
        <div className='flex-1 p-4 mt-10 ml-44'>
          <h1 className='text-3xl font-semibold mb-4'>Pouros and Sons</h1>
          <p className='text-gray-600 text-xl mb-4'>646 First Street, Quigleyville 36427 <br /> country</p>
          <p className="text-sm">
            <span className="text-red-600">
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
            </span>
            <span className='text-xl text-gray-600 ml-4'>768-123 Reviews</span>
            <p className='mt-4 text-xl text-gray-600'>0321-1234-123</p>
          </p>
        </div>
        {/* map img */}
        <div className='flex-1 p-4 mt-10 ml-16 mr-52 h-96 w-1/2'>
          <img src={img17} alt="Map location" className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Introducing New Look img 1 */}
      <div className='relative mx-auto mt-52 text-center'>
        <h1 className='text-3xl font-semibold mb-8'>We Are Now in Bristol</h1>

        {/* Image with dots and navigation icons */}
        <div className='relative'>
          <img
            src={img15}
            className='mx-auto'
          />

          {/* Dots Navigation */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <div className='flex justify-center'>
              <span className='w-3 h-3 rounded-full bg-[#00BCA8] mx-1'></span> {/* Blue dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
              <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
            </div>
          </div>

          {/* Navigation Icons */}
          <div className='absolute bottom-4 right-4 flex space-x-3 sm:space-x-4 mr-48'>
            <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
              <span className='text-sm sm:text-lg font-bold'>{'<'}</span>
            </div>
            <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
              <span className='text-sm sm:text-lg font-bold'>{'>'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* text with image */}
      <div className='flex justify-between items-start mb-40'>
        {/* text detail */}
        <div className='flex-1 p-4 mt-10 ml-44'>
          <h1 className='text-3xl font-semibold mb-4'>Pouros and Sons</h1>
          <p className='text-gray-600 text-xl mb-4'>646 First Street, Quigleyville 36427 <br /> country</p>
          <p className="text-sm">
            <span className="text-red-600">
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
              <i className="fas fa-star text-xl"></i>
            </span>
            <span className='text-xl text-gray-600 ml-4'>768-123 Reviews</span>
            <p className='mt-4 text-xl text-gray-600'>0321-1234-123</p>
          </p>
        </div>
        {/* map img */}
        <div className='flex-1 p-4 mt-10 ml-16 mr-52 h-96 w-1/2'>
          <img src={img17} alt="Map location" className='w-full h-full object-cover' />
        </div>
      </div>


    </>
  )
}

export default Franchising