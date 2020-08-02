import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
  //state a short term memory every time the page refresh it will reload
  // empty movie array
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on the specific condition
  // when the page is loading it will do its work
  useEffect(() => {
    async function fetchData() {
      // await will wait untill the request is done
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //console.log(request)
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if [], run once when the row loads and dont run again
  // if fetchUrl changes the useEffect will refresh
  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> poster */}
      <div className="row_posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
