<template>
  <div class="post-view">
    <div class="container quillWrapper">
       <router-link :to="{name:'Home'}" class="linkTap">Back to Home</router-link>
      <h2>{{currentBlog[0].blogTitle}}</h2>
      <h4>Posted on: {{new Date(currentBlog[0].date).toDateString()}}</h4>
      <img :src="currentBlog[0].blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="currentBlog[0].blogHTML"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "ViewBlog",
  data() {
    return {
    
    };
  },
  computed:{
    currentBlog() {
      return this.blogPosts.filter(post => {
        return post.blogID === this.$route.params.id
      })
    },
    ...mapState(['blogPosts'])
  },
};
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
  img{
    width: 51%;
  }
  .linkTap{
    text-decoration: none;
    font-weight: 600;
    // border:1px solid #000
  }
}
</style>