import React from "react";
import { css } from '@emotion/css'
import MoviePage from "./components/pages/MoviePage";
import TopMenu from "./components/TopMenu";

const App = () => {
  return (
    <div className={css`
      min-height: 100vh;
      background-color: #F2F2F2;
    `}>
      <TopMenu />
      <main className={css`
        min-height: calc(100vh - 150px);
        display: flex;
      `}>
          <MoviePage />
      </main>
    </div>
  );
};

export default App;
