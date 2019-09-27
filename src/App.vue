<template>
    <section>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>
    <menu-detail @selected="addToCart"></menu-detail>
    <cart v-if="selectedMenuList" :selectedMenuList="selectedMenuList">
    </cart>
    </section>
</template>

<script>
import MenuDetail from '@/components/MenuDetail.vue';
import Cart from '@/components/Cart.vue';

export default {
  name: 'app',
  components: {
    MenuDetail, Cart
  },
  methods: {
    addToCart(menu) {
      this.selectedMenuList.push(menu);
    }
  },
  data() {
    return {
      selectedMenuList: [],
    }
  }
};
</script>

<style>
 
</style>
