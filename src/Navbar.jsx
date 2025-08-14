import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountDetails from './AccountDetails';

export default function Navbar({ user, onSignOut, onSearch, isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (searchTerm) {
      onSearch(searchTerm);
      navigate('/products');
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <header className={`sticky top-0 w-full z-40 glass backdrop-blur-xl border-b ${isDarkMode ? 'border-gray-700/30 text-white' : 'border-gray-200/30 text-gray-700'}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 gap-4">
        {/* Logo/Site Name (left) */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1">
                <img 
                  src="/src/assets/logo.png" 
                  alt="EarthMart Logo" 
                  className="h-10 w-auto object-contain rounded-full"
                />
                <span className="text-xl font-bold font-mono hidden sm:block">
                  EarthMart
                </span>
          </Link>
        </div>

            {/* Navigation Links (center) - Hidden on mobile, shown in menu */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium" role="navigation" aria-label="Main navigation">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-green-900/20' : 'text-gray-700 hover:text-green-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`px-3 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-green-900/20' : 'text-gray-700 hover:text-green-600'}`}
              >
                Categories
              </Link>
              <Link 
                to="/products" 
                className={`px-3 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-green-900/20' : 'text-gray-700 hover:text-green-600'}`}
              >
                Products
              </Link>
              <Link 
                to="/cart" 
                className={`px-3 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-green-900/20' : 'text-gray-700 hover:text-green-600'}`}
              >
                Cart
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-green-900/20' : 'text-gray-700 hover:text-green-600'}`}
              >
                About
              </Link>
          {user && user.email === 'admin@earthmart.com' && (
                <Link 
                  to="/admin" 
                  className={`px-3 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-green-900/20' : 'text-gray-700 hover:text-green-600'}`}
                >
                  Admin
                </Link>
          )}
        </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="hidden sm:flex items-center">
                <div className="relative">
                  <input 
                    type="text" 
                    name="search"
                    placeholder="Search products..." 
                    className={`w-48 lg:w-64 rounded-l-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                    aria-label="Search products"
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Search"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Account Details */}
              <AccountDetails user={user} onSignOut={() => { onSignOut(); navigate('/login'); }} isDarkMode={isDarkMode} />

              {/* Mobile menu button - shown on smaller screens */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
