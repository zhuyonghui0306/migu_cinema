<template>
  <div id="app">
   <search></search>
   <navbar></navbar>
    <section id="main">
    <router-view></router-view>
   </section>
  <footers></footers>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import search from "./components/search";
import footers from "./components/footer";


export default {
  data(){
      return{}
  },
  components:{
    navbar,
    search,
    footers
  }
}
</script>

<style>
#main{display:flex;flex-direction: column;overflow: auto}
</style>
