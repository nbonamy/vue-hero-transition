<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item.tag">
      <router-link :to="{ name: 'details', params: { item: item } }">
        <Hero :tag="item.tag">
          <img :src="item.src">
        </Hero>
        <div>{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          tag: 'daft',
          name: 'Daft Punk',
          src: 'https://i.scdn.co/image/b8aaf4b179bb0a52f29a810fdb0f9d5c16ec2c75',
          desc: 'Daft Punk were a French electronic music duo formed in 1993 in Paris by Guy-Manuel de Homem-Christo and Thomas Bangalter',
        },
        {
          tag: 'cassius',
          name: 'Cassius',
          src: 'https://futuredisco.net/wp-content/uploads/2022/03/cassius-300x300.jpg',
          desc: 'Cassius was a French musical duo consisting of producers Philippe Cerboneschi and Hubert Blanc-Francard, better known as Zdar and Boombass',
        }
      ]
    }
  }
}
</script>

<style scoped>

  .items {
    display: flex;
  }

  .item {
    max-width: 150px;
    text-align: center;
    margin: 16px;
  }

  .item img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

</style>
