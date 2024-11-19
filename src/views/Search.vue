<template>
    <div>
      <h2>Search Movies</h2>
      <input v-model="query" @input="searchMovies" placeholder="Search for a movie..." />
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @select="selectMovie" />
    </div>
  </template>
  
  <script>
  import MovieCard from '../components/MovieCard.vue';
  
  export default {
    components: {
      MovieCard,
    },
    data() {
      return {
        query: '',
        movies: [],
      };
    },
    methods: {
      selectMovie(movie) {
        // 영화 선택 로직
        console.log(movie);
      },
      searchMovies() {
        if (this.query.length > 2) {
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=ko-KR&query=${this.query}`)
            .then(response => response.json())
            .then(data => {
              this.movies = data.results;
            });
        } else {
          this.movies = [];
        }
      },
    },
  };
  </script>
  
  <style>
  /* 스타일 추가 */
  </style>