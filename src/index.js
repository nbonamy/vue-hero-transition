import Hero from './Hero.vue';
import HeroTransition from './HeroTransition.vue';

export default {
  install(Vue, options) {
    Vue.component('Hero', Hero);
    Vue.component('HeroTransition', HeroTransition);
    Vue.prototype.$hero = {
      hero: {
        tag: null,
        el: null,
      },
      prepare: function(tag, src) {
      
        // clone
        let clone = src.cloneNode(true);

        // copy computed styles
        let styles = window.getComputedStyle(src, null);
        let cssText = styles.cssText || Object.values(styles).reduce((css, propertyName) =>
          `${css}${propertyName}:${styles.getPropertyValue(propertyName)};`
        );
        clone.style.cssText = cssText;

        // now make sure size and positions are ok
        clone.style.width = `${src.width}px`;
        clone.style.height = `${src.height}px`;
        clone.style.top = `${src.getBoundingClientRect().top}px`;
        clone.style.left = `${src.getBoundingClientRect().left}px`;
        clone.style.position = 'absolute';
        clone.style.visibility = 'visible';

        // save
        this.hero = {
          tag: tag,
          el: clone
        };

      },

      cleanup: function() {
        delete this.hero?.el;
        this.hero = null;
      }
    };
  },
};
