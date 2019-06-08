<template>
  <div>
    <Slider />

    <div class="container home">
      <ProductList :products="products" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList'
import Slider from '@/views/common/Slider'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Slider,
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
