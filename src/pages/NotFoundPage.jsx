import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-700 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
        404
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
