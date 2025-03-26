import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-md dark:bg-gray-800 absolute bottom-4 left-4 right-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <Link to="/" className="hover:underline">
            Nel's Kitchen
          </Link>
          . All Rights Reserved.
        </span>

        <div className="absolute bottom-4 right-6">
          <a
            href="https://github.com/Caseinn/uts_pemrograman_web_122140153.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <div className="absolute bottom-4 right-16">
          <a
            href="https://www.instagram.com/ditorifkii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
