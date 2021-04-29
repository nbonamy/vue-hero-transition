
import Vue from 'vue';
import router from './router.js';
import Hero from 'vue-hero-transition';
import App from '../src/App.vue';

// plugins
Vue.use(Hero);

// do it
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
