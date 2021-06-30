<template>
<div class="container-favorites">
  <div class="favorite-icon" @click="addCityToFavorites()">
    <i  :class="[  isFavorite ?  'bi bi-heart-fill' :'bi bi-heart']"></i>
      <div v-if="showToast" class="toast"  >
        <div class="toast-body">
          {{ toastMsg }}
        </div>

      </div>
  </div>
  <div class="toggle-measurement">
  <span>°C</span>
  <span class="MuiSwitch-root" @click="toggle()" :class="{'flipped': toggleMeasurement}" >
      <span class="MuiButtonBase-root MuiIconButton-root jss7 MuiSwitch-switchBase" >
        <span class="MuiIconButton-label"><input class="jss10 MuiSwitch-input" type="checkbox" value="">
          <span class="MuiSwitch-thumb"></span></span><span class="MuiTouchRipple-root"></span></span>
      <span class="MuiSwitch-track"></span></span>
  <span>°F</span>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AddToFavorites",

  computed: {
    ...mapState( ["cityName","keyCitySelect" , "isFavorite"])
  },

  data() {
    return {
      addToFavorites: false,
     // cityName: this.$store.state.cityName,
      toastMsg:"",
      showToast:false,
      toggleMeasurement:false,

    }
  },

  // mounted() {
  //  this.checkIfInFavorites();
  // },

  methods:{

  // checkIfInFavorites(){
  //     if(localStorage.getItem("favorites").length){
  //       console.log("HETR473")
  //       this.addToFavorites = (JSON.parse(localStorage.getItem("favorites")).some(item => {return item.key == this.keyCitySelect}))
  //       // if(JSON.parse(localStorage.getItem("favorites")).some(item => {return item.key == this.keyCitySelect})){
  //       //   console.log("HETR")
  //       //   this.addToFavorites = true;
  //       // }
  //
  //     }
  // },

    addCityToFavorites(){

      if(!this.isFavorite){
        this.$store.dispatch('addOrRemoveFavorites',true);
        this.$store.dispatch('getIsFavorite' );
        this.toastMsg = "added to favorites";
      }else{
        this.$store.dispatch('addOrRemoveFavorites',false);
        this.$store.dispatch('getIsFavorite' );
        this.toastMsg = "removed from favorites";
      }
      this.showToast = true;
      setTimeout(()=>{this.showToast = false},2000)
    },

    toggle(){
      this.toggleMeasurement = !this.toggleMeasurement;
      this.$store.dispatch("getTemperature" , !this.toggleMeasurement);
    }
  }
}
</script>

<style scoped>
.container-favorites{
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

}

.favorite-icon{
  font-size: 4rem;
  margin-right: 10% ;
  /*position: relative;*/
  padding: 0 10%;
}

.toast:not(.showing):not(.show) {
  opacity: 1;
}

.toast{
  position: fixed;
  top:40px;
  left: 0;
  right: 0;
  margin: auto;
  /*position: absolute;*/
  /*right: 50%;*/
  /*bottom: -20%;*/
  font-size:12px;
  background-color: #673ab7;
  color: white;
  /*z-index: 1;*/
  animation: fadeInAnimation ease 2s;
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



.bi-heart-fill{
  color: red;
}

.btn-success{
  padding: 2%;
}


@media (max-width: 770px) {
  .favorite-icon{
    font-size: 2rem;
    font-size: 2rem;
    width: 75%;
    direction: rtl;
  }
  /*.toast{*/
  /*  width: fit-content !important;*/
  /*  right: 15%;*/
  /*  margin: 0 10px;*/
  /*  top: 80%;*/
  /*  height: fit-content;*/
  /*}*/
  .btn-success{
    padding: 2%;
    font-size: 12px;
  }
  /*.toast{*/
  /*  left: 25%;*/
  /*  width: 50%;*/
  /*}*/
}

@media (max-width: 350px){
  .container-favorites{
    flex-direction: column;
  }

}

.toggle-measurement{
  display: contents;
}
.MuiSwitch-root{
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
}
.MuiSwitch-root:hover{
  cursor: pointer;
}
.MuiSwitch-switchBase {
  top: 8px;
  left: 10px;
  color: #fafafa;
  z-index: 1;
  position: absolute;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.flipped{
  transform: scaleX(-1);
}
.flipped .MuiSwitch-track{
  background-color: red !important;
}

.MuiIconButton-label {
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
.MuiSwitch-thumb {
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  background-color: currentColor;
}
.MuiTouchRipple-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
}
.MuiSwitch-track {
  width: 100%;
  height: 100%;
  opacity: 0.38;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #000;
}
 .jss10 {
   top: 0;
   left: 0;
   width: 100%;
   cursor: inherit;
   height: 100%;
   margin: 0;
   opacity: 0;
   padding: 0;
   z-index: 1;
   position: absolute;
 }
.MuiSwitch-input {
  left: -100%;
  width: 300%;
}
</style>