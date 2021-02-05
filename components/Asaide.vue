<template>
  <aside>
    <h1>Каталог</h1>
    <div class="menu">
      <router-link v-for="category in categories" :key="category.id" :to="'/category/' + category.id ">{{category.name}}</router-link>
    </div>
  </aside>
</template>

<script>
  export default {
    async fetch() {
      await this.$store.dispatch('store/fetchCategories');
    },  
    computed: {
      categories() {
        return this.$store.getters['store/getCategories'];
      }
    },
  }
</script>

<style lang="scss" scoped>
  aside{
    display: flex;  
    flex-direction: column;
    padding: 32px 50px 0 88px; 
    h1{
      margin-bottom: 24px;
    }
    .menu{
      display:flex;
      flex-direction:column;
      a{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        text-decoration: none;
        color: #959DAD;
        white-space: nowrap;
        margin-bottom: 16px;
        &.nuxt-link-active {
          color: #1F1F1F!important;
          text-decoration-line: underline;
        }
        &:hover{
          color: #59606D;
        }
      }
    }
  }
  @media(max-width: 650px) {
    aside{
      padding: 25px 25px 0 30px;
    }
  }
</style>