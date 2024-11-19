<template>
    <div class="movie-card" @click="selectMovie">
      <img :src="movie.poster_path" alt="Movie Poster" />
      <h3>{{ movie.title }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: Object,
    },
    methods: {
      selectMovie() {
        // 영화 선택 로직
        this.$emit('select', this.movie);
      },
    },
  };
  </script>
  
  <style>
  .movie-card {
    cursor: pointer;
    margin: 10px;
  }
  .movie-card img {
    width: 100%;
    height: auto;
  }
  </style>