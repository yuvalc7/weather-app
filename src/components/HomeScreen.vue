<template>
  <div class="container">
    <div class="wrapper-search">
    <div class="search-country-weather-input d-flex">
      <input class="form-control" type="search" placeholder="Search City" v-model="searchTerm">
<!--      <i class="bi bi-search search-icon"></i>-->
    </div>
    <ul class="dropdown-cities" v-if="cities.length > 0 && selectedCity === ''">
      <li class="city-item" v-for="city in cities" :key="city.Key" @click="setSelectedCity(city.LocalizedName) ; getCurrentCityWeather(city.Key)">
        {{city.LocalizedName}}
      </li>
    </ul>
    </div>
    <div class="weather-result-container">

    </div>
  </div>
</template>

<script>

import _ from "lodash";
import apiRequest from "@/api/request";

export default {
  name: 'HomeScreen',
  // props: {
  //   msg: String
  // }
  data(){
    return{
      searchTerm:"",
      cities:[],
      selectedCity: "",
    }
  },

  mounted() {

  },

  watch:{
    searchTerm: function(){
      if(this.searchTerm.length > 0){
        this.debouncedQuery();
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

    setSelectedCity(selectedCity){
       this.selectedCity = selectedCity;
    },
    async getCurrentCityWeather(cityKey) {
      // data.DailyForecasts

      [{ Date: "2021-06-27T07:00:00+04:30",
      Day: {
          Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
       },
      EpochDate: 1624761000,
      Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      Night: {
        Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
      },
      Sources: ["AccuWeather"],
      Temperature: {
        Maximum: {
          Unit: "F",
          UnitType: 18,
          Value: 99,
        },
        Minimum: {
          Unit: "F",
          UnitType: 18,
          Value: 65,
        },
      }
      },
        { Date: "2021-06-27T07:00:00+04:30",
          Day: {
            Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
          },
          EpochDate: 1624761000,
          Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
          MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
          Night: {
            Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
          },
          Sources: ["AccuWeather"],
          Temperature: {
            Maximum: {
              Unit: "F",
              UnitType: 18,
              Value: 99,
            },
            Minimum: {
              Unit: "F",
              UnitType: 18,
              Value: 65,
            },
          }
        },
        { Date: "2021-06-27T07:00:00+04:30",
        Day: {
          Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
        },
        EpochDate: 1624761000,
        Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
        MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
        Night: {
          Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
        },
        Sources: ["AccuWeather"],
        Temperature: {
          Maximum: {
            Unit: "F",
            UnitType: 18,
            Value: 99,
          },
          Minimum: {
            Unit: "F",
            UnitType: 18,
            Value: 65,
          },
        }
      },
      { Date: "2021-06-27T07:00:00+04:30",
        Day: {
          Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
        },
        EpochDate: 1624761000,
        Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
        MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
        Night: {
          Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
        },
        Sources: ["AccuWeather"],
        Temperature: {
          Maximum: {
            Unit: "F",
            UnitType: 18,
            Value: 99,
          },
          Minimum: {
            Unit: "F",
            UnitType: 18,
            Value: 65,
          },
        }
      },
        { Date: "2021-06-27T07:00:00+04:30",
        Day: {
          Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
        },
        EpochDate: 1624761000,
        Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
        MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
        Night: {
          Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
        },
        Sources: ["AccuWeather"],
        Temperature: {
          Maximum: {
            Unit: "F",
            UnitType: 18,
            Value: 99,
          },
          Minimum: {
            Unit: "F",
            UnitType: 18,
            Value: 65,
          },
        }
      },]

     // try {
     //    await apiRequest(`forecasts/v1/daily/5day/${cityKey}`)
     //    .then(res => {
     //      console.log(res.data);
     //      //this.cities = [...res.data];
     //    })
     //  }catch (error) {
     //    console.log(error)
     //  }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-search{
  width: fit-content;
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
