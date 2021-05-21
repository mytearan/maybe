<template>
  <div class="container">
    <h1>Latest Posts</h1>
    
    <div class="create-post">
      <label for="create-post">Car Model: </label>
      <input type="carModel" id="create-post" v-model="carModel" placeholder="Car Model">
      </div>
      <div class="create-post">
      <label for="create-post">Car Make: </label>
      <input type="carMaker" id="create-post" v-model="carMaker" placeholder="Car Maker">
      </div>
      <div class="create-post">
      <label for="create-post">Car Year: </label>
      <input type="carYear" id="create-post" v-model="carYear" placeholder="Car Year">
      </div>
      <div class="create-post">
      <label for="create-post">Car Trim: </label>
      <input type="carTrim" id="create-post" v-model="carTrim" placeholder="Car Trim">
      </div>
      <div class="create-post">
      <label for="create-post">Car Avialability: </label>
      <input type="carAv" id="create-post" v-model="carAv" placeholder="Is car available">
      </div>
      <button v-on:click="createPost">Post!</button>
    </div>

    
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
 data() {
   return {
     posts: [],
     error: '',
     carModel: '',
     carMaker: '',
     carYear: '',
     carTrim: '',
     carAv: '',
     carUser: ''
   }
 },
 async created() {
   try {
     this.posts = await PostService.getPosts();
   } catch(err) {
     this.error = err.message;
   }
 },
 methods: {
   async createPost() {
     await PostService.insertPost(this.carModel, this.carMaker, this.carYear, this.carTrim, this.carAv, this.carUser );
     this.posts = await PostService.getPosts();
   },
   async deletePost(id) {
     await PostService.deletePost(id);
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
  position: relative;
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
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

</style>
