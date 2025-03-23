import React from "react";
import {
  paginationButton,
  paginationButtonActive,
  paginationButtonInactive,
} from "../styles/tailwindClasses";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  const maxVisibleButtons = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = startPage + maxVisibleButtons - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisibleButtons + 1);
  }
  const pages = [];
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  return (
    <nav aria-label="Page navigation" className="mt-8">
      <ul className="flex flex-nowrap items-center justify-center gap-2">
        <li>
          <button
            className={`${paginationButton} rounded-l-lg ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            aria-label="Previous Page"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l-6 6 6 6" />
            </svg>
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${paginationButton} border ${
                currentPage === page ? paginationButtonActive : paginationButtonInactive
              }`}
              onClick={() => setCurrentPage(page)}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${paginationButton} rounded-r-lg ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            aria-label="Next Page"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4l6 6-6 6" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
