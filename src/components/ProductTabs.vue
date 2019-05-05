<template>
  <div>
    <span
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
      >{{ tab }}</span
    >

    <div class="reviews" v-show="selectedTab === 'Reviews'">
      <h2>Reviews</h2>
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <p class="name">{{ review.name }} (rating: {{ review.rating }})</p>
          <p class="review">
            Review:
            <span>{{ review.review }}</span>
          </p>
        </li>
      </ul>
    </div>

    <ProductReview
      v-show="selectedTab === 'Make a Review'"
      @review-submitted="emitReview"
    />
  </div>
</template>

<script>
import ProductReview from './ProductReview'

export default {
  name: 'ProductTabs',
  components: {
    ProductReview
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  },
  methods: {
    emitReview(productReview) {
      this.$emit('review-submitted', productReview)
    }
  }
}
</script>
