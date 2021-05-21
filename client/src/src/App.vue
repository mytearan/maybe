<template>
  <div id="app">
    <Navbar />
    <br>
    <br>
    <div class="contianer">
      <Errors v-if="error" :msg="error" />
    <!--<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/> 
  </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import  Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";
export default {
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["error"])
  }
};
</script>

<style>

</style>
