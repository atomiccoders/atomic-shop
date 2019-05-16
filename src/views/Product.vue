<template>
  <div class="product">
    <div class="product-image">
      <img
        :src="image"
        :alt="`image of ${product.name}`"
        @click="openModal()"
      />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock > 10">In stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Only few left</p>
      <p v-else>Out of stock</p>

      <p>Shipping: {{ shipping }}</p>

      <ul>
        <li v-for="(detail, index) in product.details" :key="index">
          {{ detail }}
        </li>
      </ul>

      <div class="variants">
        <div
          v-for="(variant, index) in product.variants"
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
        ></div>
      </div>

      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        class="btn btn-outline-info"
      >
        Add to Cart
      </button>
    </div>

    <ProductTabs :reviews="product.reviews" @review-submitted="addReview" />

    <Modal v-if="showModal" @close-modal="closeModal">
      <h4 slot="header" class="modal-title" style="text-transform:capitalize;">
        {{ title }}
      </h4>
      <div slot="body">
        <img
          :src="image"
          :alt="`image of ${product.name}`"
          style="width:100%"
        />
      </div>
      <div slot="footer">
        <button
          type="button"
          class="btn btn-outline-info"
          @click="closeModal()"
        >
          Close
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import ProductTabs from '../components/ProductTabs'
import ProductService from '@/services/ProductService.js'

export default {
  name: 'Product',
  components: {
    ProductTabs
  },
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    id: [String, Number]
  },
  data() {
    return {
      product: {
        variants: [
          {
            variantImage: '../assets/blank.jpg'
          }
        ],
        reviews: []
      },
      selectedVariant: 0,
      showModal: false
    }
  },
  created() {
    ProductService.getProduct(this.id)
      .then(response => {
        this.product = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  methods: {
    addToCart() {
      this.$store.dispatch(
        'updateCart',
        this.product.variants[this.selectedVariant].variantId
      )
      this.product.variants[this.selectedVariant].variantQuantity -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    addReview(productReview) {
      this.product.reviews.push(productReview)
    },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  },
  computed: {
    title() {
      return this.product.brand + ' ' + this.product.name
    },
    image() {
      return this.product.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.product.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-transform: capitalize;
}
h3 {
  margin: 40px 0 0;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
.product-image img {
  cursor: pointer;
}
.modal button.btn {
  margin: 0;
  margin-left: 10px;
}
</style>
