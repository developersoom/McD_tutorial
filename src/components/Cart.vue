<template>
  <section>
    <div v-for="(menu, index) in selectedMenuList" :key="index">
      <p>{{menu.name}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['selectedMenuList'],
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
