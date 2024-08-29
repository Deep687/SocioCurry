import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

const Header = () => {
  const [btnText, setBtnText] = useState("Log In");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleBtnText = () => {
    setBtnText(btnText === "Log In" ? "Log Out" : "Log In");
  };

  const cartItems = useSelector((state) => state.cart.elements);

  return (
    <header className="relative bg-black mx-10 rounded-b-2xl h-20 w-auto text-white flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-14 h-12 ml-10"
            src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
            alt="SocioCurry Logo"
          />
        </Link>
        <h1 className="ml-12 text-lg font-bold sm:block">SocioCurry</h1>
      </div>

      <button
        className="block sm:hidden p-2 text-white text-2xl"
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className="hidden sm:flex flex-grow justify-evenly md:mx-5 items-center mx-10 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative ${isActive ? "text-green-500" : "text-white"}`
          }
        >
          Home
          {({ isActive }) => (
            <span
              className={`block h-1 ${isActive ? "bg-green-500" : "bg-transparent"} absolute -bottom-1 left-0 right-0`}
            />
          )}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative ${isActive ? "text-green-500" : "text-white"}`
          }
        >
          About
          {({ isActive }) => (
            <span
              className={`block h-1 ${isActive ? "bg-green-500" : "bg-transparent"} absolute -bottom-1 left-0 right-0`}
            />
          )}
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative ${isActive ? "text-green-500" : "text-white"} flex items-center space-x-2`
          }
        >
          <CartIcon />
          <span>{cartItems.length}</span>
          {({ isActive }) => (
            <span
              className={`block h-1 ${isActive ? "bg-green-500" : "bg-transparent"} absolute -bottom-1 left-0 right-0`}
            />
          )}
        </NavLink>
      </nav>

      <button
        className="hidden sm:block text-white mr-14 font-bold"
        onClick={toggleBtnText}
        aria-label={`Toggle button text to ${btnText === "Log In" ? "Log Out" : "Log In"}`}
      >
        {btnText}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-50 transform ${drawerOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="w-64 bg-white text-black h-full flex flex-col p-6 shadow-lg">
          <button
            className="self-end text-black text-3xl hover:text-gray-600 transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="flex flex-col mt-8 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-black text-xl font-semibold ${isActive ? "text-red-500" : "text-black"}`
              }
              onClick={() => setDrawerOpen(false)}
            >
              Home
              {({ isActive }) => (
                <span
                  className={`block h-1 ${isActive ? "bg-green-500" : "bg-transparent"} absolute -bottom-1 left-0 right-0`}
                />
              )}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative text-black text-xl font-semibold ${isActive ? "text-red-500" : "text-black"}`
              }
              onClick={() => setDrawerOpen(false)}
            >
              About
              {({ isActive }) => (
                <span
                  className={`block h-1 ${isActive ? "bg-green-500" : "bg-transparent"} absolute -bottom-1 left-0 right-0`}
                />
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative text-black text-xl font-semibold ${isActive ? "text-red-500" : "text-black"}`
              }
              onClick={() => setDrawerOpen(false)}
            >
              Cart ({cartItems.length})
              {({ isActive }) => (
                <span
                  className={`block h-1 ${isActive ? "bg-green-500" : "bg-transparent"} absolute -bottom-1 left-0 right-0`}
                />
              )}
            </NavLink>
            <button
              className="text-black text-xl font-semibold mt-4 hover:text-gray-800 transition-colors"
              onClick={() => {
                toggleBtnText();
                setDrawerOpen(false);
              }}
            >
              {btnText}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
