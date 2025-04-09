import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingPage() {
  // States for movies, loading, and errors
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OMDb_API_KEY; // API key from .env file

  // Fetch movies when the page loads
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=Spiderman&apikey=${API_KEY}`
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search); // Save movies to state
        } else {
          setError(response.data.Error); // Save error message
        }
      } catch (err) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>

      {/* Show loading message */}
      {loading && <p>Loading...</p>}

      {/* Show error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Show movies if available */}
      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
              <p className="text-gray-600 mb-2">Year: {movie.Year}</p>
            </div>
          ))}
        </div>
      )}

      {/* Show message if no movies found */}
      {!loading && !error && movies.length === 0 && (
        <p>No movies found. Try searching for something else.</p>
      )}
    </div>
  );
}

export default TrendingPage;