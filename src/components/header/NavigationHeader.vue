<template>
<div class="header-navigation">
  <nav class="navbar navbar-expand-lg navbar-light " :class="[themeLight ? 'bg-light' : 'bg-dark']">
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
    </div>
  </nav>
</div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "NavigationHeader",

  computed:{
    ...mapState(["themeLight"])
  },

  data(){
    return{
      homeScreenSelected:true,
    }
  },

};
</script>

<style scoped>
.header-navigation{
  direction: rtl;
  border-bottom: 1px solid rgba(54, 53, 53, 0.32);
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