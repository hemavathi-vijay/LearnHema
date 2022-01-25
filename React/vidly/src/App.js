import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MoviesFrom from "./components/moviesForm";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/movies/:id" element={<MoviesFrom />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
          <Route path="/" exact element={<Navigate replace to="/movies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
