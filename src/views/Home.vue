<template lang="pug">
  .list
    .card(
    v-for="product in goods"
    :key="product.id"
    )
      .cardWrapper
        .cardRoot
          .cardImg
            img(
            :src="`${product.img}`"
            )
          .cardDesc
            h3 {{ product.title }}
            p {{ product.desc }}
          .cardFooter
            .cardPrice
              | {{ product.price }} {{ product.currency }}
            .cardCart
              .btn(
              @click="addToCart(product)"
              ) В корзину
</template>

<script>
export default {
  name: 'Home',
  computed: {
    goods () {
      return this.$store.getters.GOODS
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('ADD_CART', product)
    }
  }
}
</script>
