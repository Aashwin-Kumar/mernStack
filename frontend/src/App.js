import React from "react";
import Header from "./components/Book/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Book/Home";
import AddMovie from "./components/Book/AddMovie";
import { About } from "./components/Book/About";
import Movies from "./components/Book/Movies";
import MovieInfo from "./components/Book/MovieInfo";
const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMovie />} exact />
          <Route path="/movies" element={<Movies />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/movies/:id" element={<MovieInfo />} exact />
        </Routes>
      </main>
    </>
  );
};

export default App;
