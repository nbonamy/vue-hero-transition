
import Vue from 'vue';
import VueRouter from 'vue-router'
import List from '../src/List.vue';
import Details from '../src/Details.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: List,
    },
    {
      name: 'details',
      path: '/details',
      component: Details,
      props: true,
    },
  ]
});

export default router;
