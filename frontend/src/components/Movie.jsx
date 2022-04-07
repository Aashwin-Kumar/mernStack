import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import "./movie.css";

export const Movie = (props) => {
  const history = useNavigate();
  const { _id, name, director, actor, poster } = props.movie;
  const deleteHandler = async () => {
    await axios
      .delete(`https://mern-stack-rho.vercel.app/${_id}`)
      .then((res) => res.data)
      .then(()=> history('/'))
      .then(() => history(-1));
  };

  return (
    <>
      <div className="card ">
        <img
          src={poster}
          style={{ width: "160px", marginLeft: "2rem" }}
          alt={name}
        />
        <h1 className="text-xl m-1 text-center">{name}</h1>
        <article className="text-center m-1 font-semibold">
          By {director}
        </article>
        <h3 className="text-center">{actor}</h3>
        <Button LinkComponent={Link} to={`/movies/${_id}`} sx={{ mt: "1rem" }}>
          Update Movie
        </Button>
        <Button onClick={deleteHandler}>Delete Movie</Button>
      </div>
    </>
  );
};
