<template>
<div class="container">
  <main>
    <Preloader v-if="loading" />
    <div class="items" v-else>
      <div class="select-container">
        <Select />
      </div>
      <div class="card" v-for="item in goods">
        <Card :item="item" />
      </div>
    </div>
  </main>
</div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("store/fetchGoods", this.$route.params.id);
  },
  computed: {
    goods() {
      if (this.$store.getters["store/sortBy"] == "price") {
        return this.$store.getters["store/sortByPrice"];
      } else {
        return this.$store.getters["store/sortByPopular"];
      }
    },
    loading() {
      return this.$store.getters["store/loading"];
    }
  }
};
</script>

<style scoped lang="scss" scoped>

.select-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 42px 0 34px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}

.container {
  display: flex;
}

.items {
  display: flex;
  flex-wrap: wrap;
  padding-right: 88px;
  max-width: 1400px;
  .card {
    flex-grow: 1;
    flex-basis: calc(100% / 4 - 16px);
    max-width: calc(100% / 4 - 16px);
    margin: 0 0 16px 16px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
}

@media(min-width:1700px) {
  .container{
    margin: 0 auto;
  }
}

@media(max-width:1500px) {
    .items {
    .card {
      flex-basis: calc(100% / 3 - 16px);
      max-width: calc(100% / 3 - 16px);
    }
  }
}

@media(max-width:1024px) {
    .items {
    .card {
      flex-basis: calc(100% / 2 - 16px);
      max-width: calc(100% / 2 - 16px);
    }
  }
}

@media(max-width:768px) {
    .items {
      padding: 0 25px;
    .card {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
</style>
