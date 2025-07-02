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

      <div className="flex flex-wrap justify-center gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="w-[45vw] sm:w-[30vw] md:w-[18vw] lg:w-[14vw] xl:w-[12vw] max-w-xs"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title?.replace(/"/g, "&quot;") || "Movie poster"}
                width={500}
                height={750}
                className="rounded-xl object-cover"
                unoptimized
              />
              <h4 className="mt-2 text-white text-center text-sm sm:text-base truncate">
                {movie.title?.replace(/"/g, "&quot;")}
              </h4>
            </div>
          ))
        ) : (
          <p className="text-white">Error fetching movies</p>
        )}
      </div>
    </div>
  );
};

export default Treands;
