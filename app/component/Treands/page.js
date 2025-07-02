"use client";

import  { useEffect, useState } from 'react';

 const Treands = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
async function getmoveies(){
try{
  const res=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=addee6445d15b77ab3230f8fafe13edd")

const  data=await res.json()
setMovies(data.results)
}catch(error){console.error("can;t fetching data",error)}
}
    getmoveies();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
 
      <h1 className='text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10'> Trending Movies</h1>
      <div  className='flex flex-wrap gap-4 '>
        {movies? movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
             
              className='w-full rounded-xl'
            />
            <h4>{movie.title}</h4>
          </div>
        )):"Error babby"}
      </div>
    </div>
  );
};

export default Treands;
