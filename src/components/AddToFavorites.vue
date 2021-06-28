<template>
<div class="container-favorites">
  <div class="favorite-icon" @click="addToFavorites=true">
    <i  :class="[  addToFavorites ?  'bi bi-heart-fill' :'bi bi-heart'  ]"></i>
  </div>
  <button type="button" class="btn btn-success">Add To Favorites</button>

</div>
</template>

<script>
export default {
  name: "AddToFavorites",


  data() {
    return {
      addToFavorites: false
    }
  },
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
  font-size: 3rem;
  margin-right: 10% ;
}

.btn-success{
  padding: 2%;
}


@media (max-width: 700px) {
  .favorite-icon{
    font-size: 1.5rem;
  }
  .btn-success{
    padding: 2%;
    font-size: 12px;
  }
}

</style>