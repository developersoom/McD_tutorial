<template>
  <div class="menu">
      <h3>{{menu.name}}</h3>
      <img :src="menu.img">
      <p>{{menu.price}}</p>
      <p>{{menu.cal}}</p>
      <button @click="selected" type="button" class="btn btn-primary">추가</button>
  </div>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    selected() {
      this.$emit('selected', this.menu)
    }
  }
}
</script>

<style>
  .menu {
    width: 300px; 
    border: 1px solid red;
  }
</style>