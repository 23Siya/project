import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <>
   <div className="min-h-screen flex flex-col bg-gray-100 ">
   <Header setCategory={setCategory} setSelectedGenre={setSelectedGenre} />

     {/* Main Content */}
     <main className="container mx-auto p-5 flex-grow">
 {/* Render MovieDetails if a movie is selected */}
 {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <>
            {/* Render HomePage if category is "home" */}
            {category === "home" ? (
              <HomePage />
            ) : category === "trending" ? (
              <TrendingPage />
            ) : category === "genres" ? (
              <GenresPage setSelectedGenre={setSelectedGenre} />
            ) : category === "search" ? (
              <SearchPage />
            ) : (
              <>
                {/* Dashboard (default view) */}
                <Dashboard />

                {/*  Display current category and selected genre */}
                <div className="mt-6">
                  <p className="text-lg">
                    Current Category: <span className="font-semibold">{category}</span>
                  </p>
                  <p className="text-lg">
                    Selected Genre: <span className="font-semibold">{selectedGenre || "None"}</span>
                  </p>
                </div>
              </>
            )}
          </>
        )}

    </main>
    <Footer/>
   </div>
    </>
  )
}

export default App
