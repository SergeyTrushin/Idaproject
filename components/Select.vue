<template>
  <div class="vue-select" @click="toggleDropdown">
    <span class="selected-option">{{ placeholder }} 
      <b>{{value}}</b>
      <svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
      </svg>  
    </span>
    <div class="dropdown-options-container" v-show="showDropdown">
      <div class="dropdown-options" v-for="option in options" v-bind:class="{'selected': option === selected}">
        <div class="dropdown-options--cell" @click="selectOption(option);sort(option)">
          <span class="option-text">По {{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "цене",
        showDropdown: false,
        options: ['цене', 'популярности'],
        placeholder: "Сортировать по: ",
        value: 'цене'
      }
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      selectOption(option) {
        this.selected = option;
        this.value = option;
      },
      sort(option) {
        this.$store.commit('store/changeSort', option)
      }
    },
  }
</script>

<style lang="scss" scoped>
  $light-gray: #F8F8F8;
  
  @mixin active-state() {
    background-color: $light-gray;
    border: none;
    color: #1F1F1F;
  }
  @mixin ellipsis() {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .vue-select {
   position: relative;
   cursor: pointer;
   user-select: none;
   border: none;
   color: #1F1F1F;
   transition: all 200ms linear;
   b{
    color: #59606D;
    font-style: normal;
    font-weight: normal;
    margin-left: 4px;
  }
  .selected-option {
    @include ellipsis();
    display: inline-flex;
    align-items: center;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    transition: all 200ms linear;
  }
  svg{
    margin-left: 4px;
  }
}
.dropdown-options-container {
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 10;
  width: 100%;
  padding: 8px 0 12px;
  font-size: 14px;
  color: #959DAD;
}
.dropdown-options--cell {
  padding: 4px 4px 4px 12px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover { 
    @include active-state();
  }
}
.dropdown-options.selected {
  .dropdown-options--cell {
    @include active-state(); 
  }
}
.slide-enter-active, .slide-leave-active  {
  transition: height 150ms ease;
}
.slide-enter, .slide-leave-to {
  height: 0px;
}
</style>