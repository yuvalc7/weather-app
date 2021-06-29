<template>
  <div class="container-fluid" id="app">
    <div class="header">
    <NavigationHeader @selected-screen="setSelectedScreen"/>
    </div>
    <div class="body">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavigationHeader from "@/components/NavigationHeader";

export default {
  name: 'App',
  components: {
    NavigationHeader,
  },

  data(){
    return{
       showHomeScreen: true
    }
  },

  methods:{

    setSelectedScreen(isHomeScreen){
      this.showHomeScreen = isHomeScreen;
    }

  }
}
</script>

<style>
.header{
  margin-bottom: 3%;
}
</style>
