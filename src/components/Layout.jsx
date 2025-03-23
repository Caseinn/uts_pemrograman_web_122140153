// src/components/Layout.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  navContainer,
  navInner,
  navLogoText,
  navButton,
  navLinkBase,
  navLinkActive,
  navLinkInactive
} from "../styles/tailwindClasses";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className={navContainer}>
        <div className={navInner}>
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-10 w-auto"
              alt="Logo"
            />
            <span className={navLogoText}>Nel's Kitchen</span>
          </Link>
          <div className="hidden md:block flex-grow mx-4">
            <SearchBar />
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className={navButton}
            aria-label="Toggle Menu"
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
          <div className={`w-full md:flex md:w-auto ${menuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 font-medium dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`${navLinkBase} ${
                    location.pathname === "/" ? navLinkActive : navLinkInactive
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/recipe"
                  className={`${navLinkBase} ${
                    location.pathname.startsWith("/recipe")
                      ? navLinkActive : navLinkInactive
                  }`}
                >
                  Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`md:hidden px-6 mt-4 ${menuOpen ? "block" : "hidden"}`}>
          <SearchBar />
        </div>
      </nav>
      <main className="flex-grow dark:bg-gray-700">{children}</main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 shadow-inner dark:border-gray-700 py-4">
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
