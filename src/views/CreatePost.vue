<template>
  <div class="create-post">
    <blog-photo-preview v-show="this.$store.state.blogPhotoPreview" />
    <loading v-show="loading" />
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p style="text-align:center"><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
        <div class="upload-file">
          <label for="blog-photo">Upload Cover Photo</label>
          <input type="file" ref="blogPhoto" @change="fileChange" id="blog-photo" accept=".png, .jpg, ,jpeg" />
          <button @click="openPreview" class="preview" :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }">
            Preview Photo
          </button>
          <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
        </div>
      </div>
      <div class="editor">
        <vue-editor placeholder="Write your blog title here..." :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler  @image-added="imageHandler" />
      </div>
      <div class="blog-actions">
        <button @click="uploadBlog">Publish Blog</button>
        <router-link class="router-button" :to="{ name: 'BlogPreview' }">Post Preview</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Quill from "quill";
import Loading from '../components/Loading.vue';
import BlogPhotoPreview from '../components/BlogPhotoPreview.vue';
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
import firebase from "firebase/app";
import "firebase/storage";
import db from "../firebase/firebaseInit";
export default {
  components: { Loading, BlogPhotoPreview },

  data() {
    return {
      file: null,
      error: null,
      errorMsg: null,
      loading: null,
      blogPhoto:null,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  computed:{
    profileId() {
      return this.$store.state.profileId
    },
     blogPhotoName() {
      return this.$store.state.blogPhotoName
    },
    blogTitle:{
      get() {
        return this.$store.state.blogTitle
      },
      set(payload){
        return this.$store.commit("NEW_BLOG_TITLE",payload)
      }
    },
     blogHTML:{
      get() {
        return this.$store.state.blogHTML
      },
      set(payload){
        return this.$store.commit("NEW_BLOG_POST",payload)
      }
    },
  },
  methods:{
    openPreview() {
      this.$store.commit("OPEN_PHOTO_PREVIEW");
    },
    uploadBlog() {
      if(this.blogHTML.length !== 0 && this.blogTitle.length !== 0 ){
        if(this.file) {
          this.loading = true
        const storageRef = firebase.storage().ref();
        const docRef = storageRef.child(`documents/blogPostPhotos/${this.$store.state.blogPhotoName}`);
        docRef.put(this.file).on(
         "state_changed",
         (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        }, async () => {
          const downloadUrl = await docRef.getDownloadURL();
          const timeStamp = await Date.now();
          const database = db.collection('blogPosts').doc();

          await database.set({
             blogID: database.id,
             blogHTML: this.blogHTML,
             blogCoverPhoto: downloadUrl,
             blogCoverPhotoName: this.blogPhotoName,
             blogTitle: this.blogTitle,
             profileId: this.profileId,
             date: timeStamp,
          })
          this.blogHTML ="",
          this.blogTitle = "",
           this.loading = false
           this.$router.push({name:'ViewBlog'})
         });
        }
         else{
        this.error = true
        this.errorMsg = "Please ensure you uploaded a blog cover photo"
        setTimeout(() => {
          this.error = false
        },2000)
       }
      }
       else{
        this.error = true
        this.errorMsg = "Please ensure Blog Post & BlogTile is filled"
        setTimeout(() => {
          this.error = false
        },2000)
      }
      
    },
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0]
      const fileName = this.file.name
      this.$store.commit('BLOG_PHOTO_NAME_CHANGE',fileName)
      this.$store.commit('CREATE_BLOG_URL',URL.createObjectURL(this.file))
    },

    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      );
    },
  }

}
</script>

<style lang="scss">
.create-post {
  position: relative;
  height: 100%;
  button {
    margin-top: 0;
  }
  .router-button {
    text-decoration: none;
    color: #fff;
  }
  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;
    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }
  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }
  // error styling
  .invisible {
    opacity: 0 !important;
  }
  .err-message {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;
    p {
      font-size: 14px;
    }
    span {
      font-weight: 600;
    }
  }
  .blog-info {
    display: flex;
    margin-bottom: 32px;
    input:nth-child(1) {
      min-width: 300px;
    }
    input {
      transition: 0.5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid #303030;
      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #303030;
      }
    }
    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;
      input {
        display: none;
      }
      .preview {
        margin-left: 16px;
        text-transform: initial;
      }
      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }
  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;
    .quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    }
    .ql-editor {
      padding: 20px 16px 30px;
    }
  }
  .blog-actions {
    margin-top: 32px;
    button {
      margin-right: 16px;
    }
  }
}
</style>