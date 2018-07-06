<template>
  <div class="hello" v-if="detail">
    <h3>{{detail.name}}</h3>
    <img :src="'http://movie.miguvideo.com'+detail.imgSrc1" alt="">
    <p>地区：{{detail.region}}</p>
    <p>状态：{{detail.time}}</p>
  </div>
</template>

<script>
  import axios from "axios";

export default {
  
  data () {
    return {
      list:[],
      detail:'',
      src:''
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    axios.get(`/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=${this.$route.params.id}`).then(res=>{
      
     
       this.detail = res.data[0];
      console.log(this.detail)
       
      })
  }
}
</script>


<style scoped>
img{width: 100%;margin:auto;}
h3{width: 100%;text-align: center}
</style>
