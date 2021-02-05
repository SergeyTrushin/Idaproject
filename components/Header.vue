<template>
  <div class="navbar">
    <span class="navbar__header">TestList</span>
    <div class="navbar__cart-icon" @click="openCloseCart"><img src="~/assets/cart.svg" alt=""><span class="cart-amount">{{amount}}</span></div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {

      }
    },
    methods: {
      openCloseCart() {
        this.$store.commit('store/openCloseCart')
      }
    },
    computed: {
      amount() {
        return this.$store.getters['store/getAmountOfProductsInCart']
      }
    }
  }

</script>

<style lang="scss" scoped>
  .navbar{
    display: flex;
    justify-content: space-between;
    padding: 18px 108px 20px  88px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    .navbar__header{
      color: #59606D;
      font-weight: bold;
      font-size: 22px;
      line-height: 28px;
    }
    .navbar__cart-icon{
      cursor: pointer;
      position: relative;
      .cart-amount{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #959DAD;
        color: #fff;
        width: 16px;
        height: 16px;
        font-size: 8px;
        border-radius: 100%;
      }
    }
  }

  @media(max-width:650px) {
    .navbar{
      padding: 25px 20px 15px;
    }
  }
</style>