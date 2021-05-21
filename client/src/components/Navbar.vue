<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand" >Car Rental Service</router-link>
  <!--<a class="navbar-brand" href="#">Navbar</a>-->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <!--<a class="nav-link" href="#">-->
        <router-link to="/" class="nav-link">Home 
            <span class="sr-only">(current)</span>
            <!--</a>-->
            </router-link>
      </li>
      <li class="nav-item" v-if="user.roll == 'Admin'">
        
        <router-link to="/addcar" class="nav-link">add car</router-link>
      </li>
      <li class="nav-item" v-if="user.roll == 'Admin'">
        
        <router-link to="/cars" class="nav-link">Car Inventory</router-link>
      </li> 

      <li class="nav-item" v-if="user.roll == 'Basic'">
        
        <router-link to="/rentals" class="nav-link">Car Rentals</router-link>
      </li> 
      <li class="nav-item" v-if="user.roll == 'Basic'">
        
        <router-link to="/addrental" class="nav-link">Car Add Rental</router-link>
      </li> 

      <li class="nav-item" v-if="!isLoggedIn">
        
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item" v-if="!isLoggedIn">
        
        <router-link to="/register" class="nav-link">Register</router-link>
      </li>
      <li class="nav-item" v-if="isLoggedIn">
        
        <router-link to="/profile" class="nav-link">Profile</router-link>
      </li>
      <li class="nav-item" v-if="isLoggedIn">
        
        <a to="/logout" class="nav-link" @click.prevent="logoutUser">Logout</a>
      </li>
      
      <!--<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>-->
      <!--<li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>-->
    </ul>
    <!--<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>-->
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
computed:{
  ...mapGetters(["isLoggedIn"]),
  ...mapGetters(["user"])
},
methods: {
  ...mapActions(['logout']),
  logoutUser(){
    this.logout();
  },
  ...mapActions(["getprofile"]),
  getProfile(){
    this.getprofile();
  }

}
}
</script>

<style>

</style>