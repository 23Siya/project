import React from "react";

function NavMenu() {
    return (
        <nav className="bg-red-600 p-4 rounded-lg shadow-md text-center md:text-left">
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Movies</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">TV Shows</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
        
    );

}
export default NavMenu;
