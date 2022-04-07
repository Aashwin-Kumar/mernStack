import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieInfo = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://mern-stack-rho.vercel.app/movies/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.movie));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`/movies/${id}`, {
        name: String(inputs.name),
        director: String(inputs.director),
        actor: String(inputs.actor),
        poster: String(inputs.poster),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("https://mern-stack-rho.vercel.app/movies"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={500}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
              id="filled-search"
              label="Film Name"
              type="search"
            />

            <TextField
              value={inputs.director}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="director"
              id="filled-search"
              label="Enter Director"
              type="search"
            />

            <TextField
              value={inputs.actor}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="actor"
              id="filled-search"
              label="Enter Actor"
              type="search"
            />

            <TextField
              value={inputs.poster}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="poster"
              id="filled-search"
              label="Poster URL"
              type="search"
            />

            <button
              variant="contained"
              type="submit"
              className="text-2xl font-thin border-solid border-2 h-14 rounded-lg	 m-10 hover:bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
            >
              Update Movies
            </button>
          </Box>
        </form>
      )}
    </>
  );
};

export default MovieInfo;
