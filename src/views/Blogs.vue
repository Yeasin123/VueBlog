<template>
  <div class="blog-card-wrap">
    <div class="container">
      <h3>View More Recent Blogs</h3>
      <div class="blog-cards">
        <blog-card
          v-for="(blogCard, index) in blogCards"
          :key="index"
          :postCard="blogCard"
        ></blog-card>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
export default {
    name:'blogs',
    components: { BlogCard },
    computed:{
      blogCards() {
          return this.$store.state.blogCards
      }
  }
}
</script>

<style>
</style>