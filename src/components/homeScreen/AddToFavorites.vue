<template>
<div class="container-favorites">
  <div class="favorite-icon" @click="addCityToFavorites()">
    <i  :class="[  addToFavorites ?  'bi bi-heart-fill' :'bi bi-heart']"></i>
  </div>
  <transition name="fade">
  <div v-if="showToast" class="toast"  >
    <div class="toast-body">
     {{cityName}} {{ toastMsg }}
    </div>

  </div>
  </transition>

</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AddToFavorites",

  computed: {
    ...mapState( ["cityName","keyCitySelect"])
  },

  data() {
    return {
      addToFavorites: false,
     // cityName: this.$store.state.cityName,
      toastMsg:"",
      showToast:false
    }
  },

  mounted() {
   this.checkIfInFavorites();
  },

  methods:{

  checkIfInFavorites(){
      if(localStorage.getItem("favorites").length){
        if(JSON.parse(localStorage.getItem("favorites")).some(item => item.key === this.keyCitySelect)){
          this.addToFavorites = true;
        }
      }
  },

    addCityToFavorites(){
      this.addToFavorites = !this.addToFavorites;
      if(this.addToFavorites){
        this.$store.dispatch('addOrRemoveFavorites',true);
        this.toastMsg = ", has been added to favorites";
      }else{
        this.$store.dispatch('addOrRemoveFavorites',false);
        this.toastMsg = ", removed from favorites";
      }
      this.showToast = true;
      setTimeout(()=>{this.showToast = false},2000)
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
}

.toast:not(.showing):not(.show) {
  opacity: 1;
}

.toast{
  position: absolute;
  bottom: 20px;
  right: 40%;
  background-color: #673ab7;
  color: white;
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}


.bi-heart-fill{
  color: red;
}

.btn-success{
  padding: 2%;
}


@media (max-width: 700px) {
  .favorite-icon{
    font-size: 2rem;
  }
  .btn-success{
    padding: 2%;
    font-size: 12px;
  }
  .toast{
    left: 25%;
    width: 50%;
  }
}

</style>