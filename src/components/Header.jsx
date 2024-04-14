
const Header = () => {
    return (
      <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white p-4">
        <div className="logoContainer">
          <a href="/">
            <img src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png" alt="logo" className="h-16" />
          </a>
        </div>
  
        <div className="divContainer mt-4 lg:mt-0">
          <ul className="flex flex-wrap lg:flex-row items-center space-x-6 lg:space-x-8">
            <li><a href="/" className="hover:text-gray-300 font-semibold">HOME</a></li>
            <li><a href="/" className="hover:text-gray-300 font-semibold">About Us</a></li>
            <li><a href="/" className="hover:text-gray-300 font-semibold">Contact Us</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;