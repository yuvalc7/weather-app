<template>
<footer>
  <Toggle :temperature="false"/>
  <p class="content">Made for <strong>Herolo</strong> using <strong>Vue</strong> with ❤ by <strong>Yuval Cohen</strong> 2021 </p>
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

</style>