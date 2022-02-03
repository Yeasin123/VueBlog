<template>
  <div class="reset-password">
    <modal v-if="modalActive" :modalMessage="modalMessage" @colse-modal="modalClose"></modal>
    <loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
            <div v-show="errors" class="error">{{errorMessage}}</div>
        </div>
        <button @click.prevent="passwordReset">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Loading from '../components/Loading.vue';
import Modal from '../components/Modal.vue';
import firebase from "firebase/app"
import "firebase/auth"

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
      errorMessage:"",
      errors:null
    };
  },
  components: {
    email,
    Modal,
    Loading

  },
    methods: {
      modalClose() {
      this.modalActive = false
      this.email=""
      this.$router.push({name:'Login'})
   },
   passwordReset() {
      if(this.email !== "") {
         this.loading=true
         firebase.auth().sendPasswordResetEmail(this.email)
       .then(() => {
         this.modalActive = true
         this.loading = false
         this.modalMessage = "If your email is valid! then check your email to reset the password"
      })
      .catch((error) => {
        this.loading = false
        this.modalActive = true
        this.modalMessage = error.message
      })
      }
      else{
        this.errors = true
         this.errorMessage = "Please enter your email"
      }
   }
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>