<template>
    <div>
      <h2>Sign Up</h2>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />
      <button @click="register">Sign Up</button>
      <router-link to="/signin">Login</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      register() {
        // 회원가입 로직
        if (this.password === this.confirmPassword) {
          localStorage.setItem('username', this.email);
          this.$router.push('/');
        } else {
          alert("Passwords do not match!");
        }
      },
    },
  };
  </script>
  
  <style>
  /* 스타일 추가 */
  </style>