<template>
<div class="header-navigation">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
<!--    <div class="container-fluid">-->
      <div class="d-flex" >
        <router-link
            exact
            to="/favorites"
            @click="selectedScreen('favorites')"
            :class="[homeScreenSelected ? 'btn btn-outline-primary' : 'btn btn-primary']"
        >
          Favorites
        </router-link>
        <router-link
            exact
            to="/"
            @click="selectedScreen('home')"
            :class="[homeScreenSelected ?  'btn btn-primary' :'btn btn-outline-primary']"
        >
          Home
        </router-link>
<!--      </div>-->
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "NavigationHeader",

  data(){
    return{
      homeScreenSelected:true,
    }
  },

  methods:{

    selectedScreen(selected){
      selected === 'home' ? this.homeScreenSelected = true: this.homeScreenSelected = false;
    }
  }
};
</script>

<style scoped>
.header-navigation{
  direction: rtl;
}
.btn{
  margin-left: 5%;
}
</style>