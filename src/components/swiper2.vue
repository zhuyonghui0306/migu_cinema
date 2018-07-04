<template>
   <div id="filmTable">

        <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(data,$index) in datalist">
            <a >
      
                <img :src="'http://movie.miguvideo.com/publish/i_www'+ data.imgSrc"/>
          
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>


  </div>
</template>

<script>
    import axios from "axios";
    import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data(){

      return{
       
      }

  },
         updated(){
       var swiperObj =  new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 3000,
        paginationClickable: true
      });
         }   ,
         props:[
          datalist

         ]
  

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
</style>
