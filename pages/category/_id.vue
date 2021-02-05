<template>
  <div class="container">
    <Asaide />
    <Main /> 
    <Cart /> 
  </div>
</template>

<script>
  export default {
    beforeMount() {
      this.$store.dispatch('store/fetchCart')
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media(max-width:650px) {
    .container {
      flex-direction: column;
    }
  }
</style>
