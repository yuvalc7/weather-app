<template>
<div class="container-favorites">
  <div class="favorite-icon" @click="addCityToFavorites()">
    <i  :class="[ isFavorite ?  'bi bi-heart-fill' :'bi bi-heart']"></i>
      <div v-if="showToast" class="toast"  >
        <div class="toast-body">
          {{ toastMsg }}
        </div>

      </div>
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


</style>