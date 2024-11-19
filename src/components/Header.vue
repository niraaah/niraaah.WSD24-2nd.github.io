<template>
    <header>
      <h1>Movie App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/popular">Popular</router-link>
        <router-link to="/search">Search</router-link>
        <router-link to="/wishlist">Wishlist</router-link>
        <button v-if="isLoggedIn" @click="logout">Logout</button>
        <span v-if="isLoggedIn">{{ username }}</span>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false,
        username: '',
      };
    },
    methods: {
      logout() {
        // 로그아웃 로직
        this.isLoggedIn = false;
        this.username = '';
      },
    },
    mounted() {
      // 로그인 상태 확인
      const user = localStorage.getItem('username');
      if (user) {
        this.isLoggedIn = true;
        this.username = user;
      }
    },
  };
  </script>
  
  <style>
  header {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  nav a {
    color: white;
    margin: 0 10px;
  }
  </style>