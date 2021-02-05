<template>
  <div class="order">
    <h1>Оформить заказ</h1>

    <form @submit.prevent="order">
      <input type="text" placeholder="Ваше имя" required>
      <input type="text" placeholder="Телефон" v-mask="'+7 (###) ###-##-##'" v-model="inputPhoneModel" required>
      <input type="text" placeholder="Адрес" required>
      <button type="submit">Отправить</button>
    </form>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        inputPhoneModel: ''
      }
    },
    methods: {
      order() {
        this.$store.dispatch('store/sendOrder')
      }
    },
    computed: {
      
   }
 }
</script>

<style lang="scss" scoped>
  .order{
    h1{
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: #59606D;
      margin-bottom: 16px;
    }
    form{
      display: flex;
      flex-direction: column;
      input{
        background: #F8F8F8;
        border-radius: 8px;
        padding: 14px;
        border: none;
        outline: none;
        margin-bottom: 16px;
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
  }
</style>