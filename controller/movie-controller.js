const { findByIdAndUpdate } = require("../model/Movies");
const Movies = require("../model/Movies");

const getAllMovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movies.find();
  } catch (error) {
    console.log(error);
  }
  if (!movies) {
    return res.status(404).json({ message: "sorry content not found" });
  }
  return res.status(200).json({ movies });
};
const getId = async (req, res, next) => {
  let id = req.params.id;
  let movie;
  try {
    movie = await Movies.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!movie) {
    return res.status(404).json({ message: "movie not found" });
  }
  return res.status(200).json({ movie });
};
const addMovies = async (req, res, next) => {
  const { name, director, actor, poster } = req.body;
  let movie;
  try {
    movie = new Movies({
      name,
      director,
      actor,
      poster,
    });
    await movie.save();
  } catch (error) {
    console.log(error);
  }
  if (!movie) {
    return res.status(500).json({ message: "unable to add!" });
  }
  return res.status(201).json({ movie });
};
const updateMovie = async (req, res, next) => {
  const id = req.params.id;
  const { name, director, actor, poster } = req.body;
  let movie;
  try {
    movie = await Movies.findByIdAndUpdate(id, {
      name,
      director,
      actor,
      poster,
    });
    movie = await movie.save();
  } catch (error) {
    console.log(error);
  }
  if (!movie) {
    return res.status(404).json({ message: "unable to update!" });
  }
  return res.status(201).json({ movie });
};
const deleteMovie = async (req, res, next) => {
  const id = req.params.id;

  let movie;
  try {
    movie = await Movies.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!movie) {
    return res.status(404).json({ message: "unable to delete!" });
  }
  return res.status(201).json({ message: "item deleted successfully!" });
};

exports.getAllMovies = getAllMovies;
exports.addMovies = addMovies;
exports.getId = getId;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;
