import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import AddMovie from "./components/AddMovie";
// import { About } from "./components/About";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
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
          {/* <Route path="/about" element={<About />} exact /> */}
          <Route path="/movies/:id" element={<MovieInfo />} exact />
        </Routes>
      </main>
    </>
  );
};

export default App;
