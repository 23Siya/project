import React from "react";
import NavMenu from "./NavMenu";

function Header() {
    return(
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Siya's Movie App</h1>
                <NavMenu/>
            </div>
        </header>
    );
}
export default Header;