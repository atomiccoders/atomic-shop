<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="'/assets/slide1.jpg'" class="d-block w-100" alt="..." />
        <div class="carousel-caption left d-none d-md-block">
          <span>NEW</span>
          <h2>Atomic - t-shirt</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p class="price">
            $ 29.99
            <span class="old-price">35.99</span>
          </p>
          <div class="row flex">
            <button type="button" class="btn btn-warning flex">
              <BaseIcon name="shopping-cart" />Add to cart
            </button>
            <router-link to="/" class="read-more">Read more</router-link>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="'/assets/slide2.jpg'" class="d-block w-100" alt="..." />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      slides: [
        {
          id: 1,
          image: '/assets/slide1.jpg'
        },
        {
          id: 2,
          image: '/assets/slide2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel,
.carousel-inner {
  height: calc(100vh - 85px);
  .carousel-item {
    height: calc(100vh - 85px);
  }
  .carousel-caption.left {
    bottom: 25%;
    right: initial;
    text-align: left;
    .price {
      color: #ffa211;
      .old-price {
        text-decoration: line-through;
      }
    }
    .row.flex {
      display: flex;
      align-items: center;
      .btn.flex {
        display: flex;
        color: #ffffff;
        background-color: #ffa211;
        border-color: #fdab27;
        &:hover {
          background-color: #d4880d;
          border-color: #d4880d;
        }
        .icon-wrapper {
          color: #ffffff;
        }
      }
      .read-more {
        margin-left: 20px;
        color: #ffa211;
        font-weight: bold;
      }
    }
  }
}
</style>
