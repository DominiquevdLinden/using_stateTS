import Timeout from "await-timeout";
import React, { useEffect, useState } from "react";
import ArticleCard, { Article } from "./ArticleCard";
import axios from "axios";

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      await Timeout.set(2000);

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res.data);
      setArticles(res.data);
    }
    doSomeDataFetching();
  }, []);

  function ClearArticles() {
    setArticles([]);
  }

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles ? (
        articles.map((art, index) => {
          return <ArticleCard article={art} key={index} />;
        })
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={ClearArticles}>Clear notifications</button>
    </div>
  );
}
