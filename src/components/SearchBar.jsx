// src/components/SearchBar.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() !== "") {
        fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error fetching search results");
            return response.json();
          })
          .then((data) => setResults(data.recipes || []))
          .catch(() => setResults([]));
      } else setResults([]);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (query.trim() !== "" && results.length === 0) {
      const timer = setTimeout(() => setShowNoResults(true), 650);
      return () => clearTimeout(timer);
    } else setShowNoResults(false);
  }, [query, results]);

  const handleChange = (e) => setQuery(e.target.value);
  const handleResultClick = (id) => {
    navigate(`/recipes/${id}`);
    setQuery("");
    setResults([]);
  };

  return (
    <form className="max-w-md mx-auto relative" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
          placeholder="Search Recipes..."
          value={query}
          onChange={handleChange}
          required
        />
      </div>
      {(results.length > 0 ||
        (query.trim() !== "" && results.length === 0 && showNoResults)) && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-600 dark:text-white">
          {results.length > 0 ? (
            results.map((recipe) => (
              <li
                key={recipe.id}
                className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => handleResultClick(recipe.id)}
              >
                {recipe.name}
              </li>
            ))
          ) : (
            <li className="p-4 text-center">There is no recipe</li>
          )}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
