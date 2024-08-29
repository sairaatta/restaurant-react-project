import React, { useState } from 'react'
import img13 from '../assets/images/img13.png';
import img4 from '../assets/images/img4.png';
import chickenMeal from '../assets/images/chickenMeal.jpg';
import { FaConciergeBell, FaUtensils, FaStore } from 'react-icons/fa';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(chickenMeal);

  // Array of images (replace with your actual images)
  const images = [chickenMeal, chickenMeal, chickenMeal, chickenMeal];
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Products Detail</h1>
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

      <div className="flex flex-col md:flex-row items-start space-x-4 p-4 ">
        {/* Vertical Images */}
        <div className="flex flex-col space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-24 object-cover cursor-pointer hover:opacity-75 border-4 mt-48 ml-32 ${selectedImage === image ? 'border-blue-500' : 'border-transparent'
                }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Container for Selected Image and Product Details */}
        <div className="flex-1 flex flex-col md:flex-row mt-36">
          {/* Selected Image Display */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full flex items-start justify-start">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full h-96 object-cover"
                style={{ maxHeight: 'calc(100vh - 1rem)' }} // Adjust the height here
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-start p-4 space-y-4 ">
            <h1 className="text-2xl font-bold ">Product Name</h1>
            <p className="text-lg">Category: Pizza</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
              vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
              risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="border-t border-gray-300 my-4"></div>

            <h3 className="text-xl font-semibold">$54.00</h3>

            <div className="flex items-start space-x-4">
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

            <div className="flex items-center space-x-4">
              <div className="text-center">
                <h1 className="text-lg font-semibold mb-4">Quantity</h1>
                <div className="flex items-center justify-center space-x-2">
                  <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                  <span className="text-sm font-medium">1</span>
                  <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                </div>
              </div>
              <button className="p-2 bg-[#00BCA8]  text-white rounded hover:bg-[#07af9e] mt-10">
                Add to Cart
              </button>
            </div>
          </div>

        </div>

      </div>

      <div className='p-4 md:p-6 lg:p-8'>
        <nav className='ml-0 md:ml-12'>
          <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12'>
            <li className='text-gray-700 hover:underline hover:text-gray-800 p-2'>Description</li>
            <li className='text-gray-700 hover:underline hover:text-gray-800 p-2'>Reviews (24)</li>
          </ul>
        </nav>

        <p className='mt-4 mb-4 md:mt-10 md:mb-6 ml-14 text-gray-600'>
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
          justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus
          vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl
        </p>

        <p className='mt-4 mb-4 md:mt-10 md:mb-6 ml-14 text-gray-600'>
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
          accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo.
          Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem
        </p>

        <h1 className='mt-6 font-semibold text-xl md:text-2xl ml-14'>Key Benefits</h1>
        <ul className='mt-4 list-disc list-inside ml-20'>
          <li className='mb-4 md:mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className='mb-4 md:mb-6'>Maecenas ullamcorper est et massa mattis condimentum</li>
          <li className='mb-4 md:mb-6'>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl</li>
          <li className='mb-4 md:mb-6'>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li className='mb-4 md:mb-6'>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>


      {/* similar products */}
      <div className='mt-6 mx-auto text-start p-8'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='font-semibold text-3xl ml-52'>
            Similar Products
          </h1>
          <div className='flex space-x-3 sm:space-x-4 mr-52'>
            <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
              <span className='text-sm sm:text-lg font-bold'>{'<'}</span>
            </div>
            <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#00BCA8] hover:bg-[#04a796] text-white'>
              <span className='text-sm sm:text-lg font-bold'>{'>'}</span>
            </div>
          </div>
        </div>



        <div className='flex flex-wrap justify-center gap-8'>
          <div className='flex flex-col items-center text-center'>
            <img
              src={chickenMeal}
              alt="Product 1"
              className='w-56 h-56 object-cover mb-4'
            />
            <h2 className='text-lg font-normal mb-2'>Product name</h2>
            <p className='text-gray-600'>$38.00</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img
              src={img4}
              alt="Product 2"
              className='w-56 h-56 object-cover mb-4'
            />
            <h2 className='text-lg font-normal mb-2'>Product name</h2>
            <p className='text-gray-600'>$28.00</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img
              src={chickenMeal}
              alt="Product 3"
              className='w-56 h-56 object-cover mb-4'
            />
            <h2 className='text-lg font-normal mb-2'>Product name</h2>
            <p className='text-gray-600'>$21.00</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img
              src={img4}
              alt="Product 4"
              className='w-56 h-56 object-cover mb-4'
            />
            <h2 className='text-lg font-normal mb-2'>Product name</h2>
            <p className='text-gray-600'>$38.00</p>
          </div>
        </div>
        {/* Dots Navigation */}
        <div className='flex justify-center mt-12'>
          <span className='w-3 h-3 rounded-full bg-[#00BCA8] mx-1'></span> {/* Blue dot */}
          <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
          <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
          <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
          <span className='w-3 h-3 rounded-full bg-gray-400 mx-1'></span> {/* Gray dot */}
        </div>

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
      </div>


    </>
  )
}

export default ProductDetail