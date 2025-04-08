import React from "react";




function NavMenu({ setCategory, setSelectedGenre }) {

    const handleCategoryChange = (category) => {
        setCategory(category); // Update the category in the parent component
        setSelectedGenre(""); // Reset the selected genre
      };
    return (
        <nav className="bg-red-600 p-4 rounded-lg shadow-md text-center md:text-left">
            <ul className="flex space-x-4">


            <li>
          <button
            onClick={() => handleCategoryChange("home")}
            className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer text-base" > Home
          </button>
        </li>
                
            </ul>
        </nav>
        
    );

}
export default NavMenu;
