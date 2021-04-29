import Hero from './Hero.vue';
import HeroTransition from './HeroTransition.vue';

export default {
  install(Vue, options) {
    Vue.component('Hero', Hero);
    Vue.component('HeroTransition', HeroTransition);
    Vue.prototype.$hero = {
      tag: null,
      el: null,
    };
  },
};
