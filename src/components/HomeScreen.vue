<template>
  <div class="container">
    <div class="search-bar" >
    <search-bar @citySelect="setStoreVars"/>
    </div>
    <div class="main-container">
    <div class="main-current-condition-section">
      <main-current-condition/>
      <AddToFavorites/>
    </div>
    <div class="cards-container">
       <cards/>
    </div>
    </div>
  </div>
</template>

<script>


import SearchBar from "./SearchBar";
import MainCurrentCondition from "./MainCurrentCondition";
import AddToFavorites from "./AddToFavorites";
import Cards from "./Cards.Container"
import {mapState} from "vuex";

export default {
  name: 'HomeScreen',

  components:{SearchBar, MainCurrentCondition, AddToFavorites, Cards},

  computed: {
    ...mapState( ["keyCitySelect", "fiveDaysForecasts", "currentCondition" ])
  },

  data(){
    return{

    }
  },


  mounted() {

  },



  methods:{

    setStoreVars(CityNameAndKey){
     // console.log(CityName, cityKey)
      this.$store.commit('setKeyAndNameCitySelect' , CityNameAndKey);
      // this.$store.dispatch('getForecastsFiveDays');
      // this.$store.dispatch('getCurrentCondition');
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container{
  height: fit-content;
  margin-top: 3% ;
}
.main-current-condition-section{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%;
}
</style>
