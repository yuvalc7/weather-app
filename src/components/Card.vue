<template>
  <div class="card">
    <img :src= "getImgUrl()" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">{{maxTemperature}}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props:{
    icon:{
      type:Number,
      default: 1
    },
    temperature:{
      type:Object,
    }
  },

  data(){
    return{
      maxTemperature:"",
      minTemperature:""
    }
  },

  mounted() {
  this.setMaxAndMinTemperature();
    },

  methods:{

    setMaxAndMinTemperature(){
      this.maxTemperature = this.temperature.maximum.Unit === 'F' ? ((this.temperature.maximum.Value -32) / 1.800) : this.temperature.maximum.Value;
      this.minTemperature = this.temperature.minimum.Unit === 'F' ? ((this.temperature.minimum.Value -32) / 1.800) : this.temperature.minimum.Value;
      console.log(this.maxTemperature)
      },

    getImgUrl() {
      var images = require.context('../../public/icons/', false, /\.png$/)
      return images('./' + this.icon + "-s.png")
    }

  }

}
</script>

<style scoped>



.card-img-top{
  width: 200px;
  height: 150px;
  margin: auto;
}

@media (max-width: 700px) {
  .card-img-top{
    width: 150px;
    height: 100px;
  }
}

</style>