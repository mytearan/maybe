<template>
  <div class="register">
      <h2>
          Register
      </h2>
      <div class="row">
          <div class="card mx-auto">
              <div class="card-header text-white bg-primary">
                  <h4>Register</h4>
              </div>
              <div class="card-body">
                  <form @submit.prevent="registerUser">
                      <div class="form-group">
                          <label for="username">Username</label>
                          <input 
                          id="username" 
                          type="username" 
                          placeholder="Username" 
                          name="username" 
                          v-model="username" 
                          class="form-control"
                          >
                      </div>
                      <div class="form-group">
                          <label for="name">Name</label>
                          <input 
                          id="name" 
                          type="name" 
                          placeholder="Name" 
                          name="name" 
                          v-model="name" 
                          class="form-control"
                          >
                      </div>
                      <div class="form-group">
                          <label for="email">Email</label>
                          <input 
                          id="email" 
                          type="email" 
                          placeholder="Email" 
                          name="email" 
                          v-model="email" 
                          class="form-control"
                          >
                      </div>

                      <div class="form-group">
                          <label for="password">Password</label>
                          <input 
                          type="password" 
                          class="form-control" 
                          placeholder="Password" 
                          name="password" 
                          id="password" 
                          v-model="password"
                          >
                      </div>

                        <div class="form-group">
                          <label for="confirm_password">Confirm Password</label>
                          <input 
                          type="password" 
                          class="form-control" 
                          placeholder="Confirm Password" 
                          name="confirm_password" 
                          id="confirm_password" 
                          v-model="confirm_password"
                          >
                      </div>
                     <div class="form-group">
                          <label for="roll">Role</label>
                          <select 
                          type="password" 
                          class="form-control" 
                          placeholder="Confirm Password" 
                          name="roll" 
                          id="roll" 
                          v-model="roll"
                          >
                          <option disabled value="">Please select one</option>
                          <option>Admin</option>
                          <option>Basic</option>
                          </select>
                      </div>
                      <button class="btn btn-primary" style="margin:5px">Register</button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <router-link to="/login" class="card-link">Already have an account</router-link>
                  </form>
              </div>
          </div>      
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
      return {
          username: "",
          password: "",
          confirm_password: "",
          name: "",
          email: "",
          roll: ""
      };
  },
  methods:{
      ...mapActions(["register"]),
      registerUser(){
          let user = {
              username: this.username,
              password: this.password,
              confirm_password: this.confirm_password,
              email: this.email,
              name: this.name,
              roll: this.roll
          }
          this.register(user).then(res => {
              if(res.data.success){
                  this.$router.push("login");
              }
          });
      }
  },
  name: 'Profile',
  components: {}
};
</script>

<style>
.card {
    width: 60%;
    border-radius: 5;
}
.btn {
    border-radius: 5;
}
.form-control {
    border-radius: 5;
}
</style>