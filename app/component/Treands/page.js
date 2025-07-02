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

      <div className="flex flex-wrap ">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 flex flex-col items-center"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title?.replace(/"/g, "&quot;") || "Movie poster"}
              width={160} // Good size for mobile
              height={240} // Maintain 2:3 aspect ratio
              className="rounded-md object-cover"
              unoptimized
            />
            <h4 className="text-sm mt-2 text-center text-white">
              {movie.title?.replace(/"/g, "&quot;")}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treands;
