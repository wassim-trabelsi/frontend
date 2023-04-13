import React from "react";
import { css } from '@emotion/css'
import MovieList from "../movies/MovieList";

const MainPage = () => {
  return (
    <div className={css`
        width: 80%;
        margin: 0 auto;
        height: 40vh;
        position: center;
      `}>
      <h1>Popular Movies</h1>
      <MovieList />

      <h1>My Watch List</h1>
      <MovieList />
    </div>
  );
};

export default MainPage;