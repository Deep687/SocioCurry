import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Log In");

  const toggleBtnText = () => {
    setBtnText(btnText === "Log In" ? "Log Out" : "Log In");
  };

  const cartItems = useSelector((state) => state.cart.elements);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" className="mb-2 sm:mb-0">
            <img
              src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
              alt="SocioCurry Logo"
              className="h-12 md:h-16"
            />
          </Link>
          <h1 className="text-white text-2xl md:text-3xl font-semibold">SocioCurry</h1>
        </div>

        <nav className="mt-4 flex flex-col sm:flex-row items-center sm:justify-center">
          <Link to="/" className="text-white mr-0 sm:mr-4 mb-2 sm:mb-0 hover:text-gray-300 py-2 px-4 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="text-white mr-0 sm:mr-4 mb-2 sm:mb-0 hover:text-gray-300 py-2 px-4 transition duration-300 ease-in-out">About Us</Link>
          <Link to="/contact" className="text-white mr-0 sm:mr-4 mb-2 sm:mb-0 hover:text-gray-300 py-2 px-4 transition duration-300 ease-in-out">Contact Us</Link>
          <Link to="/cart" className="text-white mr-0 sm:mr-4 mb-2 sm:mb-0 hover:text-gray-300 py-2 px-4 transition duration-300 ease-in-out">Cart {cartItems.length}</Link>
          <button className="text-white bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out" onClick={toggleBtnText}>{btnText}</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
