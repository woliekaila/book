<template>
  <div id="app">
    <header-cpn></header-cpn>

    <router-view></router-view>

    <footer-cpn></footer-cpn>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderCpn from '@/components/Header.vue'
import FooterCpn from '@/components/Footer.vue'

import carsouel from '@/components/carsouel.vue'

Vue.component('Carsouel',carsouel)
export default {
  name: 'App',
  components: {
    HeaderCpn,
    FooterCpn
  },
  mounted(){
    // console.log(this.$refs)
  }
}
</script>

<style>

</style>
