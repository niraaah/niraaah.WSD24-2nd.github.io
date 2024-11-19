<template>
    <div>
      <h2>Login</h2>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // 로그인 로직
        localStorage.setItem('username', this.email);
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style>
  /* 스타일 추가 */
  </style>