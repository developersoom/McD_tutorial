<template>
    <div class="order-container">
      <nav class="nav-bar">
        <p>McD for Everyone – 모두를 위한 맥도날드 </p>
      </nav>
      <div class="menu-bar">
        <menu-category class="menu-category"></menu-category>
        <menu-detail @selected="addToCart" class="menu-detail"></menu-detail>
      </div>
      <cart class="cart" v-if="selectedMenuList" :selectedMenuList="selectedMenuList"></cart>
    </div>
</template>

<script>
import MenuCategory from '@/components/MenuCategory.vue';
import MenuDetail from '@/components/MenuDetail.vue';
import Cart from '@/components/Cart.vue';

export default {
  name: 'app',
  components: {
    MenuDetail, Cart, MenuCategory
  },
  methods: {
    addToCart(menu) {
      let selectedMenu = menu;
      if(this.selectedMenuList.includes(selectedMenu)) {
        const index = this.selectedMenuList.indexOf(selectedMenu);
        this.selectedMenuList[index].count++;
        this.selectedMenuList = [...this.selectedMenuList];
      } else {
        selectedMenu.count = 1;
        this.selectedMenuList.push(selectedMenu);
      }
    },
  },
  data() {
    return {
      selectedMenuList: [],
    }
  }
};
</script>

<style lang="less">
  @import '../public/styles/reset.css';
  @import (css) url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
  
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }
  
  body {
    @media screen and (max-width: 480px) {
      background: url('../public/mcd_bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: -40px;
    }
  }

  .order-container {
    max-width: 725px;
    margin: 1em auto;
    @media screen and (max-width: 480px) {
      max-width: 295px;
      margin: 1.5em auto;
    }
  }
  
  .nav-bar {
    height: 3em;
    background: #e83e36;
    color: #fff;
    text-align: left;
    padding-left: 1em;
    padding-top: 1em;
    font-size: 1em;
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
  
  .menu-bar {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-flow: row;
  }
  
  .menu-category {
    flex: 1 1 20%;
    height: 60vh;
    overflow: scroll;
    background: #fff;
    padding: 1em;
    @media screen and (max-width: 480px) {
      flex: 1 1 30%;
      font-size: 85%;
    }
  }

  .menu-detail {
    flex: 1 1 70%;
    height: 60vh;
    right: 0;
    overflow: scroll;
    background: #fff;
    padding: 1em;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    @media screen and (max-width: 480px) {
      flex: 1 1 60%;
      font-size: 80%;
    }
  }

  .cart {
    height: 27vh;
    width: 100%;
    overflow: scroll;
    background: #fff;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    @media screen and (max-width: 480px) {
      height: 17vh;
      border-bottom-left-radius: 2em;
      border-bottom-right-radius: 2em;
      box-shadow: none;
      font-size: 80%;
    }
  }
</style>
