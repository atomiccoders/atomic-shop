import Vue from 'vue'
import Vuex from 'vuex'
import CartModule from './modules/cart'
import ProductService from '@/services/ProductService.js'

Vue.use(Vuex)

const SET_PRODUCTS = 'SET_PRODUCTS'

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    fetchProducts({ commit }) {
      ProductService.getProducts()
        .then(response => {
          commit(SET_PRODUCTS, response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  modules: {
    cart: CartModule
  }
})
