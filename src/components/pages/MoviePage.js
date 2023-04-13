import React from "react";
import { css } from '@emotion/css'
import MovieList from "../movies/MovieList";

const MainPage = () => {
  return (
    <div className={css`{
      position: relative,
      flex-grow: 1,
      padding: 20px,
    }`}>
      <MovieList />
    </div>
  );
};

export default MainPage;
