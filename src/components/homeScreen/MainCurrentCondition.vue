<template>

  <div class="wrapper-location-info-icon">
    <img :src= "getImgUrl()" class="card-img" alt="...">
    <div class="location-info">
      <span> {{ cityName }}, </span>
      <span> {{ country }} </span>
      <div class="temperature">
      <span id="current-temp"> {{celsius ? currentCondition.Temperature.Metric.Value : currentCondition.Temperature.Imperial.Value }}</span>

      <span > {{ celsius ? currentCondition.Temperature.Metric.Unit : currentCondition.Temperature.Imperial.Unit }}</span>
      </div>
    </div>
  </div>


</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MainCurrentCondition",

  computed: {
    ...mapState( ["currentCondition" , "cityName" , "celsius" , "country"])
  },

  data(){
    return {
      // currentCondition:   {EpochTime: 1624877760,
      //   HasPrecipitation: false,
      //   IsDayTime: true,
      //   Link: "http://www.accuweather.com/en/tr/istanbul/318251/current-weather/318251?lang=en-us",
      //   LocalObservationDateTime: "2021-06-28T13:56:00+03:00",
      //   MobileLink: "http://m.accuweather.com/en/tr/istanbul/318251/current-weather/318251?lang=en-us",
      //   PrecipitationType: null,
      //   Temperature: {Metric: {Value: 31.6, Unit: "C", UnitType: 17}, Imperial: {Value: 89, Unit: "F", UnitType: 18}},
      //   // Imperial: {Value: 89, Unit: "F", UnitType: 18},
      //   //
      //   // Metric: {Value: 31.6, Unit: "C", UnitType: 17},
      //   // Unit: "C",
      //   // UnitType: 17,
      //   // Value: 31.6,
      //   WeatherIcon: 1,
      //   WeatherText: "Sunny",
      //   __proto__: Object,
      //   length: 1},
    }
  },


  methods:{
    getImgUrl() {
      var images = require.context('../../../public/icons/', false, /\.png$/)
      return images('./' + this.currentCondition.WeatherIcon + "-s.png")
    },
  }

}
</script>

<style scoped>


.wrapper-location-info-icon{
  display: flex;
  width: 40%;
}
.location-info{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10%;
  font-size: 35px;
}
.card-img{
  width: 150px;
  height: 100px;
}
.temperature{
  display: flex;
  font-size: 25px;
}
#current-temp:after{
  content:"° ";
  margin-right: 5px;
}

@media (max-width: 770px) {

  .wrapper-location-info-icon{
    align-items: center;
  }

  .location-info{
    font-size: 15px;
  }
  .temperature{
    font-size: 15px;
  }

  .card-img{
    width: 750px;
    height: 50px;
  }
}

</style>