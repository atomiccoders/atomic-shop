<template>
  <div class="nav nav-bar">
    <div class="upper">
      <div class="left">
        <ul class="contact-details">
          <li><i class="fa fa-phone"></i>+48 123 456 789</li>
          <li><i class="fa fa-envelope"></i>example@email.com</li>
        </ul>
      </div>
      <div class="right">
        <ul class="quick-menu">
          <li>
            <router-link :to="{ name: 'About' }">About us</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'SignUp' }">Sign up</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="lower">
      <div class="logo">
        <router-link to="/" style="padding:0">
          <img src="/assets/logo-white.png" style="width:125px;margin:0 50px" />
        </router-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Products' }">Products</router-link>
            <ul>
              <li>Category one</li>
              <li>Category two</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="icons">
        <ul>
          <li class="search">
            <i class="fa fa-search"></i>
          </li>
          <li class="cart">
            <router-link :to="{ name: 'Cart' }">
              <i class="fa fa-cart"></i>
              <span>{{ cartLength }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    cartLength() {
      return this.$store.getters.getCartLength
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #222;
  border-bottom: 2px solid #333;
  border-left: 2px solid #333;
  a {
    display: inline-block;
    padding: 18px 30px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #ffa211;
    }
  }
}
</style>
