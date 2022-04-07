import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "./Movie";
const URL = "https://mern-stack-rho.vercel.app/movies";

const fetchDatas = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Movies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchDatas().then((data) => setMovies(data.movies));
  }, []);
  

  return (
    <>
      <div>
       <ul>
          {movies &&
            movies.map((movie, i) => (
              <li key={i}>
                <Movie movie={movie} />
              </li>
            ))}
            </ul>
      </div>
    </>
  );
};

export default Movies;
