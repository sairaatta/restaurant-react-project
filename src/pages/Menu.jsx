import React from 'react'
import img13 from '../assets/images/img13.png';
import img14 from '../assets/images/img14.jpg';
import { FaPizzaSlice, FaUtensils, FaHamburger } from 'react-icons/fa'; // Font Awesome icons
import { GiChefToque, GiKnifeFork } from 'react-icons/gi'; // Game Icons

const Menu = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Menu</h1>
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

      {/* next section */}
      <div className='p-16'>
        <nav className='mx-auto '>
          <ul className='flex space-x-12 items-center justify-center'>
            <li className='text-3xl text-gray-700 hover:underline hover:text-gray-900'>STARTER </li>
            <li className='text-3xl text-gray-700 hover:underline hover:text-gray-900'>MAIN COURSE</li>
            <li className='text-3xl text-gray-700 hover:underline hover:text-gray-900'>DESSERTS</li>
            <li className='text-3xl text-gray-700 hover:underline hover:text-gray-900'>DRINKS</li>
          </ul>
        </nav>
      </div>

      <div className='ml-4 md:ml-20 mt-6 md:mt-10'>
        <h3 className='font-bold text-base md:text-lg text-gray-600'>Filter By Price</h3>
        <h3 className='font-bold text-2xl md:text-4xl text-gray-600 mt-2 md:mt-4'> .______________. </h3>
        <div className='flex flex-col md:flex-row items-start md:items-center mt-2'>
          <span className='p-2 text-sm md:text-base text-gray-600'>From $0 to $8000</span>
          <span className='p-2 text-sm md:text-base text-gray-600'>Filter</span>
        </div>
        <ul className='mt-8 md:mt-20'>
          <li className="border-b-4 border-gray-400 pb-4 mb-4 md:pb-8 md:mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Left Side: Image and Text */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <img
                  src={img14}
                  alt="Product"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h2 className="text-base md:text-lg font-semibold">Product Name</h2>
                  <span className="text-sm md:text-base text-gray-600">ingredient1, ingredient2, ingredient3, ingredient4</span>
                </div>
              </div>

              {/* Right Side: Price */}
              <span className="text-base md:text-lg font-bold mt-4 md:mt-0 mr-0 md:mr-10">$20.00</span>
            </div>
          </li>
        </ul>


        <ul className='mt-8 md:mt-20'>
          <li className="border-b-4 border-gray-400 pb-4 mb-4 md:pb-8 md:mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Left Side: Image and Text */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <img
                  src={img14}
                  alt="Product"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h2 className="text-base md:text-lg font-semibold">Product Name</h2>
                  <span className="text-sm md:text-base text-gray-600">ingredient1, ingredient2, ingredient3, ingredient4</span>
                </div>
              </div>

              {/* Right Side: Price */}
              <span className="text-base md:text-lg font-bold mt-4 md:mt-0 mr-0 md:mr-10">$20.00</span>
            </div>
          </li>
        </ul>

        <ul className='mt-8 md:mt-20'>
          <li className="border-b-4 border-gray-400 pb-4 mb-4 md:pb-8 md:mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Left Side: Image and Text */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <img
                  src={img14}
                  alt="Product"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h2 className="text-base md:text-lg font-semibold">Product Name</h2>
                  <span className="text-sm md:text-base text-gray-600">ingredient1, ingredient2, ingredient3, ingredient4</span>
                </div>
              </div>

              {/* Right Side: Price */}
              <span className="text-base md:text-lg font-bold mt-4 md:mt-0 mr-0 md:mr-10">$20.00</span>
            </div>
          </li>
        </ul>

        <ul className='mt-8 md:mt-20'>
          <li className="border-b-4 border-gray-400 pb-4 mb-4 md:pb-8 md:mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Left Side: Image and Text */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <img
                  src={img14}
                  alt="Product"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h2 className="text-base md:text-lg font-semibold">Product Name</h2>
                  <span className="text-sm md:text-base text-gray-600">ingredient1, ingredient2, ingredient3, ingredient4</span>
                </div>
              </div>

              {/* Right Side: Price */}
              <span className="text-base md:text-lg font-bold mt-4 md:mt-0 mr-0 md:mr-10">$20.00</span>
            </div>
          </li>
        </ul>

        <ul className='mt-8 md:mt-20'>
          <li className="border-b-4 border-gray-400 pb-4 mb-4 md:pb-8 md:mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Left Side: Image and Text */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <img
                  src={img14}
                  alt="Product"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h2 className="text-base md:text-lg font-semibold">Product Name</h2>
                  <span className="text-sm md:text-base text-gray-600">ingredient1, ingredient2, ingredient3, ingredient4</span>
                </div>
              </div>

              {/* Right Side: Price */}
              <span className="text-base md:text-lg font-bold mt-4 md:mt-0 mr-0 md:mr-10">$20.00</span>
            </div>
          </li>
        </ul>





      </div>

      {/* background img */}
      <section className="relative h-[60vh] bg-transparent mt-40">

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
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-4 md:p-8 space-x-8 md:space-x-32">
          <div className="flex flex-col items-center hover:text-gray-400">
            <GiChefToque className="text-6xl mb-2 " />
            <p className="text-3xl font-bold">420</p>
            <p className="text-xl">Professional Chefs</p>
          </div>

          <div className="flex flex-col items-center hover:text-gray-400">
            <FaHamburger className="text-6xl mb-2" />
            <p className="text-3xl font-bold">320</p>
            <p className="text-xl">Items Of Food</p>
          </div>

          <div className="flex flex-col items-center hover:text-gray-400">
            <GiKnifeFork className="text-6xl mb-2" />
            <p className="text-3xl font-bold">30+</p>
            <p className="text-xl">Years Of Experience</p>
          </div>

          <div className="flex flex-col items-center hover:text-gray-400">
            <FaPizzaSlice className="text-6xl mb-2" />
            <p className="text-3xl font-bold">220</p>
            <p className="text-xl">Happy Customers</p>
          </div>
        </div>
</section>
      </>
      )
}

      export default Menu