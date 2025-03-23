import React from "react";
import { skeletonContainer, skeletonImage, skeletonContent } from "../styles/tailwindClasses";

const SkeletonCard = () => (
  <div className={skeletonContainer}>
    <div className={`${skeletonImage} bg-gray-300 dark:bg-gray-800`} />
    <div className={skeletonContent}>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="flex justify-between mt-2">
        <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="w-1/3 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
