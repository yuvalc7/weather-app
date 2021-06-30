<template>

  <div class="cards-group" >
    <card v-for="(card,index) in fiveDaysForecasts"
          :key="index"
          :temperature="card.Temperature"
          :icon="card.Day.Icon"
          :iconPhrase="card.Day.IconPhrase"
          :date="card.Date"
          :cardsComponent="true">

    </card>
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
      // cards:
      // [
      //     { Date: "2021-06-27T07:00:00+04:30",
      //     Day: {Icon: 2, IconPhrase: "Mostly cloudy", HasPrecipitation: false},
      //     EpochDate: 1624761000,
      //     Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     Night: {Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false},
      //     Sources: ["AccuWeather"],
      //     Temperature: {
      //     Maximum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 99,
      //     },
      //     Minimum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 65,
      //     },
      //     }
      //     },
      //     { Date: "2021-06-28T07:00:00+04:30",
      //     Day: {
      //     Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
      //     },
      //     EpochDate: 1624761000,
      //     Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     Night: {
      //     Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
      //     },
      //     Sources: ["AccuWeather"],
      //     Temperature: {
      //     Maximum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 99,
      //     },
      //     Minimum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 65,
      //     },
      //     }
      //     },
      //     { Date: "2021-06-29T07:00:00+04:30",
      //     Day: {
      //     Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
      //     },
      //     EpochDate: 1624761000,
      //     Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     Night: {
      //     Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
      //     },
      //     Sources: ["AccuWeather"],
      //     Temperature: {
      //     Maximum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 99,
      //     },
      //     Minimum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 65,
      //     },
      //     }
      //     },
      //     { Date: "2021-06-30T07:00:00+04:30",
      //     Day: {
      //     Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
      //     },
      //     EpochDate: 1624761000,
      //     Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     Night: {
      //     Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
      //     },
      //     Sources: ["AccuWeather"],
      //     Temperature: {
      //     Maximum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 99,
      //     },
      //     Minimum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 65,
      //     },
      //     }
      //     },
      //     { Date: "2021-07-01T07:00:00+04:30",
      //     Day: {
      //     Icon: 6, IconPhrase: "Mostly cloudy", HasPrecipitation: false
      //     },
      //     EpochDate: 1624761000,
      //     Link: "http://www.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     MobileLink: "http://m.accuweather.com/en/ir/isfahan/208194/daily-weather-forecast/208194?day=1&lang=en-us",
      //     Night: {
      //     Icon: 36, IconPhrase: "Intermittent clouds", HasPrecipitation:false
      //     },
      //     Sources: ["AccuWeather"],
      //     Temperature: {
      //     Maximum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 99,
      //     },
      //     Minimum: {
      //     Unit: "F",
      //     UnitType: 18,
      //     Value: 65,
      //     },
      //     }
      //     },
      // ]
    }
  }

}
</script>

<style scoped>

.cards-group{
  display: flex;
  width: 100%;
}

@media (max-width: 770px) {
  .cards-group{
    height: 55%;
    flex-direction: column;
  }

}

</style>