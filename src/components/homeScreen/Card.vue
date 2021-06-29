<template>
  <div class="card" @click="redirectToHome()" >
    <div class="wrapper-card-header">
    <h5 v-if="cardsComponent" class="card-title">{{currentDay}}</h5>
    <h3>{{name}}</h3>
    <h5>{{country}}</h5>
    <p class="card-text-icon-phrase"><small class="text-muted">{{iconPhrase}}</small></p>
    <img :src= "getImgUrl()" class="card-img-top" alt="...">
    <hr class="hr-line"/>
    </div>
    <div class="card-body">
      <div class="day-temp">
      <h3 class="temp">{{maxTemperature}}</h3>
      <h3>C</h3>
      </div>
      <div v-if="cardsComponent" class="night-temp">
          <small class="temp">{{minTemperature}}</small>
          <small class="temp-unit">C</small>
      </div>
      <!--      <h3 class="temp">{{minTemperature}}</h3>-->
      <!--      <h3>C</h3>-->
    </div>
  </div>
</template>

<script>

import moment from "moment";


export default {
  name: "Card",

  props:{
    cityKey:{
      type:String
    },
    name:{
      type:String
    },
    country:{
      type:String
    },
    iconPhrase:{
      type:String
    },
    icon:{
      type:Number
    },
    date:{
      type:String,
    },
    temperature:{
      type:Object,
    },
    cardsComponent:{
      type: Boolean
    }
  },

  data(){
    return{
      maxTemperature:"",
      minTemperature:"",
      currentDay:"",
    }
  },

  mounted() {
  this.setMaxAndMinTemperature();
  this.setDate();
    },

  methods:{

    redirectToHome(){

      if(!this.cardsComponent){
        this.$store.commit('setKeyNameCityAndCountry' , {
          selectedCity:this.name, cityKey:this.key, country:this.country
        });
        this.$router.push({ name: 'Home' });
      }

    },

    setMaxAndMinTemperature(){
      if(this.cardsComponent) {
        this.maxTemperature = this.temperature.Maximum.Unit === 'F' ? Math.floor((this.temperature.Maximum.Value - 32) / 1.800) : this.temperature.Maximum.Value;
        this.minTemperature = this.temperature.Minimum.Unit === 'F' ? Math.floor((this.temperature.Minimum.Value - 32) / 1.800) : this.temperature.Minimum.Value;
      }else{
        this.maxTemperature = this.temperature.Metric.Value;
      }
      },

    getImgUrl() {
      var images = require.context('../../../public/icons/', false, /\.png$/)
      return images('./' + this.icon + "-s.png")
    },

    setDate(){
      this.currentDay =  moment(this.date).format("dddd");
    }

  }

}



</script>

<style scoped>

.card{
  display: flex;
  align-items: center;
  padding: 3% 3% 2% 3% ;
  max-width: 200px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  margin-bottom: 5%;
}

.card:hover{
  transform: scale(1.01);

}

.wrapper-card-header{
  padding: 0 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-img-top{
  display: flex;
  width: 100px;
  height: 50px;
  margin: auto;
}

.hr-line{
  width: 100%;
}

.card-body{
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
}

.day-temp{
  display: flex;
  margin-bottom: 15%;
}

.temp:after{
  content:"° ";
  margin-right: 5px;
}

.night-temp{
  display: flex;
  justify-content: center;
}

@media (max-width: 700px) {
.card{
  min-width: 200px;
  max-width: 300px;
}
  .card-title{
    padding: 0 1rem 1rem 1rem;
  }
}

</style>