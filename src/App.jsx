import { useState } from "react";
import "./App.css";
import DessertsList from "./components/DessertsList";
import { Route, Routes, Link } from "react-router-dom";
import Form from "./components/Form";
import MainApp from "./components/Context/App";
import UseStateRevision from "./components/UseStateRevision/index.jsx";
import Goals from "./components/Goals";
import GiftCard from "./components/GiftCard";
import Loading from "./components/UseEffect";
import Days from "./components/Days";
import ContextTut from "./components/ContextTut";

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
        <Link to="/form" className="nav-item">
          Form
        </Link>
        <Link to="/context" className="nav-item">
          Context
        </Link>
        <Link to="/useStateRevision" className="nav-item">
          UseStateRevision
        </Link>
        <Link to="/goals" className="nav-item">
          Goals
        </Link>
        <Link to="/giftCard" className="nav-item">
          GiftCard
        </Link>
        <Link to="/loading" className="nav-item">
          Loading
        </Link>
        <Link to="/days" className="nav-item">
          Days
        </Link>
        <Link to="/contextTut" className="nav-item">
          ContextTut
        </Link>
      </nav>

      <Routes>
        <Route
          path="/desserts"
          element={<DessertsList desserts={desserts} />}
        />
        <Route path="/form" element={<Form />} />
        <Route path="/context" element={<MainApp />} />
        <Route path="/useStateRevision" element={<UseStateRevision />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/giftCard" element={<GiftCard />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/days" element={<Days />} />
        <Route path="/contextTut" element={<ContextTut />} />
      </Routes>
    </>
  );
}

export default App;
