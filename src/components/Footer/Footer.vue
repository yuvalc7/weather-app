<template>
<footer>
  <Toggle :temperature="false"/>
  <p class="content">Made by <strong>Yuval Cohen</strong></p>
  <Toggle :temperature="true"/>
</footer>
</template>

<script>

import Toggle from "./Toggle";

export default {
  name: "Footer",

  components:{Toggle}
}
</script>

<style scoped>

footer{
  justify-content: center;
  display: flex;
}

.content{
  margin: 0 10%;
}

@media  (max-width: 515px){
  .content{
    font-size: 0.8rem;
  }
}
@media (max-width: 360px){
  .content{
    font-size:0.6rem;
  }
}

</style>