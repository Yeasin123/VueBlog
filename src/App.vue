<template>
  <div class="app-wrapper">
    <div class="app">
      <navigation></navigation>
      <router-view />
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import MainFooter from './components/MainFooter.vue';

import Navigation from './components/Navigation.vue';
export default {
  name: "app",
  components: {Navigation, MainFooter},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>
