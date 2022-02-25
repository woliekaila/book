<template>
  <div>
    <Carsouel/>
    <Collapse/>
    <Product/>
    <Recommend/>
  </div>
</template>

<script>
import Collapse from './Collapse/collapse.vue'
import Product from './Product/product.vue'
import Recommend from './Recommend/recommend.vue'
export default {
  name: 'home',
  data(){
    return {}
  },
  components: {
    Collapse,
    Product,
    Recommend
  },
  mounted(){
  }
}
</script>

<style scoped>

</style>