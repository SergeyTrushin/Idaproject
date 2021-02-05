<template>
  <div class="wrapper" :class="{hide: !cartOpen}">
    <div class="cart" :class="{open: cartOpen}">
      <h1>Корзина <span class="close-button" @click="openCloseCart">X</span></h1>
      <div v-if=!isItOrdered>
       <div v-if="getItemsInCart.length == 0" class="empty">
         <p>Пока что вы ничего не добавили в корзину.</p>
         <button @click="openCloseCart">Перейти к выбору</button>
       </div>
       <div class="fill" v-else>
         <p>Товары в корзине</p>
         <div class="cart-items">
           <CartItem v-for="item in getItemsInCart" :key="item.id" :item="item"/>
         </div>
         <Order />
       </div>
     </div>
     <div class="ordered" v-if=isItOrdered>
      <img src="~/assets/ok.png" alt="">
      <h1>Заявка успешно отправлена</h1>
      <p>Вскоре наш менеджер свяжется с Вами</p>
    </div>
  </div>
</div>
</template>

<script>
	export default {
    methods: {
      openCloseCart() {
        this.$store.commit('store/openCloseCart')
      }
    },
		computed: {
			cartOpen() {
				return this.$store.getters['store/isItCartOpen']
			},
      getItemsInCart() {
       return this.$store.getters['store/getItemsInCart']
     },
     isItOrdered() {
      return this.$store.getters['store/isItOrdered']
     }
   }
 }
</script>

<style lang="scss">

  @mixin cartTitle() {
    color: #59606D;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 16px;
  }

  .wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .8);
    &.hide{
      display: none;
    }
  }

  .cart{
    overflow-y: scroll;
    min-width: 460px;
    padding: 52px 48px 48px;
    background: #fff;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    z-index: 1000;
    opacity: 1;
    position:absolute;
    display:flex;
    top:0;
    right: 0;
    transform: translateX(100%);
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 1s linear; 
    &.open {
      position:fixed;
      transition: all 1s linear; 
      transform: translateX(0);
    }

    h1{
      font-weight: bold;
      font-size: 32px;
      line-height: 41px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      .close-button{
        font-size: 18px;
        cursor: pointer;
      }
    }
    .empty{
      p{
        font-weight: normal;
        font-size: 22px;
        line-height: 28px;
        color: #000000;
        margin-bottom: 24px;
      }
      button{
        background: #1F1F1F;
        cursor: pointer;
        border-radius: 8px;
        color: #fff;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        outline: none;
        width: 100%;
        padding: 14px 0 15px 0;
        &:hover{
          background: #59606D;
        }
      }
    }
    .fill{
      p{
        @include cartTitle();
      }
    }
  }

  .ordered{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    h1{
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 31px;
      margin-bottom: 2px;
    }
    p{
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #59606D;
    }
    img{
      margin-bottom: 24px;
    }
  }

  @media(max-width: 650px) {
    .cart{
      min-width: 0;
    }
  }
</style>