<template>
  <transition v-on:enter="onEnter" v-bind:css="false">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: '500ms'
    },
    backSupport: {
      type: Boolean,
      default: true,
    }
  },
  methods: {

    onEnter(el, done) {
      if (this.$hero.hero != null) {
        if (this.transition(el, this.$hero.hero) == false) {
          this.$hero.cleanup();
        }
      }
      done();
    },

    transition(el, hero) {

      // find corresponding target hero
      let dest = el.querySelector(`.hero[tag='${hero.tag}']`);
      if (dest == null) {
        return false;
      }

      // prepare destination
      dest = dest.children[0];
      dest.style.visibility = 'hidden';

      // now our element
      dest.offsetParent.appendChild(hero.el);
      hero.el.addEventListener('transitionend', () => {
        dest.style.visibility = 'visible';
        hero.el.remove();
        if (this.backSupport) {
          this.$hero.prepare(tag, dest);
        } else {
          this.$hero.cleanup();
        }
      });

      // now style it
      hero.el.style.transition = `left ${this.duration}, top ${this.duration}, width ${this.duration}, height ${this.duration}`;
      hero.el.style.left = `${dest.offsetLeft}px`;
      hero.el.style.top = `${dest.offsetTop}px`;
      hero.el.style.width = `${dest.width}px`;
      hero.el.style.height = `${dest.height}px`;

      // done
      return true;

    },

    cleanup() {
      delete this.$hero.el;
      this.$hero.tag = null;
      this.$hero.el = null;
    }

  }
}

</script>