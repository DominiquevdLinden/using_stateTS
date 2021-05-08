import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <main>
      <h1>Like counter</h1>
      <LikeCounter />
      <h1>Like button</h1>
      <LikeButton />
      <h1>Awesome animals</h1>
      <AwesomeAnimals />
      <h1>Articles</h1>
      <ArticleList />
    </main>
  );
}

export default App;
