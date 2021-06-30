<template>
  <div class="wrapper-search" v-click-outside="closeSearchDropDown" @click="clickOutSide = false" >
    <div class="search-country-weather-input d-flex">
      <i class="bi bi-search search-icon"></i>
      <input class="form-control input-search" type="search" placeholder="Search City Name, e.g: Tel Aviv, Tokyo" v-model="searchTerm" >
    </div>
    <ul class="dropdown-cities" v-if="cities.length > 0 && (selectedCityTemp === '' || selectedCityTemp != selectedCity) && !clickOutSide">
      <li class="city-item" v-for="city in cities" :key="city.Key"
          @click="setSelectedCity(city.LocalizedName, city.Key , city.Country.LocalizedName) ;">
        {{city.LocalizedName}}
      </li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import vClickOutside from "v-click-outside";
import apiRequest from "../../api/request";
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

   this.searchTerm = this.searchTerm.replace(/[^A-Za-zs]/g,'');
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

// this.cities = [{Version: 1, Key: "318251", Type: "City", Rank: 11, LocalizedName: "Istanbul", Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "208194", Type: "City", Rank: 21, LocalizedName: "Isfahan" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "224032", Type: "City", Rank: 21, LocalizedName: "Incheon" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "255043", Type: "City", Rank: 21, LocalizedName: "Ibadan" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "318290", Type: "City", Rank: 21, LocalizedName: "Izmir" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "2333546", Type: "City", Rank: 25, LocalizedName: "Ili Prefecture" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "204411", Type: "City", Rank: 25, LocalizedName: "Indore" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "237597", Type: "City", Rank: 25, LocalizedName: "Iztapalapa" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "258278", Type: "City", Rank: 30, LocalizedName: "Islamabad" ,Country: {ID: "NG", LocalizedName: "Nigeria"}},
// {Version: 1, Key: "287994", Type: "City", Rank: 31, LocalizedName: "Iasi" ,Country: {ID: "NG", LocalizedName: "Nigeria"}}]


try {
  await apiRequest("locations/v1/cities/autocomplete" , this.searchTerm)
  .then(res => {
    this.cities = [...res.data];
  })
}catch (error) {
  console.log(error)
}
}, 2000),



closeSearchDropDown(){
this.clickOutSide = true;
},

setSelectedCity(selectedCity, cityKey, country){
this.selectedCityTemp = selectedCity;
this.selectedCity = selectedCity;
this.searchTerm = selectedCity;
this.$emit('citySelect',{selectedCity, cityKey, country});
},

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-search{
  margin: auto;
  position: relative;
}

.input-search{
  text-indent: 30px;
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
  background-color: white;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}


::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.city-item{
  padding-left:1rem ;
  list-style-type: none;
  cursor: pointer;
  line-height: 1.5rem;
  border-bottom:1px solid #ced4da ;
}
.search-icon{
  display: flex;
  margin: auto;
  font-size: 1.7rem;
  position: absolute;
  top: 7px;
  left: 5px;
}


</style>
