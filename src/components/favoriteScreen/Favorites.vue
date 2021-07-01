<template>
  <div class="wrapper">
    <h1 class="headline" :style="[themeLight ? {'color' : 'black'} : {'color' : 'white'}]">
      Favorites
      <i class="fas fa-heart heart-icon" style="color: salmon;"></i>
    </h1>
   <div v-if="errorMessage.length > 0">
     <ErrorMessage/>
   </div>
  <div v-if="loading  && errorMessage.length < 1" class="loader">
    <Loader/>
  </div>
  <div v-if="!loading && errorMessage.length < 1">
    <div v-if="favoriteItems.length" class="favorites-cards">
      <card  v-for="favoriteItem in favoriteItems"
             :key="favoriteItem.key"
             :cityKey="favoriteItem.key"
             :temperature="favoriteItem.temperature"
             :icon="favoriteItem.icon"
             :iconPhrase="favoriteItem.iconPhrase"
             :name="favoriteItem.name"
             :country="favoriteItem.country"
             :cardsComponent="false" >
      </card>
    </div>
    <div class="empty-favorites-list container" v-else>
      <h3>
        There seems to be no favorite items available to display!
        Please search for your favorite locations and press on the ❤ icon to add to your favorites list.
      </h3>
    </div>
  </div>
  </div>
</template>

<script>

import Card from "../homeScreen/Card";
import {mapState} from "vuex";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";
export default {
  name: "FavoriteScreen",

  computed: {
    ...mapState( ["favoriteItems", 'loading', "errorMessage", "themeLight"])
  },

  components:{
    Card,
    ErrorMessage,
    Loader
  },

  data(){
    return{
      showError:false
    }
  },

  mounted() {
  this.$store.dispatch("getFavoriteItems");

  },


}
</script>

<style scoped>

.favorites-cards{
  display: flex;
  width: 100%;
}

.empty-favorites-list{
  padding: 0 5%
}

.headline{
  display: flex;
  align-items: center;
  justify-content: center;
}
.heart-icon{
  margin-left: 7px;
}

@media (max-width: 770px) {
  .favorites-cards{
    height: 55%;
    flex-direction: column;
  }
}

</style>