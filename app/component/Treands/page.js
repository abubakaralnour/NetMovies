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
    <div style={{ padding: "2rem" }}>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">
        Trending Movies
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} style={{ width: "200px" }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title?.replace(/"/g, "&quot;") || "Movie poster"}
                width={200}
                height={300}
                className="rounded-xl"
                unoptimized
              />
              <h4>{movie.title?.replace(/"/g, "&quot;")}</h4>
            </div>
          ))
        ) : (
          <p>Error fetching movies</p>
        )}
      </div>
    </div>
  );
};

export default Treands;
