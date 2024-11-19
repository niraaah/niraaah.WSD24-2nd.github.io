<template>
    <div>
      <h2>My Wishlist</h2>
      <MovieCard v-for="movie in wishlist" :key="movie.id" :movie="movie" @select="selectMovie" />
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
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
      };
    },
    methods: {
      selectMovie(movie) {
        // 영화 선택 로직
        console.log(movie);
      },
    },
  };
  </script>
  
  <style>
  /* 스타일 추가 */
  </style>