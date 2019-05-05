<template>
  <div id="app">
    <div id="nav" class="nav-bar">
      <router-link to="/" style="padding:0">
        <img src="assets/logo-white.png" style="width:125px;margin:0 50px" />
      </router-link>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/products/1">Product</router-link>

      <div class="cart">
        <router-link to="/cart">Cart ({{ cartLength }})</router-link>
      </div>
    </div>

    <div class="container">
      <router-view
        :premium="user.premium"
        @add-to-cart="updateCart"
        :cart="cart"
      />
    </div>

    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  props: [],
  data() {
    return {
      user: {
        premium: true
      },
      cart: [],
      cartLength: 0
    }
  },
  methods: {
    updateCart(id) {
      const index = this.cart.findIndex(x => x.id === id)
      if (index === -1) {
        this.cart.push({
          id: id,
          quantity: 1
        })
        this.cartLength++
      } else {
        this.cart[index].quantity++
        this.cartLength++
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  & .container {
    margin-top: 20px;
  }
}

#nav {
  a {
    display: inline-block;
    padding: 18px 30px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}

body {
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  // margin-bottom: 15px;
}

.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

.product-image img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 0 40px 20px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: inline-block;
  border: 1px solid #ddd;
}

.cart {
  /* margin-right: 25px; */
  float: right;
  border: 1px solid #d8d8d8;
  background-color: #fff;
  // padding: 2px 20px;
  margin: -2px 0;
}

button {
  margin-top: 10px;
  border: none;
  background-color: #84cf6a;
  color: white;
  height: 40px;
  // width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.reviews li .name {
  font-size: small;
  font-weight: 600;
  margin-bottom: 0px;
}

.reviews li .review {
  margin-top: 5px;
}

.reviews li .review span {
  font-weight: 600;
}

.review-form {
  width: 400px;
  padding: 20px;
  margin: 20px 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  // height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
