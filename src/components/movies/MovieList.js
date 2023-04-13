import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import MovieCard from "./movieCard";

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
    <Grid container spacing={2}>
      {movieStore.popularMovies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};


export default inject("movieStore")(observer(MovieList));
