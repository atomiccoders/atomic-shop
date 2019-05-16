<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <ProductList :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },
  computed: mapState(['products'])
}
</script>
