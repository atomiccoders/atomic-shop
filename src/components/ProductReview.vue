<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <div v-if="errors.length">
      <p>
        <b>Please correct the following error(s):</b>
      </p>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name" class="form-control" />
    </p>

    <p>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review" class="form-control"></textarea>
    </p>

    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating" class="form-control">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit" class="btn btn-outline-info" />
    </p>
  </form>
</template>

<script>
export default {
  name: 'ProductReview',
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      this.errors = []
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        this.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
      } else {
        if (!this.name) this.errors.push('Name required.')
        if (!this.review) this.errors.push('Review required.')
        if (!this.rating) this.errors.push('Rating required.')
      }
    }
  }
}
</script>
