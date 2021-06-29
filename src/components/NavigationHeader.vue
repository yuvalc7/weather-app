<template>
<div class="header-navigation">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
<!--    <div class="container-fluid">-->
      <div class="d-flex" >
        <router-link
            exact
            to="/favorites"
            class="btn btn-outline-primary"
        >
          Favorites
        </router-link>
        <router-link
            exact
            to="/"
            class="btn btn-outline-primary"
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
      console.log("cdcdmcdm")
      selected === 'home' ? this.homeScreenSelected = true: this.homeScreenSelected = false;
    }
  }
};
</script>

<style scoped>
.header-navigation{
  direction: rtl;
  border-bottom: 1px solid rgba(54, 53, 53, 0.32);
}

.active{
  background-color: #0d6efd;
}

.btn{
  margin-right: 10%;
  box-shadow:  0 0 0 0 !important;
}

.navbar{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>