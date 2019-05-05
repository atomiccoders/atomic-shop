<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <ProductList :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList'
import ProductService from '@/services/ProductService.js'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    ProductService.getProducts()
      .then(response => {
        this.products = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
