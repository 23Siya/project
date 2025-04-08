import React from "react";
//Foor testing  purposed no api presesnt
const Movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
    { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 },
    { id: 4, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
    { id: 5, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
    { id: 6, title: 'The Hangover', genre: 'Comedy', rating: 7.7 },
    { id: 7, title: 'Fight Club', genre: 'Drama', rating: 8.8 },
    { id: 8, title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
];

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