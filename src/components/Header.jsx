const Header = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <a href="/">
            <img src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png" alt="logo" className="h-12 md:h-16" />
          </a>
          <h1 className="text-xl font-bold ml-2 md:ml-4">SocioCurry</h1>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          <a href="/" className="hover:text-gray-300 font-semibold">Home</a>
          <a href="/" className="hover:text-gray-300 font-semibold">About Us</a>
          <a href="/" className="hover:text-gray-300 font-semibold">Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;