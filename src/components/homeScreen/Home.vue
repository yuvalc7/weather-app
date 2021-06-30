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
    ...mapState( ["country","keyCitySelect", "fiveDaysForecasts", "currentCondition" ])
  },

  data(){
    return{

    }
  },

  mounted() {
    this.$store.dispatch('getForecastsFiveDays');
    this.$store.dispatch('getCurrentCondition' );
    this.$store.dispatch('getIsFavorite' );
  },

  methods:{

    setStoreVars(CityNameKeyAndCountry){
      this.$store.commit('setKeyNameCityAndCountry' , CityNameKeyAndCountry);
       this.$store.dispatch('getForecastsFiveDays');
       this.$store.dispatch('getCurrentCondition' );
       this.$store.dispatch('getIsFavorite' );
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container{
  height: fit-content;
  margin-top: 3% ;
  box-shadow: 0 2px 6px 2px rgb(0 0 0 / 18%), 0 1px 1px 0 rgb(0 0 0 / 41%), 0 1px 3px 0 rgb(0 0 0 / 48%);
  padding: 3% 3% 0 3%;
  border-radius: 6px;
  font-family: 'Ubuntu', sans-serif;
}

.search-bar{
  width: 80%;
  margin: auto;
}

.main-current-condition-section{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%;
}

@media (max-width: 700px) {
  .search-bar{
    width: 100%;
  }
}
</style>
