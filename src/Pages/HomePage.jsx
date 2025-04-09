import React from "react";
import Inception from "../assets/Inception.jpeg";
import TheDarkKnight from "../assets/TheDarkKnight.jpeg";  
import Interstellar from "../assets/Interstellar.jpeg";
import TheMatrix from "../assets/TheMatrix.jpeg";    
import PulpFiction from "../assets/PulpFiction.jpeg";
import TheHangover from "../assets/TheHangover.jpeg";
import FightClub from "../assets/FightClub.jpeg";
import TheShawshankRedemption from "../assets/TheShawshankRedemption.jpeg";

//Foor testing  purposed no api presesnt
const Movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8,image:Inception },
    { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 9.0,image:TheDarkKnight },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 ,image:Interstellar },
    { id: 4, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 ,image:TheMatrix },
    { id: 5, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 ,image:PulpFiction },
    { id: 6, title: 'The Hangover', genre: 'Comedy', rating: 7.7 ,image:TheHangover },
    { id: 7, title: 'Fight Club', genre: 'Drama', rating: 8.8 ,image:FightClub },
    { id: 8, title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3,image:TheShawshankRedemption },
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
 </div>
    );
}
    export default HomePage;