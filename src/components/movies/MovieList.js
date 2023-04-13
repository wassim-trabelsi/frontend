import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import MovieCard from "./movieCard";
import { css } from '@emotion/css'

const MovieList = ({ movieStore }) => {

  useEffect(() => {
    movieStore.fetchPopularMovies();
  }, [movieStore]);

  if (movieStore.SyncStore.loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 150px)",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  
  if (!movieStore.popularMovies) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 150px)",
        }}
      >
        <Typography variant="h6">No movies found.</Typography>
      </div>
    );
  }

  return (
    <div className={css`width: 100%;
        margin: 0 auto;
        height: 30vh;
        overflow-x: hidden;
        max-height: %;
        overflow-y: auto;
        position: center;
        &::-webkit-scrollbar {
          width: 10px;
        }
        &::-webkit-scrollbar-track {
          background-color: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 5px;
        }
      `}>
    <Grid container spacing={2}>
      {movieStore.popularMovies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
    </div>
  );
};


export default inject("movieStore")(observer(MovieList));
