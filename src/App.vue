<template>
  <div id="app">
    <NavBar />

    <div class="container">
      <router-view :premium="user.premium" />
    </div>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import NavBar from '@/views/common/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  },
  props: [],
  data() {
    return {
      user: {
        premium: true
      }
    }
  },
  methods: {
    // updateCart(id) {
    //   const index = this.$store.state.cart.findIndex(x => x.id === id)
    //   if (index === -1) {
    //     this.$store.state.cart.push({
    //       id: id,
    //       quantity: 1
    //     })
    //     this.cartLength++
    //   } else {
    //     this.cart[index].quantity++
    //     this.cartLength++
    //   }
    // }
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in 0.6s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.8s ease-out 0.3s;
}
</style>
