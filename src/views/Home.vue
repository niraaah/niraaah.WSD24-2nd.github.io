<template>
    <div>
      <h2>Home</h2>
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
        movies: [],
      };
    },
    methods: {
      selectMovie(movie) {
        // 영화 선택 로직
        console.log(movie);
      },
    },
    mounted() {
      // TMDB API에서 영화 데이터 가져오기
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=ko-KR')
        .then(response => response.json())
        .then(data => {
          this.movies = data.results;
        });
    },
  };
  </script>
  
  <style>
  /* 스타일 추가 */
  </style>