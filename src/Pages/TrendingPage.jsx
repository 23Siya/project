import React from 'react';

// Mock data for trending movies
const mockTrendingMovies = [
  { id: 1, title: 'Spider-Man: No Way Home', genre: 'Action', rating: 8.4 },
  { id: 2, title: 'Dune', genre: 'Sci-Fi', rating: 8.1 },
  { id: 3, title: 'No Time to Die', genre: 'Action', rating: 7.6 },
  { id: 4, title: 'The Batman', genre: 'Action', rating: 8.2 },
  { id: 5, title: 'Shang-Chi', genre: 'Action', rating: 7.9 },
];

function TrendingPage() {
  return (
    <div className="p-6">
      {/* Trending Page Title */}
      <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
      <p className="text-gray-600 mb-6">Check out what's trending right now.</p>

      {/* Trending Movies Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTrendingMovies.map((movie) => (
          <div key={movie.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
            <p className="text-gray-600">Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPage;