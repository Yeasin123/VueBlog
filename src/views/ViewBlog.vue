<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2></h2>
      <h4>Posted on: </h4>
      <img src="" alt="" />
      <div class="post-content ql-editor"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      
    };
  },
   mounted() {
   
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
}
</style>