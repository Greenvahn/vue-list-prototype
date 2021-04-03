<template>
  <div class="container">
      <h1><iconLogo class="logo-style"></iconLogo></h1>
  </div>
</template>

<script>
import iconLogo from '../assets/rockbreed_logo.svg';

export default {
  name: 'Heading',
  components: {
    iconLogo
  },
  props: {
    data:{
      type: String,
      required: true
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .logo-style {
      width: 300px;
      margin-bottom: 20px;
    }
</style>
