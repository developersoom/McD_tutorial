<template>
  <section>
    <ol class="category-list">
      <li class="category-item" :key="index" v-for="(category, index) in categories">
        <img :src="category.img" alt="카테고리 대표 이미지">
        <p>{{category.name}}</p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: '추천 메뉴',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/7803.png'
        },{
          name: '버거 & 세트',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1340.png'
        },{
          name: '스낵 & 사이드',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1466.png'
        },{
          name: '음료', 
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1506.png' 
        },{
          name: '디저트', 
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1712.png'
        },{
          name: '해피밀®',
          img: 'https://www.mcdelivery.co.kr/kr/static/1568769939351/assets/82/products/1204.png'
        } 
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  
  li {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    cursor: pointer;
  }

  .category {
    &-list {
      margin: 1em auto;
      img {
        width: 4.5em;
        padding-bottom: 0.5em;
      };
      span {
        font-size: 1.5em;
      }
    }
    &-item {
      text-align: center;
      margin-bottom: 2em;
    }
  }

</style>