import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/Home.vue';
import CursosView from '../views/Cursos.vue';
import Curso from '../views/Curso.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/cursos',
      component: CursosView,
      props: true,
      children: [
        {
          path: ':curso',
          component: Curso,
        },
      ],
    },
  ],
});
