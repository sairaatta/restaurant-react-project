import React from 'react';
import chickenMeal from '../assets/images/chickenMeal.jpg';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import bread from '../assets/images/bread.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import pic from '../assets/images/pic.png';
import pic2 from '../assets/images/pic2.png';
import { FaConciergeBell, FaUtensils, FaStore } from 'react-icons/fa';
import frame4 from '../assets/images/frame4.png';
const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className='flex flex-col lg:flex-row h-screen'>
        {/* left side image */}
        <div className='relative w-full lg:w-1/2 h-1/2 lg:h-full'>
          <div
            style={{
              backgroundImage: `url(${chickenMeal})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)',
              border: 'none',
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
            className='absolute inset-0'
          ></div>

          <div className='relative mx-auto text-center text-white z-10 p-4 sm:p-6 lg:p-8 mt-16 sm:mt-24 lg:mt-56'>
            <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4'>
              It's Quick & Amusing!
            </h2>
            <h1 className='text-xl sm:text-2xl lg:text-4xl font-extrabold mb-4 sm:mb-6 mt-6 sm:mt-8 lg:mt-10 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto'>
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className='text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 mt-4 sm:mt-6 lg:mt-8 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className='bg-[#00BCA8] hover:bg-[#04a796] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-6 sm:mt-8 lg:mt-16'>
              See Menu
            </button>
            <div className='flex justify-between items-center mt-6 sm:mt-8'>
              <div className='flex space-x-1 sm:space-x-2'>
                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00BCA8]'></div>
                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white opacity-50 blur-sm'></div>
                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white opacity-50 blur-sm'></div>
                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white opacity-50 blur-sm'></div>
                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white opacity-50 blur-sm'></div>
              </div>
              <div className='flex space-x-3 sm:space-x-4'>
                <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
                  <span className='text-sm sm:text-lg font-bold'>{'<'}</span>
                </div>
                <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
                  <span className='text-sm sm:text-lg font-bold'>{'>'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* right side image */}
        <div
          style={{
            backgroundImage: `url(${chickenMeal})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='w-full lg:w-1/2 h-1/2 lg:h-full'
        >

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


      {/* about us */}
      <section className='flex flex-col lg:flex-row h-auto lg:h-screen mt-6'>
        {/* About Us Content */}
        <div className='relative w-full lg:w-1/2 p-8 flex flex-col justify-center lg:justify-start'>
          <h2 className='font-semibold text-2xl lg:text-3xl mb-4'>About Us</h2>
          <h1 className='font-serif text-3xl lg:text-4xl mb-4'>
            We Create the best<br />foody product
          </h1>
          <p className='mb-5 text-base lg:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br />
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br />
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed<br />
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <ul className='flex flex-col space-y-4'>
            <li className='flex items-start mb-2'>
              <svg
                className='w-6 h-6 mr-2 text-black'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7'></path>
              </svg>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className='flex items-start mb-2'>
              <svg
                className='w-6 h-6 mr-2 text-black'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7'></path>
              </svg>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className='flex items-start mb-2'>
              <svg
                className='w-6 h-6 mr-2 text-black'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7'></path>
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>

            <li className="flex items-start mt-4">
              <button className='bg-[#00BCA8] hover:bg-[#04a796] text-white py-2 px-4 rounded-lg'>
                Read More
              </button>
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className='relative w-full lg:w-1/2 p-8 flex flex-col items-center lg:items-end'>
          <div className='w-full max-w-lg lg:max-w-4xl mb-4'>
            <img src={img2} alt="Main Image" className='w-full h-auto rounded-lg' />
          </div>
          <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
            <img src={img1} alt="Image 1" className='w-full max-w-xs lg:max-w-sm' />
            <img src={bread} alt="Image 2" className='w-full max-w-xs lg:max-w-sm' />
          </div>
        </div>
      </section>

      {/* Food category section */}
      <section className='p-4 mb-20'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold'>Food Category</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          <div className='relative w-full sm:w-80 h-80 bg-gray-200'>
            <img src={img3} alt="" className='w-full h-full object-cover rounded-xl' />
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 rounded-lg p-4'>
              <button className='bg-[#00BCA8] text-white py-2 px-4 rounded-lg'>
                Dessert
              </button>
            </div>
          </div>
          <div className='relative w-full sm:w-80 h-80 bg-gray-200'>
            <img src={img4} alt="" className='w-full h-full object-cover rounded-xl' />
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 rounded-lg p-4'>
              <button className='bg-[#00BCA8] text-white py-2 px-4 rounded-lg'>
                Fast Food
              </button>
            </div>
          </div>
          <div className='relative w-full sm:w-80 h-80 bg-gray-200'>
            <img src={img5} alt="" className='w-full h-full object-cover rounded-xl' />
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 rounded-lg p-4'>
              <button className='bg-[#00BCA8] text-white py-2 px-4 rounded-lg'>
                Dessert
              </button>
            </div>
          </div>
          <div className='relative w-full sm:w-80 h-80 bg-gray-200'>
            <img src={img6} alt="" className='w-full h-full object-cover rounded-xl' />
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 rounded-lg p-4'>
              <button className='bg-[#00BCA8] text-white py-2 px-4 rounded-lg'>
                Dessert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* book early and save */}
      <section className='relative h-80'>
        <div
          style={{
            backgroundImage: `url(${frame4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            height: '100%',
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
          }}
          className='absolute inset-0'
        ></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50 p-6'>
          <h1 className='text-white text-5xl font-semibold mb-4'>Book Early & Save</h1>
          <p className='text-gray-300 mb-6'>Lorem ipsum dolor sit amet consectetur.</p>
          <button className='bg-[#00BCA8] text-white py-2 px-6 rounded-lg'>
            Book Now
          </button>
        </div>
      </section>

      {/* meet our chef section */}
      <section>
        <div className='p-4 mt-10'>
          <h1 className='text-3xl font-semibold text-center mb-6'>Meet Our Chef</h1>
          <div className='flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 items-center justify-center'>
            <div className='relative w-full sm:w-60 md:w-72 lg:w-80'>
              <img src={img7} alt="" className='w-full h-auto object-cover' />
              <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-center text-white p-2'>
                <h1 className='text-base sm:text-lg font-bold'>D.Estwood</h1>
                <p className='text-xs sm:text-sm'>Chief Chef</p>
              </div>
            </div>

            <div className='relative w-full sm:w-60 md:w-72 lg:w-80'>
              <img src={img7} alt="" className='w-full h-auto object-cover' />
              <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-center text-white p-2'>
                <h1 className='text-base sm:text-lg font-bold'>D.Estwood</h1>
                <p className='text-xs sm:text-sm'>Chief Chef</p>
              </div>
            </div>

            <div className='relative w-full sm:w-60 md:w-72 lg:w-80'>
              <img src={img7} alt="" className='w-full h-auto object-cover' />
              <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-center text-white p-2'>
                <h1 className='text-base sm:text-lg font-bold'>D.Estwood</h1>
                <p className='text-xs sm:text-sm'>Chief Chef</p>
              </div>
            </div>

            <div className='relative w-full sm:w-60 md:w-72 lg:w-80'>
              <img src={img7} alt="" className='w-full h-auto object-cover' />
              <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-center text-white p-2'>
                <h1 className='text-base sm:text-lg font-bold'>D.Estwood</h1>
                <p className='text-xs sm:text-sm'>Chief Chef</p>
              </div>
            </div>
          </div>

          <div className='mx-auto mt-8 text-center'>
            <button className='bg-[#00BCA8] hover:bg-[#04a796] text-white py-2 px-4 rounded-lg'>
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* grid section */}
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 p-4'>
          <div className='md:col-start-1 md:row-start-1'>
            {/* img on top left */}
            <img src={pic} className='w-full h-full object-cover' />
          </div>
          <div className='md:col-start-2 md:row-start-1 flex items-center justify-center'>
            {/* h1 and p on top right */}
            <div className='text-center p-4 md:p-20'>
              <h1 className='text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-center md:text-right'>
                Our Restaurant
              </h1>
              <p className='text-sm md:text-base text-center md:text-right'>
                Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
              </p>
            </div>
          </div>
          <div className='md:col-start-1 md:row-start-2 flex items-center justify-center'>
            {/* h1 and p on bottom left */}
            <div className='text-center p-4 md:p-20'>
              <h1 className='text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-center md:text-left'>
                Meet & Greet
              </h1>
              <p className='text-sm md:text-base text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur. Sed amet nibh ante ultrices adipiscing euismod enim diam imperdiet. Tellus justo proin sed orci et turpis diam libero. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
              </p>
            </div>
          </div>
          <div className='md:col-start-2 md:row-start-2'>
            {/* img on bottom right */}
            <img src={pic2} className='w-full h-full object-cover' />
          </div>
        </div>
      </section>

      {/* services section */}
      <section>
        <div className='bg-blue-200 mt-20 p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Our Services</h1>
          </div>

          <div className='flex flex-col md:flex-row p-4 md:p-16 space-y-8 md:space-y-0 md:space-x-10'>
            <div className='text-center'>
              <FaConciergeBell className='mx-auto mb-4 text-4xl text-gray-600' />
              <h1 className='text-lg md:text-xl font-semibold mb-2'>
                Concierge Service
              </h1>
              <p className='text-sm md:text-base'>
                Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
              </p>
            </div>
            <div className='text-center'>
              <FaUtensils className='mx-auto mb-4 text-4xl text-gray-600' />
              <h1 className='text-lg md:text-xl font-semibold mb-2'>
                Dining
              </h1>
              <p className='text-sm md:text-base max-w-xs md:max-w-2xl mx-auto'>
                Lorem ipsum dolor sit amet consectetur. Felis quam ut elementum non a consectetur. Vel ornare purus pretium ut.
              </p>
            </div>
            <div className='text-center'>
              <FaStore className='mx-auto mb-4 text-4xl text-gray-600' />
              <h1 className='text-lg md:text-xl font-semibold mb-2'>
                Restaurant
              </h1>
              <p className='text-sm md:text-base'>
                Lorem ipsum dolor sit amet consectetur. Consequat pretium pellentesque venenatis odio cras posuere leo nulla etiam. Massa enim arcu mi tristique proin.
              </p>
            </div>
          </div>
        </div>
      </section>










    </>


  );
};

export default Home;
