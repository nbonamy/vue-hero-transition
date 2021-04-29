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
    }
  },
  methods: {

    onEnter(el, done) {
      if (this.$hero.tag != null) {
        this.transition(el);
        delete this.$hero.el;
      }
      this.$hero.tag = null;
      this.$hero.el = null;
      done();
    },

    transition(el) {

      // find corresponding target hero
      let dest = el.querySelector(`.hero[tag='${this.$hero.tag}']`);
      if (dest == null) {
        return;
      }

      // prepare destination
      dest = dest.children[0];
      dest.style.visibility = 'hidden';

      // now our element
      el = this.$hero.el;
      dest.offsetParent.appendChild(el);
      el.addEventListener('transitionend', () => {
        dest.style.visibility = 'visible';
        el.remove();
      });

      // now style it
      el.style.transition = `left ${this.duration}, top ${this.duration}, width ${this.duration}, height ${this.duration}`;
      el.style.left = `${dest.offsetLeft}px`;
      el.style.top = `${dest.offsetTop}px`;
      el.style.width = `${dest.width}px`;
      el.style.height = `${dest.height}px`;
    },

  }
}

</script>