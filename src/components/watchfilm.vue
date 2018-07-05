<template>
   <div id="filmTable">

        <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(data,$index) in list" :key="data.length">
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
 import {mapState} from "vuex";
export default {
  data(){

			return{
				datalist:[],

			}

	},
	mounted(){
     var swiperObj =  new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 3000,
        paginationClickable: true
      });
	
if(this.list.length==0){
        //发起请求
        this.$store.dispatch("getli");
      }else{

      }

	},
	            updated(){
      
         }  ,
         computed:{
      ...mapState(["list"])
    } 
  

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
