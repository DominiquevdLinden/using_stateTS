import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";

function App() {
  return (
    <main>
      <h1>Like counter</h1>
      <LikeCounter />
      <h1>Like button</h1>
      <LikeButton />
      <h1>Awesome animals</h1>
      <AwesomeAnimals />
    </main>
  );
}

export default App;
