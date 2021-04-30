<template>
  <div class="hero" :tag="tag" @click.capture="onClick">
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
    onClick() {
      this.$hero.prepare(this.tag, this.$scopedSlots.default()[0].elm);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
