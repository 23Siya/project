import React, { useState } from 'react';

// Mock data for search results
const mockMovies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
  { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 },
  { id: 4, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
  { id: 5, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
];

function SearchPage() {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to manage the search results
  const [searchResults, setSearchResults] = useState([]);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter movies based on the search query
    const results = mockMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="p-6">
      {/* Search Page Title */}
      <h2 className="text-2xl font-bold mb-4">Search Movies</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Results */}
      <div className="mt-6">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((movie) => (
              <div key={movie.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
                <p className="text-gray-600">Rating: {movie.rating}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;