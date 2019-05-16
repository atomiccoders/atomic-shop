<template>
  <div class="cart-container">
    <h1 class="title">Order</h1>
    <ul class="items">
      <li v-if="!$store.getters.getCartLength">Your cart is empty</li>
      <li :key="item.id" v-for="item in checkout" class="item">
        <div class="item-preview">
          <img :src="item.thumbnail" :alt="item.name" class="item-thumbnail">
          <div>
            <h2 class="item-title">{{ item.name }}</h2>
            <p class="item-description">{{ item.brand }}</p>
          </div>
        </div>
        <div class="recipe">
          <input type="text" class="item-quantity" v-model="item.quantity">
          <span class="item-price">{{ toPrice(item.price).toFormat() }}</span>
        </div>
      </li>
    </ul>
    <h3 class="cart-line">
      Subtotal
      <span class="cart-price">{{ getSubtotal.toFormat() }}</span>
    </h3>
    <h3 class="cart-line">
      Shipping
      <span class="cart-price">{{ getShippingPrice.toFormat() }}</span>
    </h3>
    <h3 class="cart-line">
      <span class="cart-total">Total</span>
      <span class="cart-price cart-total">{{ getTotal.toFormat() }}</span>
    </h3>
  </div>
</template>

<script>
import Dinero from 'dinero.js'

export default {
  name: 'Cart',
  props: {
    // cart: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      data: {
        shippingPrice: 2.99
      }
    }
  },
  methods: {
    toPrice(amount, factor = Math.pow(10, 2)) {
      return Dinero({ amount: Math.round(amount * factor) })
    }
  },
  computed: {
    checkout() {
      let array = []
      this.$store.getters.getCartContent.forEach(elem => {
        this.$store.state.products.forEach(item => {
          item.variants.forEach(el => {
            if (el.variantId === elem.id)
              array.push({
                name: el.variantColor + ' ' + item.name,
                brand: item.brand,
                thumbnail: el.variantImage,
                quantity: elem.quantity,
                price: item.price
              })
          })
        })
      })
      return array
    },
    getShippingPrice() {
      return this.toPrice(this.data.shippingPrice)
    },
    getSubtotal() {
      //return this.checkout.reduce((a, b) => a + b.price * b.quantity, 0)
      return this.checkout.reduce(
        (a, b) => a.add(this.toPrice(b.price).multiply(b.quantity)),
        Dinero()
      )
    },
    getTotal() {
      return this.getSubtotal.add(this.getShippingPrice)
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
/* .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  text-transform: uppercase;
  font-size: 110%;
  font-weight: normal;
} */

.items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cart-container {
  background: #fff;
  font-size: 16px;
  color: #333a45;
  border-radius: 3px;
  padding: 30px;
}
.cart-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
  font-size: inherit;
  font-weight: normal;
  color: rgba(51, 58, 69, 0.8);
}
.cart-price {
  color: #333a45;
}
.cart-total {
  font-size: 130%;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 2px solid rgba(51, 58, 69, 0.1);
}
.item-preview {
  display: flex;
  align-items: center;
}
.item-thumbnail {
  margin-right: 20px;
  border-radius: 3px;
  border: 1px solid rgba(51, 58, 69, 0.1);
  width: 80px;
}
.item-title {
  margin: 0 0 10px 0;
  font-size: inherit;
  text-transform: capitalize;
}
.item-description {
  margin: 0;
  color: rgba(51, 58, 69, 0.6);
  text-transform: capitalize;
}
.recipe {
  display: flex;
  align-items: center;
}
.item-quantity {
  max-width: 50px;
  padding: 8px 12px;
  font-size: inherit;
  color: rgba(51, 58, 69, 0.8);
  border: 2px solid rgba(51, 58, 69, 0.1);
  border-radius: 3px;
  text-align: center;
  height: auto;
  margin-bottom: 0;
}
.item-price {
  margin-left: 20px;
  min-width: 45px;
  text-align: right;
}
</style>
