<template>
  <div class="container">
      <h1>{{data}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Heading',
  props: {
    data:{
      type: String,
      required: true
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
