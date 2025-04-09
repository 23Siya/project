import React, { useState } from 'react';
import Inception from "../assets/Inception.jpeg";
import TheDarkKnight from "../assets/TheDarkKnight.jpeg";  
import Interstellar from "../assets/Interstellar.jpeg";
import TheMatrix from "../assets/TheMatrix.jpeg";    
import PulpFiction from "../assets/PulpFiction.jpeg";
import TheHangover from "../assets/TheHangover.jpeg";
import FightClub from "../assets/FightClub.jpeg";
import TheShawshankRedemption from "../assets/TheShawshankRedemption.jpeg";
import spiderman from '../assets/spiderman.jpeg';
import dune from '../assets/dune.jpeg';
import TheBatman from '../assets/TheBatman.jpeg';
import ShangChi from '../assets/ShangChi.jpeg';
import nttd from '../assets/nttd.jpeg';

// Mock data for search results
const Movies = [
 
   { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8,image:Inception },
        { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 9.0,image:TheDarkKnight },
        { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 ,image:Interstellar },
        { id: 4, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 ,image:TheMatrix },
        { id: 5, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 ,image:PulpFiction },
        { id: 6, title: 'The Hangover', genre: 'Comedy', rating: 7.7 ,image:TheHangover },
        { id: 7, title: 'Fight Club', genre: 'Drama', rating: 8.8 ,image:FightClub },
        { id: 8, title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3,image:TheShawshankRedemption },
        { id: 9, title: 'Spider-Man: No Way Home', genre: 'Action', rating: 8.4,image:spiderman,},
        { id: 10, title: 'Dune', genre: 'Sci-Fi', rating: 8.1,image :dune },
        { id: 11, title: 'No Time to Die', genre: 'Action', rating: 7.6 ,image : nttd },
        { id: 12, title: 'The Batman', genre: 'Action', rating: 8.2,image :TheBatman },
        { id: 13, title: 'Shang-Chi', genre: 'Action', rating: 7.9 ,image : ShangChi},
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
    const results = Movies.filter((movie) =>
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
                 <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
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