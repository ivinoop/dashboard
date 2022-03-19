import React from "react";
import "../stylesheets/style.css";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter";
import DisplayCards from "./DisplayCards";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Sort />
        <Filter />

        <DisplayCards />
      </Router>
    </>
  );
}
export default App;