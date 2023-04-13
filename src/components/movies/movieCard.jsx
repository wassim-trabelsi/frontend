import React from "react";
import { css } from '@emotion/css';

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path } = movie;
  return (
    <div className={css`
      display: flex;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    `}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
        className={css`
          width: 120px;
          height: 180px;
          object-fit: cover;
        `}
      />
      <div className={css`
        padding: 10px;
      `}>
        <h2 className={css`
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
        `}>{title}</h2>
        <p className={css`
          font-size: 0.8rem;
          line-height: 1.2;
        `}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
