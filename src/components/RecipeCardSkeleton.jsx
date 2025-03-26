import React from 'react';

const RecipeCardSkeleton = () => {
  return (
    <div className="w-full sm:w-[19.5rem] m-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer transform transition-all duration-200 hover:shadow-lg hover:scale-105">
      <div className="w-full h-80 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse rounded-t-lg">
        <svg
          className="w-10 h-10 text-gray-300 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="p-5 space-y-3">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;
