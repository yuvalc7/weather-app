<template>
  <div>
  <card  v-for="favoriteItem in favoritesItems" :key="favoriteItem.key" :cityKey="favoriteItem.key" :temperature="favoriteItem.temperature" :icon="favoriteItem.icon" :iconPhrase="favoriteItem.iconPhrase" :name="favoriteItem.name" :country="favoriteItem.country" :cardsComponent="false" ></card>
  </div>
</template>

<script>

import Card from "../homeScreen/Card";
import {mapState} from "vuex";

export default {
  name: "FavoritesScreen",

  computed: {
    ...mapState( ["favoritesItems"])
  },

  components:{
    Card
  },

  // data(){
  //   return{
  //     favoritesItems: [],
  //   }
  // },

  mounted() {
  this.$store.dispatch("getFavoritesItems");
  },

  methods:{

    // getCurrentCondition(key){
    //   currentCondition =  this.$store.dispatch('getCurrentCondition',key);
    // }

    }
}
</script>

<style scoped>

</style>