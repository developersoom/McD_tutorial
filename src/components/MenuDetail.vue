<template>
  <div class="menu-board" v-if="isDataReady"> 
    <menu-info @selected="addMenu" :menu="menu" :index="index" v-for="(menu, index) in menuList" :key="index"></menu-info>
  </div>
  <div class="menu-board" v-else> 
    loading... 
  </div>
</template>

<script>
import MenuInfo from '@/components/MenuInfo.vue';
import API from '@/lib/API'

export default {
  components: {
    MenuInfo, API
  },
  async mounted() {
    const url = "https://www.mcdelivery.co.kr/kr/browse/menu.html?daypartId=1&catId=11";
    this.menuList = await API.getData(url);
    this.isDataReady = true;
  },
  methods: {
    addMenu(menu) {
      this.$emit("selected", menu);
    }
  },
  data() {
    return {
      menuList: [],
      isDataReady: false,
    }
  }
}
</script>

<style>
  .menu-board {
    width: 80vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>