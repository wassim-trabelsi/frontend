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


  async fetchPopularMovies (frenchOnly) {
    this.SyncStore.updating();
    const api_url = frenchOnly ? `${API_URL}&with_original_language=fr` : API_URL;
    await axios.get(api_url).then((response) => {
        this.update_movies(response.data.results);
        this.SyncStore.finished();
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
        this.SyncStore.finished();
      });}
    
    async fetchReviews(movieId) {
      const api_url = `http://localhost/sentiment-analysis?movieID=${movieId}`
      await axios.get(api_url).then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        return [];
      });
    }


}

export default MovieStore;
