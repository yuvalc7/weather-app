<template>
  <div class="wrapper-search" v-click-outside="closeSearchDropDown" @click="clickOutSide = false" >
    <div class="search-country-weather-input d-flex">
      <i class="bi bi-search search-icon"></i>
      <input class="form-control input-search" type="search" placeholder="Please Search And Select City Name, e.g: Tel Aviv, Tokyo" v-model="searchTerm" >
    </div>
    <ul class="dropdown-cities" v-if="cities.length > 0 && (selectedCityTemp === '' || selectedCityTemp != selectedCity) && !clickOutSide">
      <li class="city-item" v-for="city in cities" :key="city.Key"
          @click="setSelectedCity(city.LocalizedName, city.Key , city.Country.LocalizedName) ;">
        {{city.LocalizedName}}
      </li>
    </ul>
    <div v-if="showToast" class="toast"  >
      <div class="toast-body">
        {{ errorMessage }}
      </div>
    </div>
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
clickOutSide: false,
  errorMessage:"",
  showToast:false
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

try {
  await apiRequest("locations/v1/cities/autocomplete" , this.searchTerm)
  .then(res => {
    if(res.data.length > 0) {
      this.cities = [...res.data];
    }else{
      if(this.searchTerm.length > 0) {
        this.errorMessage = 'the city not found! try search prefix of the city'
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false
        }, 7000)
      }
    }
  })
}catch (error) {
  this.errorMessage = 'the city not found! try search prefix of the city'
  this.showToast = true;
  setTimeout(()=>{this.showToast = false},7000)
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

.toast:not(.showing):not(.show) {
  opacity: 1;
}

.toast{
  position: fixed;
  top:10px;
  left: 0;
  right: 0;
  margin: auto;
  font-size:12px;
  background-color: #d71048;
  color: white;
  animation: fadeInAnimation ease 7s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  width: fit-content;

}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  40%{
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


</style>
