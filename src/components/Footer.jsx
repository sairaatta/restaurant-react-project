import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import img11 from '../assets/images/img11.png';

const Footer = () => {
  return (
    <div className="bg-gray-300 mt-32">
      <footer className='p-8 bg-gray-300 text-black'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div>
            <h1 className='text-2xl font-semibold mb-4'>LOGO</h1>
            <p className='mt-7 text-gray-600'>Lorem ipsum dolor sit amet</p>

            <div className='flex items-center mt-12 w-full'>
              <input
                type="email"
                placeholder='Enter Your Email'
                className='p-2 rounded-sm outline-none flex-1'
              />
              <button className='ml-2 text-2xl p-2 bg-[#00BCA8] text-white rounded-sm'>
                <FaPaperPlane />
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>

            <p className='flex items-center mt-8 mb-4'>
              <FaMapMarkerAlt className='mr-2 text-gray-700' />
              25950 Long Lane, North Ismael 14280
            </p>

            <p className='flex items-center mb-4 mt-6'>
              <FaPhoneAlt className='mr-2 text-gray-700' />
              00965 96659986
            </p>

            <p className='flex items-center mb-4 mt-6'>
              <FaEnvelope className='mr-2 text-gray-700' />
              Jermaine.Connelly@yahoo.com
            </p>

            <p className='flex items-center mb-4 mt-6'>
              <FaClock className='mr-2 text-gray-700' />
              Sun Sat / 10:00 AM - 8:00 PM
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Links</h2>
            <ul className='space-y-2 mt-10'>
              <li><Link to='/about' className='hover:underline text-gray-700'>About Us</Link></li>
              <li><Link to='/contact' className='hover:underline text-gray-700'>Contact Us</Link></li>
              <li><Link to='/menu' className='hover:underline text-gray-700'>Our Menu</Link></li>
              <li><Link to='/team' className='hover:underline text-gray-700'>Team</Link></li>
              <li><Link to='/faqs' className='hover:underline text-gray-700'>FAQs</Link></li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Gallery</h2>
            <div className='grid grid-cols-3 gap-1'>
              <div className='bg-gray-600 h-20'>
                <img src={img8} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='bg-gray-600 h-20'>
                <img src={img9} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='bg-gray-600 h-20'>
                <img src={img10} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='bg-gray-600 h-20'>
                <img src={img11} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='bg-gray-600 h-20'>
                <img src={img8} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='bg-gray-600 h-20'>
                <img src={img9} alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='w-full flex flex-col md:flex-row justify-between items-center text-white bg-[#00BCA8] p-6'>
        <div className='text-center md:text-left md:ml-10'>
          &copy; 2000-2020.logo.com. All rights reserved
        </div>
        <div className='flex space-x-6 mt-4 md:mt-0'>
          <h2 className='cursor-pointer hover:underline'>Privacy Policy</h2>
          <h2 className='cursor-pointer hover:underline'>Terms of Use</h2>
          <h2 className='cursor-pointer hover:underline'>Partner</h2>
        </div>
      </div>
    </div>

  );
}

export default Footer;
