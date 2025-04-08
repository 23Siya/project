import React from "react";




function NavMenu({ setCategory, setSelectedGenre }) {

    const handleCategoryChange = (category) => {
        setCategory(category); // Update the category in the parent component
        setSelectedGenre(""); // Reset the selected genre
      };
    return (
        <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 list-none m-0 p-0">
        {/* Home Button */}
        <li>
          <button
            onClick={() => handleCategoryChange("home")}
            className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer text-base"
          >
            Home
          </button>
        </li>

        {/* Trending Button */}
        <li>
          <button
            onClick={() => handleCategoryChange("trending")}
            className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer text-base"
          >
            Trending
          </button>
        </li>

        {/* Genres Button */}
        <li>
          <button
            onClick={() => handleCategoryChange("genres")}
            className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer text-base"
          >
            Genres
          </button>
        </li>

        {/* Search Button */}
        <li>
          <button
            onClick={() => handleCategoryChange("search")}
            className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer text-base"
          >
            Search
          </button>
        </li>
      </ul>
    </nav>
        
    );

}
export default NavMenu;
