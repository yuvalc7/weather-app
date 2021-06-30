<template>
  <div>
    <div v-if="showError" class="error-message">
      {{ errorMessage }}
    </div>
  <div v-if="loading  && !showError" class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div v-if="!loading && !showError">
    <div v-if="favoriteItems.length" class="favorites-cards">
      <card  v-for="favoriteItem in favoriteItems" :key="favoriteItem.key" :cityKey="favoriteItem.key" :temperature="favoriteItem.temperature" :icon="favoriteItem.icon" :iconPhrase="favoriteItem.iconPhrase" :name="favoriteItem.name" :country="favoriteItem.country" :cardsComponent="false" ></card>
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

export default {
  name: "FavoriteScreen",

  computed: {
    ...mapState( ["favoriteItems", 'loading', "errorMessage"])
  },

  components:{
    Card
  },

  data(){
    return{
      //favoritesItems: [],
      //loading: true,
      showError:false
    }
  },

  mounted() {
  this.$store.dispatch("getFavoriteItems");
  if(this.errorMessage.length){
    this.showError = true;
  }
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

@media (max-width: 770px) {
  .favorites-cards{
    height: 55%;
    flex-direction: column;
  }

}


.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 40px;
  width: 40px;
  transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
  animation: animate 1.2s ease-in-out infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    height: 40px;
    width: 40px;
  }
  65% {
    height: 70px;
    width: 70px;
  }
}

span {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  animation: rotate 1.2s linear both infinite;
}

@keyframes rotate {
  0%,
  30% {
    transform: rotate(0);
  }
  65% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

span:nth-child(1) {
  top: 0;
  left: 0;
  background: #55d462;
}

span:nth-child(2) {
  top: 0;
  right: 0;
  background: #8675e5;
}

span:nth-child(3) {
  bottom: 0;
  left: 0;
  background: #d84c77;
}

span:nth-child(4) {
  bottom: 0;
  right: 0;
  background: #fd9a3f;
}



</style>