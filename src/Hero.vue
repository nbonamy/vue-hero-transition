<template>
  <div class="hero" :tag="tag" @click.capture="prepare">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    }
  },
  methods: {

    prepare() {

      // clone
      let src = this.$scopedSlots.default()[0].elm;
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
      this.$hero.tag = this.tag;
      this.$hero.el = clone;

    },

  }
}
</script>

<style lang="scss" scoped>

</style>
