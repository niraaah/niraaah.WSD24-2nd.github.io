import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Popular from './views/Popular.vue';
import Search from './views/Search.vue';
import Wishlist from './views/Wishlist.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/popular', component: Popular },
    { path: '/search', component: Search },
    { path: '/wishlist', component: Wishlist },
    { path: '/signin', component: Login },
    { path: '/signup', component: Signup },
  ],
});