import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  // State to store the fetched movies
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  const API_KEY = import.meta.env.VITE_OMDb_API_KEY; // Use your API key from the .env file

  // Fetch movies when the component loads
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(
          `https://www.omdbapi.com/?s=Avengers&apikey=${API_KEY}` // Example query for "Avengers"
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search); // Update movies state with fetched data
        } else {
          setError(response.data.Error); // Handle API errors
        }
      } catch (err) {
        setError('Failed to fetch movies. Please try again.'); // Handle network errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Featured Movies</h2>

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
        <p className="text-gray-600">No movies found.</p>
      )}
    </div>
  );
}

export default HomePage;