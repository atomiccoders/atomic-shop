const ADD_TO_CART = 'ADD_TO_CART'
const EMPTY_CART = 'EMPTY_CART'

const CartModule = {
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, item) {
      let matched = state.cart.filter(elem => elem.id === item)
      if (matched.length) {
        matched.quantity++
      }
      state.cart.push({
        id: item,
        quantity: 1
      })
    },
    EMPTY_CART(state) {
      state.cart = []
    }
  },
  actions: {
    updateCart({ commit }, payload) {
      if (payload !== null) {
        commit(ADD_TO_CART, payload)
      } else {
        commit(EMPTY_CART)
      }
    }
  },
  getters: {
    getCartLength: state => state.cart.length,
    getCartContent: state => state.cart
  }
}

export default CartModule
