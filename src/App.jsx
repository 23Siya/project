import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard';
import SearchPage from './Pages/SearchPage';
import GenresPage from './Pages/GenresPage'; // Import the GenresPage
import HomePage from './Pages/HomePage'; // Import the HomePage
import TrendingPage from './Pages/TrendingPage'; // Import the TrendingPage

function App() {

   // State to manage the current category (home, trending, genres, search)

   const [category, setCategory] = useState("home");
   const [selectedGenre, setSelectedGenre] = useState("");
   const [selectedMovie, setSelectedMovie] = useState(null);

  return (
   
   <div className="w-full h-full flex flex-col bg-gray-100 overflow-hidden">
        
   <Header setCategory={setCategory} setSelectedGenre={setSelectedGenre} />

     {/* Main Content */}
     <main className="w-full h-full flex-grow container mx-auto p-5">
 {/* Render MovieDetails if a movie is selected */}
 {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <>
            {/* Render HomePage if category is "home" */}

            {(()=> {
              if (category === "home") {
                return <HomePage />;
              } else if (category === "trending") {
                return <TrendingPage />;
              }
              else if (category === "genres") {
                return <GenresPage setSelectedGenre={setSelectedGenre} />;
              }
              else if (category === "search") {
                return <SearchPage />;
              }
              else {
                return (
                  <>
                    {/* Dashboard (default view) */}
                    <Dashboard />

                    {/* Display current category and selected genre */}
                    <div className="mt-6">
                      <p className="text-lg">
                        Current Category: <span className="font-semibold">{category}</span>
                      </p>
                      <p className="text-lg">
                        Selected Genre: <span className="font-semibold">{selectedGenre || "None"}</span>
                      </p>
                    </div>
                  </>
                );
              }
            })()}           
            
          </>
        )}

    </main>
    <Footer/>
   </div>
    
  )
}

export default App
