const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/movie-routes");
const cors = require("cors");
const { MONGOURL } = require("./config/keys");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/movies", router);

mongoose.connect(MONGOURL, {});

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
