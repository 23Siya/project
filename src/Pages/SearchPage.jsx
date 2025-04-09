import React, { useState } from 'react';
import axios from 'axios';

// Function to fetch movies from the OMDb API
const MovieCall = async (query) => {
  try {
    // Make an API call to fetch movies based on the search query
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_OMDb_API_KEY}`
    );
    console.log(response.data); // Log the API response for debugging
    return response.data.Search || []; // Return the search results or an empty array if none found
  } catch (error) {
    console.error('Error fetching movie data:', error); // Log any errors that occur
    return []; // Return an empty array in case of an error
  }
};

function SearchPage() {
  // State to store the user's search query
  const [searchQuery, setSearchQuery] = useState('');
  // State to store the search results fetched from the API
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search input and fetch results
  const handleSearch = async (e) => {
    const query = e.target.value; // Get the value from the input field
    setSearchQuery(query); // Update the search query state

    // If the query is empty, clear the search results
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Fetch movies from the API and update the search results state
    const results = await MovieCall(query);
    setSearchResults(results);
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Search Movies</h2>

      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery} // Bind the input value to the searchQuery state
        onChange={handleSearch} // Call handleSearch on input change
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-4">You are searching for: {searchQuery}</p>

      {/* Search Results Section */}
      <div className="mt-6">
        {searchResults.length > 0 ? (
          // Display search results in a responsive grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((movie) => (
              <div key={movie.imdbID} className="bg-white p-6 rounded-lg shadow-md">
                {/* Movie Poster */}
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} // Use a placeholder if no poster is available
                  alt={movie.Title} // Set the alt text to the movie title
                  className="w-full h-40 object-cover rounded mb-4"
                />
                {/* Movie Title */}
                <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
                {/* Movie Year */}
                <p className="text-gray-600 mb-2">Year: {movie.Year}</p>
              </div>
            ))}
          </div>
        ) : (
          // Display a message if no results are found
          <p className="text-red-600">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;