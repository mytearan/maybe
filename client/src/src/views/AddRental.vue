<template>
<div class="container">
  <div class="addcar">
    <h1>Select one of the free Reservations from below</h1>
      <hr>
  </div>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="updatePost(post._id)"
        >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
         <div class="create-post">
      <label for="create-post">Car Model: </label>
      <p class="text">{{ post.carModel }}</p>
      </div>
       <div class="create-post">
      <label for="create-post">Car Make: </label>
      <p class="text">{{ post.carMaker }}</p>
      </div>
       <div class="create-post">
      <label for="create-post">Car Year: </label>
      <p class="text">{{ post.carYear }}</p>
      </div>
       <div class="create-post">
      <label for="create-post">Car Trim: </label>
      <p class="text">{{ post.carTrim }}</p>
      </div>
       <div class="create-post">
      <label for="create-post">Car Availability: </label>
      <p class="text">{{ post.carAv }}</p>
      </div>
      
      </div>
  </div>
</div>
</template>

<script>

import PostService from '../PostService';
import{ mapActions, mapGetters } from 'vuex';

export default {
  computed:mapGetters(['user']),
  name: 'PostComponent',
  data() {
   return {
     posts: [],
     error: '',
     carModel: '',
     carMaker: '',
     carYear: '',
     carTrim: '',
     carAv: ''
   }
 },
 async created() {
   this.getProfile();
   try {
     this.posts = await PostService.getPosts();
   } catch(err) {
     this.error = err.message;
   }
 },
 methods: {
    ...mapActions(['getProfile']),
   async createPost() {
     await PostService.insertPost(this);
     this.posts = await PostService.getPosts();
   },
   async deletePost(id) {
     await PostService.deletePost(id);
     this.posts = await PostService.getPosts();
   },
   async updatePost(id) {
     await PostService.updatePost(id)
     this.posts = await PostService.getPosts();
   }

 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: center;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
   display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

</style>

