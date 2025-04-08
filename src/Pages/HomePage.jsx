import React from "react";
//Foor testing  purposed no api presesnt
const Movies = [{id:1,title :'The dark night', gendre :'Sci-fi', rating: 5.2}];

function HomePage() {
    return (
     <div className="p-6">
            <h2 className ="text-2xl font-bo;d mb-4">Welcome To My Movie App</h2>
            <p className="test-gray-600 mb-6"> Discover the best movies and shows. </p>
            <div>
        <h3 className="text-xl font-semibold mb-4">Popular Movies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Movies.map((movie) => (
            <div key={movie.id} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
              <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
              <p className="text-gray-600">Rating: {movie.rating}</p>
            </div>
          ))}
        </div>
       </div>
 </div>
    );
}
    export default HomePage;