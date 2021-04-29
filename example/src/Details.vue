<template>
  <div class="details">
    <router-link to="/">
      <Hero :tag="item.tag">
        <img :src="item.src">
      </Hero>
    </router-link>
    <div class="desc">
      {{ item.desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'item' ],
}
</script>

<style scoped>

  .details {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .desc {
    text-align: center;
    margin-top: 24px;
    max-width: 400px;
  }

</style>
