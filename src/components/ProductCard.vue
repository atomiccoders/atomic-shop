<template>
  <router-link
    class="product-link"
    :to="{ name: 'Product', params: { id: product.id } }"
  >
    <div class="product-card -shadow">
      <div class="product-image">
        <img
          :src="product.variants[0].variantImage"
          :alt="`${product.brand} ${product.name}`"
        />
      </div>
      <div class="product-info">
        <h4 class="title">{{ product.brand + ' ' + product.name }}</h4>
        <BaseIcon name="layers"
          >{{ product.variants.length }} variants</BaseIcon
        >
        <BaseIcon name="tag" style="margin-left:20px;"
          >${{ product.price }}</BaseIcon
        >
        <p class="eyebrow">{{ product.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: 1px solid rgba(30, 30, 30, 0.3);
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.product-card > .title {
  margin: 0;
}
.product-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.product-image {
  display: inline;
}
.product-info,
.product-card {
  display: inline-block;
  margin-left: 20px;
  width: 70%;
}

.product-card {
  width: 45%;
}

.product-image img {
  margin: 10px;
  width: 20%;
  vertical-align: top;
}

h4.title {
  text-transform: capitalize;
}
</style>
