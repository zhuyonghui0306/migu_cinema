<template>
   <div id="filmTable">

        <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(data,$index) in lists" :key="data.length">
            <a >
      
                <img :src="'http://movie.miguvideo.com/publish/i_www'+ data.imgSrc"/>
          
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

      </div>
  

  <p>{{title}}</p>

 <div class="swiper-container" id="swipers">
        <div class="swiper-wrapper">
          <div id ="imgs" class="swiper-slide" v-for="(data,$index) in datalist" :key="data.length">
            <a >
 
              <img :src="'http://movie.miguvideo.com/'+ data.imgSrcV" class="">
            </a>
          </div>
        </div>
    
      </div>


  <p>{{title2}}</p>

 <div class="swiper-container" id="swipes">
        <div class="swiper-wrapper">
          <div id ="imgs" class="swiper-slide" v-for="(data,$index) in dl" :key="data.length">
            <a >
 
              <img :src="'http://movie.miguvideo.com/'+ data.imgSrcV" class="">
            </a>
          </div>
        </div>
    
      </div>

  </div>
</template>

<script>
    import axios from "axios";
    import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
 import {mapState} from "vuex";
export default {
  data(){

      return{
        datalist:[],
        title:'',
        dl:[],
        title2:''
      }

  },
  mounted(){
     var swiperObj =  new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
      });
  
if(this.lists.length==0){
        //发起请求
        this.$store.dispatch("getlist");
      }else{

      }  axios.post("/lovev/miguMovie/data/seeFilmData.jsp","nodeId=70035127&pagesize=3&pageidx=1").then(res=>{
        
      this.datalist=res.data[1].list
      this.title=res.data[1].name
      console.log(res.data[2].list)
      this.dl=res.data[2].list
      this.title2=res.data[2].name



  })
        axios.post("/lovev/miguMovie/data/seeFilmData.jsp","nodeId=70035127&pagesize=3&pageidx=1").then(res=>{
        
      this.datalist=res.data[1].list
      this.title=res.data[1].name
      console.log(res.data[2].list)
      this.dl=res.data[2].list
      this.title2=res.data[2].name



  })

  },
              updated(){
      var swiper =  new Swiper('#swipers', {
        loop: false,
      });
      var swipes =  new Swiper('#swipers', {
        loop: false,
      });
         }  ,
         computed:{
      ...mapState(["lists"])
    } ,
  
}
</script>


<style scoped>
    html, body {
      position: relative;
      height: 100%;
    }
   #swiper{width: 100%}
    img{width: 100%}
    #filmTable{width: 100%}
      html, body {
      position: relative;
      height: 100%;
    }
   #swiper{width: 100%}
    img{width: 100%}
    #filmTable{width: 100%}
    #swipers img{width: 150px}
    #swipers ul,#swipers li{margin: 0;padding: 0}
    #swopers .swiper-slide{width:150px!important;}
    #imgs{width:150px!important;margin:0 10px;}
    #imglist{width: 100%;}
    li{list-style: none;width: 45%;margin-bottom: 5px}
    ul,li{margin: 0;padding: 0}
    ul{display: flex;flex-wrap: wrap;width: 100%;justify-content: space-around;}
</style>
