<template>
  <div class="wrapper-search" v-click-outside="closeSearchDropDown" >
    <div class="search-country-weather-input d-flex">
      <input class="form-control" type="search" placeholder="Search City" v-model="searchTerm">
    </div>
    <ul class="dropdown-cities" v-if="cities.length > 0 && (selectedCityTemp === '' || selectedCityTemp != selectedCity)">
      <li class="city-item" v-for="city in cities" :key="city.Key" @click="setSelectedCity(city.LocalizedName, city.Key) ;">
        {{city.LocalizedName}}
      </li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import vClickOutside from "v-click-outside";
//import apiRequest from "../api/request";
export default {
name: 'SearchBar',



directives: {
clickOutside: vClickOutside.directive
},

data(){
return{
searchTerm:"",
cities:[],
selectedCity: "",
selectedCityTemp: "",
clickOutSide: false
}
},


mounted() {

},

watch:{
searchTerm: function(){
if(this.searchTerm.length > 0  ){
  this.selectedCityTemp = this.searchTerm
  if(this.selectedCity != this.selectedCityTemp){
    this.debouncedQuery();
  }
}else{
  this.cities = [];
}
}
},

methods:{
debouncedQuery: _.debounce(async function() {



this.cities = [{Version: 1, Key: "318251", Type: "City", Rank: 11, LocalizedName: "Istanbul"},
{Version: 1, Key: "208194", Type: "City", Rank: 21, LocalizedName: "Isfahan"},
{Version: 1, Key: "224032", Type: "City", Rank: 21, LocalizedName: "Incheon"},
{Version: 1, Key: "255043", Type: "City", Rank: 21, LocalizedName: "Ibadan"},
{Version: 1, Key: "318290", Type: "City", Rank: 21, LocalizedName: "Izmir"},
{Version: 1, Key: "2333546", Type: "City", Rank: 25, LocalizedName: "Ili Prefecture"},
{Version: 1, Key: "204411", Type: "City", Rank: 25, LocalizedName: "Indore"},
{Version: 1, Key: "237597", Type: "City", Rank: 25, LocalizedName: "Iztapalapa"},
{Version: 1, Key: "258278", Type: "City", Rank: 30, LocalizedName: "Islamabad"},
{Version: 1, Key: "287994", Type: "City", Rank: 31, LocalizedName: "Iasi"}]


// try {
//   await apiRequest("locations/v1/cities/autocomplete" , this.searchTerm)
//   .then(res => {
//     this.cities = [...res.data];
//   })
// }catch (error) {
//   console.log(error)
// }
}, 2000),



closeSearchDropDown(){
this.clickOutSide = true;
},

setSelectedCity(selectedCity, cityKey){
this.selectedCityTemp = selectedCity;
this.selectedCity = selectedCity;
this.searchTerm = selectedCity;
this.$emit('citySelect',{selectedCity, cityKey});
},
// async getCurrentCityWeather(cityKey) {
//
//
// // data.DailyForecasts
//

//
// // try {
// //    await apiRequest(`forecasts/v1/daily/5day/${cityKey}`)
// //    .then(res => {
// //      console.log(res.data);
// //      //this.cities = [...res.data];
// //    })
// //  }catch (error) {
// //    console.log(error)
// //  }
// }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-search{
  margin: auto;
  position: relative;
}
.search-country-weather-input{
  position: relative;

}
.dropdown-cities{
  position: absolute;
  width: 100%;
  border: 1px solid #ced4da;
  border-top: 0;
  max-height: 100px;
  padding-left:0 ;
  overflow-y:scroll ;
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
}
.city-item{
  padding-left:1rem ;
  list-style-type: none;
  cursor: pointer;
  line-height: 1.5rem;
  border-bottom:1px solid #ced4da ;
}
.search-icon{
  position: absolute;
  right: 10%;
  bottom: 15%;
}
</style>
