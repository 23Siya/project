import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingPage() {
  // States for movies, loading, and errors
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OMDb_API_KEY; // API key from .env file

  // Fetch movies when the page loads
 
  return (
    <>
      
    </>
  );
}

export default TrendingPage;