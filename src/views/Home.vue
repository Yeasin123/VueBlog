<template>
  <div class="home">
    <blog-post :post="welcomeScreen"></blog-post>
    <blog-post
      v-for="(post, index) in blogPosts"
      :key="index"
      :post="post"
    ></blog-post>
    <div class="blog-card-wrap">
      <div class="container">
        <h3 >View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card
            v-for="(blogCard, index) in blogCards"
            :key="index"
            :postCard="blogCard"
          ></blog-card>
        </div>
      </div>
    </div>
     <div class="updates">
        <div class="container">
          <h2>never miss a post. Register for your free account today!</h2>
          <router-link class="router-button" to="#">
            Register for FireBlogs <Arrow class="arrow arrow-light" />
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import BlogPost from "../components/BlogPost.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "hello",
        blogPost: "Lorem ipsum dolor sit amet.",
        welcomeScreen: true,
        photo: "coding",
      },
      blogPosts: [
        {
          title: " This is first blog",
          blogHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: " This is seconde blog",
          blogHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed:{
      blogCards() {
          return this.$store.state.blogCards
      }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
