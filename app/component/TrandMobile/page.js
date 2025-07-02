"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function TrandMobile() {
  const [Trend, setTrend] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    async function getTrend() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=addee6445d15b77ab3230f8fafe13edd"
        );
        const data = await res.json();
        setTrend(data.results);
      } catch (error) {
        console.error("cant fetch data");
      }
    }
    getTrend();
  }, []);

  // Handle click outside to close modal
  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedMovie(null);
      }
    };
    if (selectedMovie) {
      document.addEventListener("mousedown", handler);
    }
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [selectedMovie]);

  return (
    <div className="w-full px-4 py-8 text-white">
      <h2 className="text-2xl font-bold mb-4 text-amber-400">Trending Now</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
      >
        {Trend.slice(15, 21).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              onClick={() => setSelectedMovie(movie)}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-105"
              style={{ width: "140px" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md w-full"
              />
              <h4 className="text-sm mt-2 text-center">{movie.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
{selectedMovie && (
  <>
    {/* Overlay background */}
     <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm z-40" />
 

    {/* Centered Modal Container */}
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="text-amber-50  bg-radial-[at_50%_50%] from-red-950 to-zinc-900 to-75%  rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden"
      >
        {/* Image at the top */}
              <button
              onClick={() => setSelectedMovie(null)}
              className="text-gray-500 hover:text-red-500 text-2xl font-bold absolute right-5 "
            >
              ×
            </button>
        <img
          src={`https://image.tmdb.org/t/p/w780${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="w-full object-cover h-64 sm:h-72 md:h-80"
        />

        {/* Content below image */}
        <div className="p-4 sm:p-6 text-amber-50">
          <div className="flex justify-between items-center mb-4">
           

            <h3 className="text-xl sm:text-2xl font-bold">{selectedMovie.title}</h3>
      
          </div>
          <p className=" text-sm sm:text-base  mb-4">
            {selectedMovie.overview}
          </p>
         <Link href="/component/payment"> <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
             Get Started 
          </button></Link>
        </div>
      </div>
    </div>
  </>
)}

    </div>
  );
}
