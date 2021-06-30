<template>

  <div class="wrapper-location-info-icon">
    <img :src= "getImgUrl()" class="card-img" alt="...">
    <div class="location-info">
      <span :style="[themeLight ? {'color' : 'black' } : { 'color' : 'white' }]"> {{ cityName }}, </span>
      <span :style="[themeLight ? {'color' : 'black' } : { 'color' : 'white' }]"> {{ country }} </span>
      <div class="temperature">
      <span :style="[themeLight ? {'color' : 'black' } : { 'color' : 'white' }]" id="current-temp"> {{celsius ? currentCondition.Temperature.Metric.Value : currentCondition.Temperature.Imperial.Value }}</span>
      <span :style="[themeLight ? {'color' : 'black' } : { 'color' : 'white' }]" > {{ celsius ? currentCondition.Temperature.Metric.Unit : currentCondition.Temperature.Imperial.Unit }}</span>
      </div>
    </div>
  </div>


</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MainCurrentCondition",

  computed: {
    ...mapState( ["currentCondition" , "cityName" , "celsius" , "country", "themeLight"])
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