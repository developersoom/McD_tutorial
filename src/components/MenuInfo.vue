<template>
  <div class="menu" @click="selected">
      <div class="menu-img-container">
        <img class="menu-image" :src="menu.img" alt="선택한 메뉴 이미지">
      </div>
      <div class="menu-info-container">
        <span class="menu-price">{{menu.price}}</span>
        <span class="menu-cal">{{menu.cal}}</span>
      </div>
      <div class="menu-title">
        {{menu.name}}
      </div>
      <!-- <button type="button" class="btn btn-primary">추가</button> -->
  </div>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    selected() {
      this.$emit('selected', this.menu);
    }
  }
}
</script>

<style lang="less" scoped>
  .menu {
    flex: 1 1 50%;
    position: relative;
    cursor: pointer;
    margin-bottom: 1em;
    &-img-container {
      text-align: center;
    }
    &-image {
      width: 10em;
    }
    &-info-container {
      position: absolute;
      top: 0;
      right: 0;
      padding-right: 0.7em;
      padding-top: 1em;
      span {
        display: block;
        text-align: right;
      }
    }
    &-title {
      text-align: center;
      font-size: 1em;
      font-weight: 500;
    }
  }
</style>