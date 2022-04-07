const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newMovies = new Schema({
  name: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Movies', newMovies)
