import { makeAutoObservable } from "mobx";
import axios from "axios";

// Get IMDB API key from os environment variable
const IMDB_API_KEY = process.env.REACT_APP_IMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${IMDB_API_KEY}&sort_by=popularity.desc`;

class MovieStore {
  popularMovies = null
  loading = null

  constructor() {
    makeAutoObservable(this);
  }
  
  // write some code here to query the API
  async fetchPopularMovies() {
    try {
      this.loading = true;
      const response = await axios.get(API_URL);
      this.popularMovies = response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      this.loading = false;
    }
  }
}

export default MovieStore;
