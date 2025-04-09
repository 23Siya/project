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

// Mock data for genres and movies
const Genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Sci-Fi' },
  { id: 5, name: 'Thriller' },
];

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

function GenresPage({ setSelectedGenre }) {
  // State to manage the selected genre
  const [selectedGenre, setSelectedGenreState] = useState('');

  // Handle genre selection
  const handleGenreClick = (genre) => {
    setSelectedGenreState(genre);
// Update the selected genre in the parent component
    setSelectedGenre(genre); 
  };

  // Filter movies by selected genre
  const filteredMovies = selectedGenre
    ? Movies.filter((movie) => movie.genre === selectedGenre)
    : [];

  return (
    <div className="p-6">s
      {/* Genres Page Title */}
      <h2 className="text-2xl font-bold mb-4">Browse by Genre</h2>

      {/* Genre List */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.name)}
            className={`px-4 py-2 rounded-lg ${
              selectedGenre === genre.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {/*Diplaying movies in the selected genre */}
      {selectedGenre && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Movies in {selectedGenre}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
                <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
                <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
                <p className="text-gray-600">Rating: {movie.rating}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GenresPage;