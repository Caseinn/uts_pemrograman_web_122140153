import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full sm:w-96 h-[369px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>
      
      {/* Content Placeholder */}
      <div className="p-5 flex flex-col flex-grow space-y-3">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Cuisine & Difficulty Placeholder */}
        <div className="flex justify-between">
          <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-1/3 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        {/* Optional Short Description Placeholder */}
        <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        
        {/* Spacer */}
        <div className="flex-grow"></div>
        
        {/* Button Placeholder */}
        <div className="w-24 h-8 bg-gray-300 dark:bg-gray-700 rounded self-end"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
