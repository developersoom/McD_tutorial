<template>
  <section>
    <nav class="my-order"> 내 주문 </nav>
    <div class="order-list" v-for="(menu, index) in selectedMenuList" :key="index">
      <img class="menu-image" :src="menu.img" alt="선택한 메뉴 이미지">
      <span class="menu-title">{{menu.name}}</span>
      <span class="menu-count">수량: {{menu.count}}</span>
      <button @click="remove(menu, index)" type="button" class="btn btn-danger btn-sm">삭제</button> 
    </div>
  </section>
</template>

<script>
export default {
  props: ['selectedMenuList'],
  data() {
    return {
      
    }
  },
  methods: {
    remove(menu, index) {
      this.selectedMenuList.splice(index, 1);
    }
  }
}
</script>

<style lang="less" scoped>
  .my-order {
    height: 2.5em;
    background-color: #1c410f;
    color: #fff;
    width: 100%;
    padding: 1em 0;
    padding-left: 1em;
  }

  .order-list {
    display: flex;
    align-items: center;
    span{
      margin-right: 1em;
    }
    .menu {
      &-image{
        width: 5em;
      }
      &-title {
        font-size: 1em;
        font-weight: 700;
      }
    }
  }
</style>