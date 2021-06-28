<template>
  <div>
  <div class="card-group" >
    <card v-for="card in cards" :key="card" :temperature="card.Temperature" :icon="card.Day.Icon"></card>
  </div>
  </div>
</template>

<script>

import Card from "./Card";
import {mapState} from "vuex";

export default {
  name: "Cards.Container",

  computed: {
    ...mapState( ["fiveDaysForecasts"])
  },

  components:{
    Card
  },

  data(){
    return{
       //cards:this.$store.state.fiveDaysForecasts.length;
      cards:
      [
          { Date: "2021-06-27T07:00:00+04:30",
          Day: {Icon: 2, IconPhrase: "Mostly cloudy", HasPrecipitation: false},
          EpochDate: 1624761000,
          Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
          MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
          Night: {Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false},
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
          { Date: "2021-06-28T07:00:00+04:30",
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
          { Date: "2021-06-29T07:00:00+04:30",
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
          { Date: "2021-06-30T07:00:00+04:30",
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
          { Date: "2021-06-31T07:00:00+04:30",
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
      ]
    }
  }

}
</script>

<style scoped>



@media (max-width: 700px) {
  .card-group{
    flex-direction: column;
  }
}

</style>