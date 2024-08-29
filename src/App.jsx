import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Franchising from './pages/Franchising';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';
const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/checkout' element={<CheckOut/>} ></Route>
            <Route path='/franchising' element={<Franchising/>} ></Route>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/menu' element={<Menu/>} ></Route>
            <Route path='/productDetail' element={<ProductDetail/>} ></Route>

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App