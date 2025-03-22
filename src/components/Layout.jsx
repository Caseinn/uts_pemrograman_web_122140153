import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <nav className="py-6 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-10 w-auto"
              alt="Logo"
            />
            <span className="text-3xl font-bold text-white">Nel's Kitchen</span>
          </Link>

          {/* (Optional) Search Form */}
          {/* <form onSubmit={handleSearchSubmit} className="hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
            />
          </form> */}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg p-2 transition-all"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Navigation Menu */}
          <div
            className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-4 rounded transition-colors duration-200 ${
                    location.pathname === "/"
                      ? "bg-white text-blue-600 font-semibold"
                      : "text-white hover:bg-white hover:text-blue-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/recipe"
                  className={`block py-2 px-4 rounded transition-colors duration-200 ${
                    location.pathname.startsWith("/recipe")
                      ? "bg-white text-blue-600 font-semibold"
                      : "text-white hover:bg-white hover:text-blue-600"
                  }`}
                >
                  Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-inner py-4">
        <div className="container mx-auto text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline text-blue-600">
              Nel's Kitchen
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
