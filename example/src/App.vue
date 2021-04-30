
<template>
  <div id="app">
    <HeroTransition>
      <router-view></router-view>
    </HeroTransition>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

#app {
  width: 80%;
  height: 80vh;
  margin: 5vh auto;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 16px;
  padding: 32px;
}

</style>
