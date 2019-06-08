<template>
  <div class="nav-bar">
    <div class="container">
      <div class="row upper">
        <div class="left col-6">
          <ul class="contact-details">
            <li>
              <i class="fa fa-phone"></i>+48 123 456 789
            </li>
            <li>
              <i class="fa fa-envelope"></i>example@email.com
            </li>
          </ul>
        </div>
        <div class="right col-6">
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
      <div class="row lower">
        <div class="logo col-2">
          <router-link to="/" style="padding:0">
            <img src="/assets/logo-white.png" style="width:125px;margin:0 50px">
          </router-link>
        </div>
        <div class="menu col-8">
          <ul>
            <li>
              <router-link :to="{ name: 'category-one' }">Category one</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'category-two' }">Category two</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'category-three' }">Category three</router-link>
            </li>
          </ul>
        </div>
        <div class="icons col-2">
          <ul>
            <li class="search">
              <BaseIcon name="search" style="margin-left:20px;"/>
            </li>
            <li class="cart">
              <router-link :to="{ name: 'Cart' }">
                <BaseIcon name="shopping-cart" style="margin-left:20px;">
                  <span>{{ cartLength }}</span>
                </BaseIcon>
              </router-link>
            </li>
          </ul>
        </div>
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
  height: 85px;
  ul {
    list-style: none;
    margin: 0;
    li {
      display: inline-block;
      margin: 5px 15px;
    }
  }

  .upper {
    .left {
    }
    .right {
      text-align: right;
    }
  }

  .lower {
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icons {
      align-self: center;
      margin-top: 10px;
      ul li {
        margin: 0;
        .icon-wrapper {
          color: #ffa211;
        }
      }
    }
  }

  a {
    display: inline-block;
    // padding: 10px 15px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #ffa211;
    }
    &.router-link-exact-active {
      color: #ffa211;
    }
  }
}
</style>
