import React from "react";
import { css } from '@emotion/css'
import MovieList from "../movies/MovieList";
import { Switch } from '@material-ui/core';
import { useState } from "react";

const MainPage = () => {
  const [isFrenchOnly, setIsFrenchOnly] = useState(false);

  const toggleFrench = () => {
    setIsFrenchOnly(!isFrenchOnly);
  };

  return (
    <div className={css`
        width: 80%;
        margin: 0 auto;
        height: 70vh;
        position: center;
      `}>
      <div className={css`
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
      `}>
        <span className={css`
          margin-right: 0.5rem;
          font-weight: bold;
        `}>
          Show French only
        </span>
        <Switch
          checked={isFrenchOnly}
          onChange={toggleFrench}
          color="primary"
          inputProps={{ 'aria-label': 'toggle french' }}
        />
      </div>
      <h1>Popular Movies</h1>
      <MovieList frenchOnly={isFrenchOnly}/>
    </div>
  );
};

export default MainPage;