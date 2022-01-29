<template>
  <div class="home">
   <blog-post :post="welcomeScreen"></blog-post>
   <blog-post v-for="(post,index) in BlogPosts" :key="index" :post="post"></blog-post>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
export default {
  name: "Home",
  components: {BlogPost},
  data() {
        return {
            welcomeScreen: {
                title:'hello',
                blogPost:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh lorem, lobortis vel dignissim ac, pulvinar pulvinar nunc. In finibus sapien eget varius fringilla. Phasellus auctor convallis gravida. Fusce pharetra dapibus lorem. Sed et elit quam. Nullam hendrerit neque felis, sit amet ornare nisl porta et. Donec mattis pulvinar leo vitae tristique.',
                welcomeScreen:true,
                photo:'coding'
            },
            BlogPosts:[
                {
                    title:' This is first blog',
                    blogHtml:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    blogCoverPhoto:'beautiful-stories'
                },
                 {
                    title:' This is seconde blog',
                    blogHtml:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    blogCoverPhoto:'designed-for-everyone'
                },
            ]
        }
    }
};
</script>


