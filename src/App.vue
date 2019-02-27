<template lang="pug">
    .wrapper
        header
            .left
                router-link.logo(
                to="/"
                ) ShopLogo
            .spacer
            .right
                .cartInfo
                    span {{ total }} ₽
                    span.qty {{ qty }} {{ nameCount }}
                router-link.btn.cart(
                to="/cart"
                ) Корзина
        section
            router-view
</template>

<script>

export default {
  data () {
    return {
      nameCount: 'товар'
    }
  },
  mounted () {
    if (localStorage.getItem('cart')) {
      try {
        this.$store.commit('CART', JSON.parse(localStorage.getItem('cart')))
      } catch (e) {
        localStorage.removeItem('cart')
      }
    }
  },
  computed: {
    total () {
      return this.$store.getters.TOTAL
    },
    qty () {
      this.declOfNum(this.$store.getters.QTY, ['товар', 'товара', 'товаров'])
      return this.$store.getters.QTY
    }
  },
  methods: {
    declOfNum (number, titles) {
      let cases = [2, 0, 1, 1, 1, 2]
      this.nameCount = titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]
    }
  }
}
</script>

<style lang="stylus">
    @import "./assets/stylus/main.styl"
</style>
