import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className='p-4 bg-black text-white'>
      <div className='flex items-center justify-between mx-auto max-w-screen-xl'>
        {/* Language Selector */}
        <select
          value={language}
          onChange={handleChange}
          className="block bg-black px-4 py-1 text-white rounded-md shadow-xl focus:outline-none hover:bg-black"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>

        {/* Logo */}
        <h1 className='text-3xl font-semibold'>LOGO</h1>

        {/* Social Icons */}
        <ul className='flex items-center space-x-8'>
          <li>
            <Link to='/instagram' className='hover:text-gray-300 text-2xl'>
              <FaInstagram />
            </Link>

          </li>
          <li>
            <Link to='/facebook' className='hover:text-gray-300 text-2xl'>
              <FaFacebook />
            </Link>

          </li>
          <li>
            <Link to='/twitter' className='hover:text-gray-300 text-2xl'>
              <FaTwitter />
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
