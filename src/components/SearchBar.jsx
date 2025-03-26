import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 
  const [showNoResults, setShowNoResults] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() !== "") {
        fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error fetching search results");
            return response.json();
          })
          .then((data) => {
            setResults(data.recipes || []);
            setShowNoResults(data.recipes.length === 0);
          })
          .catch(() => {
            setResults([]);
            setShowNoResults(true); 
          });
      } else {
        setResults([]);
        setShowNoResults(false); 
      }
    }, 300); 

    return () => clearTimeout(timer); 
  }, [query]);

  const handleResultClick = (id) => {
    navigate(`/recipes/${id}`); 
    setQuery(""); 
    setResults([]); 
  };

  return (
    <form className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
        type="text"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg 
                   bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                   focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
        value={query}
        onChange={handleChange} 
      />
      {(results.length > 0 || (query.trim() !== "" && showNoResults)) && (
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
