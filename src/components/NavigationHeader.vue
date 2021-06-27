<template>
<div class="header-navigation">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
<!--    <div class="container-fluid">-->
      <div class="d-flex" >
        <button
            type="button"
            @click="selectedScreen('favorites')"
            :class="[homeScreenSelected ? 'btn btn-outline-primary' : 'btn btn-primary']"
        >
          Favorites
        </button>
        <button
            type="button"
            @click="selectedScreen('home')"
            :class="[homeScreenSelected ?  'btn btn-primary' :'btn btn-outline-primary']"
        >
          Home
        </button>
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
      this.$emit('selected-screen' , this.homeScreenSelected);
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