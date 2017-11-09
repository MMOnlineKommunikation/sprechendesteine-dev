import Vue from 'vue';
import Router from 'vue-router';
import Start from '../components/Startseite';
import Stein from '../components/SteinDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/stein',
      name: 'Stein',
      component: Stein,
    },
  ],
});
