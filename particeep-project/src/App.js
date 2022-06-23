import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Pagination from './components/Pagination';

import { movies$ } from '../src/Utils/movies';


function App() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    movies$
      .then((data) => {
        setMovies(data);
        setCategories([
          ...new Set(data.map((entry) => entry.category)).values(),
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    console.log(`${id}`);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
          {movies.map((movie) => {
              return (
                  <Card
                    onDelete={() => deleteHandler(movie.id)}
                    key={movie.id}
                    {...movie}
                    like={movie.likes}
                    dislike={movie.dislikes}
                  />
              );
            })}
      </div>
      <Pagination />
      <Footer />
      </>

  );
}

export default App;