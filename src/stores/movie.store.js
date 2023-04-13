import { makeAutoObservable } from "mobx";
import axios from "axios";

// Get IMDB API key from os environment variable
const IMDB_API_KEY = process.env.REACT_APP_IMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${IMDB_API_KEY}&sort_by=popularity.desc`;

class SyncStore {
  loading = false;
  constructor() {
    makeAutoObservable(this);
  }

  updating() {
    this.loading = true;
  }

  finished() {
    this.loading = false;
  }
}

class MovieStore {
  popularMovies = null
  SyncStore = new SyncStore();

  constructor() {
    makeAutoObservable(this);
  }
  
  update_movies(movies) {
    this.popularMovies = movies;
  }

  reset() {
    this.popularMovies = null;
  }


  async fetchPopularMovies () {
    this.SyncStore.updating();
    await axios.get(API_URL).then((response) => {
        this.update_movies(response.data.results);
        this.SyncStore.finished();
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
        this.SyncStore.finished();
      });}

}

export default MovieStore;
