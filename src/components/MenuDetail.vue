<template>
  <div class="menu-board"> 
    <menu-info @selected="addMenu" :menu="menu" :index="index" v-for="(menu, index) in menuList" :key="index"></menu-info>
  </div>
</template>

<script>
import MenuInfo from '@/components/MenuInfo.vue';
export default {
  components: {
    MenuInfo,
  },
  methods: {
    addMenu(menu) {
      this.$emit("selected", menu);
    }
  },
  data() {
    return {
      menuList: [
        {
          name: '1955 버거™',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1340.png',
          price: '₩6,100',
          cal: '508 Kcal',
        },
        {
          name: '빅맥®',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1301.png',
          price: '₩5,100',
          cal: '514 Kcal',
        },
        {
          name: '불고기버거',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/5214.png',
          price: '₩2,600',
          cal: '376 Kcal',
        },
      ]
    }
  }
}
</script>

<style>
  .menu-board {
    display: flex;
    justify-content: space-around;
  }
</style>