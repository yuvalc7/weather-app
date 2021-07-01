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