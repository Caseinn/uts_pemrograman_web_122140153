import React from 'react';

const RecipeDetailSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 p-6 mt-6">
      <div className="w-full h-64 bg-gray-300 animate-pulse rounded"></div>

      <div className="mt-4 bg-gray-300 w-3/4 h-8 rounded animate-pulse"></div>

      <div className="mt-4 space-y-2">
        <div className="w-1/2 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/2 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/4 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/4 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/3 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/3 h-6 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white bg-gray-300 w-1/3 h-6 rounded animate-pulse"></h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white bg-gray-300 w-1/3 h-6 rounded animate-pulse"></h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="w-24 h-6 bg-gray-300 rounded-full animate-pulse"></span>
          <span className="w-24 h-6 bg-gray-300 rounded-full animate-pulse"></span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white bg-gray-300 w-1/3 h-6 rounded animate-pulse"></h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="w-24 h-6 bg-gray-300 rounded-full animate-pulse"></span>
          <span className="w-24 h-6 bg-gray-300 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailSkeleton;
