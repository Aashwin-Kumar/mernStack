const express = require("express");
const router = express.Router();
// const Movies = require("../model/Movies");
const movieController = require("../controller/movie-controller");

router.get("/", movieController.getAllMovies);
router.post("/", movieController.addMovies);
router.get("/:id", movieController.getId);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);



module.exports = router;
