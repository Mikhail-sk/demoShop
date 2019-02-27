import Vue from 'vue'
import Vuex from 'vuex'
import { addCart, saveCart, totalSum } from './function/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      {
        id: '1',
        title: 'TitleName1',
        desc: 'Desc',
        price: 299,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '2',
        title: 'TitleName2',
        desc: 'Desc',
        price: 299,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '3',
        title: 'TitleName3',
        desc: 'Desc',
        price: 299,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '4',
        title: 'TitleName4',
        desc: 'Desc',
        price: 200,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '5',
        title: 'TitleName5',
        desc: 'Desc',
        price: 100,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '6',
        title: 'TitleName',
        desc: 'Desc',
        price: 57,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '7',
        title: 'TitleName',
        desc: 'Desc',
        price: 1300,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '8',
        title: 'TitleName',
        desc: 'Desc',
        price: 396,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '9',
        title: 'TitleName',
        desc: 'Desc',
        price: 265,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '10',
        title: 'TitleName',
        desc: 'Desc',
        price: 810,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '11',
        title: 'TitleName',
        desc: 'Desc',
        price: 1030,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      },
      {
        id: '12',
        title: 'TitleName',
        desc: 'Desc',
        price: 1010,
        currency: '€',
        img: 'https://pp.userapi.com/c831109/v831109824/1abc07/Hl9K7rPjbpU.jpg'
      }
    ],
    cart: [],
    qty: 0,
    total: 0
  },
  getters: {
    GOODS: state => {
      return state.goods
    },
    CART: state => {
      return state.cart
    },
    QTY: state => {
      return state.qty
    },
    TOTAL: state => {
      return state.total
    }
  },
  mutations: {
    ADD_CART: (state, payload) => {
      state.qty++
      state.total += payload.price
      state.cart = addCart(state.cart, payload)
    },
    CART: (state, payload) => {
      state.cart = payload
      state.qty = totalSum(payload).qty
      state.total = totalSum(payload).total
    },
    REMOVE_ITEM: (state, payload) => {
      let index = state.cart.indexOf(payload)
      state.cart.splice(index, 1)
      saveCart(state.cart)
      state.total -= payload.price
      state.qty -= 1
    },
    CLEAN_CART: (state) => {
      localStorage.removeItem('cart')
      state.cart = []
      state.qty = 0
      state.total = 0
    },
    MINUS_QTY: (state, payload) => {
      saveCart(state.cart)
      state.total -= payload
      state.qty -= 1
    },
    PLUS_QTY: (state, payload) => {
      payload.qty += 1
      payload.total = payload.qty * payload.price
      state.qty += 1
      state.total += payload.price
      saveCart(state.cart)
    }
  },
  actions: {
    minusQty: (context, payload) => {
      if (payload.qty === 1) {
        context.commit('REMOVE_ITEM', payload)
      } else {
        payload.qty -= 1
        payload.total = payload.qty * payload.price
        context.commit('MINUS_QTY', payload.price)
      }
    }
  }
})
