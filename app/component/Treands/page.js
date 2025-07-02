"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Treands = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=addee6445d15b77ab3230f8fafe13edd"
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Can't fetch data", error);
      }
    }
    getMovies();
  }, []);

  return (
    <div className="p-4 bg-black min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">
        Trending Movies
      </h1>

      <SwiperSlide key={movie.id}>
  <div
    onClick={() => setSelectedMovie(movie)}
    className="cursor-pointer transition-transform duration-300 transform hover:scale-105 w-1/2 sm:w-36 md:w-40"
  >
    <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title?.replace(/"/g, "&quot;") || "Movie poster"}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
    <h4 className="text-sm mt-2 text-center">
      {movie.title?.replace(/"/g, "&quot;")}
    </h4>
  </div>
</SwiperSlide>

    </div>
  );
};

export default Treands;
