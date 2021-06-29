<template>
  <div v-if="favoriteItems.length" class="favorites-cards">
  <card  v-for="favoriteItem in favoriteItems" :key="favoriteItem.key" :cityKey="favoriteItem.key" :temperature="favoriteItem.temperature" :icon="favoriteItem.icon" :iconPhrase="favoriteItem.iconPhrase" :name="favoriteItem.name" :country="favoriteItem.country" :cardsComponent="false" ></card>
  </div>
  <div class="empty-favorites-list container" v-else>
    <h3>
      There seems to be no favorite items available to display!
      Please search for your favorite locations and press on the ❤ icon to add to your favorites list.
    </h3>
  </div>
</template>

<script>

import Card from "../homeScreen/Card";
import {mapState} from "vuex";

export default {
  name: "FavoriteScreen",

  computed: {
    ...mapState( ["favoriteItems"])
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
  //this.$store.dispatch("getFavoritesItems");
  },

  methods:{

    // getCurrentCondition(key){
    //   currentCondition =  this.$store.dispatch('getCurrentCondition',key);
    // }

    }
}
</script>

<style scoped>

.empty-favorites-list{
  padding: 0 5%
}

</style>