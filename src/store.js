import Vue from 'vue'
import Vuex from 'vuex'
import { addCart, saveCart, totalSum } from './function/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      {
        id: '1',
        title: 'Наушники Apple AirPods',
        desc: 'Bluetooth-наушники с микрофоном, время работы 5 ч, вес 4 г',
        price: 15490,
        img: 'https://avatars.mds.yandex.net/get-mpic/175985/img_id6526000481435545741/9hq'
      },
      {
        id: '2',
        title: 'Планшет Apple iPad (2018) 128Gb Wi-Fi',
        desc: 'планшет 9.7", 2048x1536, TFT IPS',
        price: 31990,
        img: 'https://avatars.mds.yandex.net/get-mpic/1605421/img_id2410163148708122896.png/9hq'
      },
      {
        id: '3',
        title: 'Смартфон Apple iPhone Xr 64GB',
        desc: 'смартфон с iOS 12, поддержка двух SIM-карт (nano SIM+eSIM), экран 6.1", разрешение 1792x828',
        price: 54990,
        img: 'https://avatars.mds.yandex.net/get-mpic/1244413/img_id6063597382562623069.jpeg/9hq'
      },
      {
        id: '4',
        title: 'Часы Apple Watch Series 4 GPS 40mm Aluminum Case with Sport Band',
        desc: 'влагозащищенные, материал корпуса: алюминий, керамика, сенсорный экран, звонки с помощью телефона или планшета',
        price: 32490,
        img: 'https://avatars.mds.yandex.net/get-mpic/1363071/img_id2664047537186578099.jpeg/9hq'
      },
      {
        id: '5',
        title: 'Монитор Philips 276E8VJSB',
        desc: 'ЖК-монитор с диагональю 27", тип матрицы экрана TFT IPS, разрешение 3840x2160 (16:9)',
        price: 22100,
        img: 'https://avatars.mds.yandex.net/get-mpic/364668/img_id5063976702640790687/9hq'
      },
      {
        id: '6',
        title: 'Колесный диск SKAD KL-271',
        desc: 'Диаметр обода (D): 16, Количество крепежных отверстий: 5, Диаметр расположения отверстий: 114.3, литые',
        price: 4580,
        img: 'https://avatars.mds.yandex.net/get-mpic/199079/img_id1459071896067846183/9hq'
      },
      {
        id: '7',
        title: 'Электросамокат KUGOO S3',
        desc: 'электросамокат для взрослых, диаметр колес 200 мм, максимальная нагрузка 120 кг, максимальная скорость 35 км/ч',
        price: 11499,
        img: 'https://avatars.mds.yandex.net/get-mpic/1362400/img_id2265701916596758660.jpeg/9hq'
      },
      {
        id: '8',
        title: 'Ноутбук Apple MacBook Pro 15 with Retina display Mid 2018 (Intel Core i7 2600 MHz/15.4"/2880x1800/16GB/512GB SSD/DVD нет/AMD Radeon Pro 560X/Wi-Fi/Bluetooth/macOS)',
        desc: 'ноутбук c экраном 15.4", вес 1.83 кг, процессор Intel Core i7 2600 МГц, память 16 ГБ DDR4, накопитель (SSD) 512 ГБ',
        price: 189990,
        img: 'https://avatars.mds.yandex.net/get-mpic/1336510/img_id3048877379063872469.jpeg/9hq'
      },
      {
        id: '9',
        title: 'JIAJIA Квадроцикл Grizzly ATV BDM0906',
        desc: 'нагрузка до 40 кг, двигатель: 2 х 45W, аккумулятор: 12V/7Ah, количество скоростей: 2, до 7 км/ч',
        price: 12990,
        img: 'https://avatars.mds.yandex.net/get-mpic/901948/img_id2733128150939635001.jpeg/9hq'
      },
      {
        id: '10',
        title: 'Набор из 2 кукол Barbie Челси, FHK97\n',
        desc: 'кукла-модель, набор кукол, питомец в комплекте',
        price: 977,
        img: 'https://avatars.mds.yandex.net/get-mpic/364668/img_id958065478459400043.jpeg/9hq'
      },
      {
        id: '11',
        title: 'Наушники AKG K 92',
        desc: 'полноразмерные, закрытые, чувствительность 113 дБ/В, импеданс 32 Ом',
        price: 4210,
        img: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id9025314178132100124/9hq'
      },
      {
        id: '12',
        title: 'Прогулочная коляска Mr Sandman Traveler',
        desc: 'механизм "книжка", 4 колеса, рекомендуемый возраст: с 6 месяцев, надувные колеса, пружинная амортизация, корзина для покупок',
        price: 19990,
        img: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id2163249015912132910/9hq'
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
      return (state.qty).toLocaleString('ru')
    },
    TOTAL: state => {
      return (state.total).toLocaleString('ru')
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
      state.total -= payload.price * payload.qty
      state.qty -= payload.qty
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
