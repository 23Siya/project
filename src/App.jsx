import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

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

     {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <>
            {/* Render HomePage if category is "home" */}
            {category === "home" ? ( <HomePage />) 
            : category === "trending" ? (
              <TrendingPage />
            ) : category === "genres" ? (
              <GenresPage setSelectedGenre={setSelectedGenre} />
            ) : category === "search" ? (
              <SearchPage /> ) : (
              <>
              
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
