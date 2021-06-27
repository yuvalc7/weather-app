<template>
  <div class="container-fluid" id="app">
    <div class="header">
    <NavigationHeader @selected-screen="setSelectedScreen"/>
    </div>
    <div class="body">
    <Home-screen v-if="showHomeScreen"/>
    <favorites-screen v-else/>
    </div>
  </div>
</template>

<script>
import HomeScreen from './components/HomeScreen.vue'
import NavigationHeader from "@/components/NavigationHeader";
import FavoritesScreen from "@/components/FavoritesScreen";

export default {
  name: 'App',
  components: {
    FavoritesScreen,
    NavigationHeader,
    HomeScreen
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
