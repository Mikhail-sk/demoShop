<template lang="pug">
    <div>
    .list
        .cart__info
            h1 Корзина
            .cart__clean(
                v-if="qty > 0"
                @click="cleanCart"
            ) очистить корзину
            .cart__list
                .cart__empty(
                v-if="qty == 0"
                ) {{ emptyCart }}
                .cart__line(
                v-if="cart"
                v-for="item in cart"
                )
                    .cart__line-name {{ item.title }}
                    .cart__line-count
                        i(
                            @click="minusQty(item)"
                        ) -
                        span {{ item.qty }}
                        i(
                            @click="plusQty(item)"
                        ) +
                    .cart__line-price {{ money(item.total) }} ₽
                    .cart__line-delete(
                        @click="del(item)"
                    ) ×
        .cart__total(
        v-if="qty > 0"
        ) Сумма заказа: {{ total }} ₽
    </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      emptyCart: 'Добавьте что-нибудь из товаров'
    }
  },
  computed: {
    cart () {
      return this.$store.getters.CART
    },
    qty () {
      return this.$store.getters.QTY
    },
    total () {
      return this.$store.getters.TOTAL
    }
  },
  methods: {
    del (item) {
      this.$store.commit('REMOVE_ITEM', item)
    },
    cleanCart () {
      this.$store.commit('CLEAN_CART')
    },
    minusQty (item) {
      this.$store.dispatch('minusQty', item)
    },
    plusQty (item) {
      this.$store.commit('PLUS_QTY', item)
    },
    money (item) {
      return (Number(item)).toLocaleString('ru')
    }
  }
}
</script>

<style scoped>

</style>
