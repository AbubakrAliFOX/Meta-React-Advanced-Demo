import { useState } from "react";
import "./App.css";
import DessertsList from "./components/DessertsList";
import { Route, Routes, Link } from "react-router-dom";


const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/desserts" className="nav-item">
          Cards
        </Link>
      </nav>

      <Routes>
        <Route
          path="/desserts"
          element={
            <DessertsList desserts={desserts} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
