import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GenresPage() {
  // State to store the selected genre
  const [selectedGenre, setSelectedGenre] = useState('Action');
  // State to store the fetched movies
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  const API_KEY = import.meta.env.VITE_OMDb_API_KEY; // Use your API key from the .env file

  // Fetch movies when the selected genre changes
 

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Browse by Genre</h2>

      {/* Genre Menu */}
      <div className="flex space-x-4 mb-6">
        {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'].map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)} // Update selected genre
            className={`px-4 py-2 rounded-lg ${
              selectedGenre === genre
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && <p>Loading movies...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Movies Grid */}
      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="bg-white p-6 rounded-lg shadow-md">
              {/* Movie Poster */}
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              {/* Movie Title */}
              <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
              {/* Movie Year */}
              <p className="text-gray-600 mb-2">Year: {movie.Year}</p>
            </div>
          ))}
        </div>
      )}

      {/* No Movies Found */}
      {!loading && !error && movies.length === 0 && (
        <p className="text-gray-600">No movies found for the selected genre.</p>
      )}
    </div>
  );
}

export default GenresPage;