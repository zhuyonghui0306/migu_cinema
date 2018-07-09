<template>
  <div>
		   <div class="swiper-container" id="swiper">
    			<div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in looplist" :key="data.id">
            	<img :src="'http://movie.miguvideo.com/publish/i_www'+ data.imgSrc"/>
            </div>
           
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

  <div class="swiper-container" id="swiper-container">
  	<h2>{{dataa}}</h2>
    <div class="swiper-wrapper" id="swiper-wrapper">
      <div class="swiper-slide" v-for="data in commendlist" :key="data.id">
      	<img :src="'http://movie.miguvideo.com/publish/i_www'+ data.imgSrc"/>
					<p id="jidong">{{data.name}}</p>
					<span id="renxin">{{data.LONG_NAME}}</span>			
      </div>
    </div>
  </div>

  <div class="swiper-container" id="container">
  	<h2>{{datab}}</h2>
    <div class="swiper-wrapper" id="wrapper">
      <div class="swiper-slide" v-for="data in comlist" :key="data.id">
      	<img :src="'http://movie.miguvideo.com/publish/i_www'+ data.imgSrc"/>
					<p id="ji">{{data.name}}</p>
					<span id="ren">{{data.LONG_NAME}}</span>			
      </div>
    </div>
  </div>

<div class="swiper-container" id="cont">
	<h2>{{datac}}</h2>
 	    <div class="swiper-wrapper" id="wrap">
 	      <div class="swiper-slide" v-for="data in contlist" >
 	      	<img :src="'http://movie.miguvideo.com/publish/i_www'+ data.imgSrc"/>
 	      </div>			
 	    </div>
 	    <!-- Add Scrollbar -->
 	    <div class="swiper-scrollbar"></div>
 	  </div>

  </div>
</template>

<script>
	
	import "vue-swipe/dist/vue-swipe.css"
	import { Swipe, SwipeItem } from 'vue-swipe';

	import axios from "axios";
export default {
		data(){
			return {
				looplist:[],
				commendlist:[],
				comlist:[],
				dataa:[],
				datab:[],
				datac:[],
				contlist:[]
			}
		},
 		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem //注册局部组件
		},
		  mounted(){
		  	axios.post('/lovev/miguMovie/data/seeFilmData.jsp',"nodeId=70022794&pagesize=3&pageidx=1")
		  .then(response=> {
		   // console.log(response);
		  	this.looplist = response.data[0].list;
		  console.log(response);
		    this.commendlist = response.data[1].list;
		    console.log(response.data[1].list);
		    this.dataa=response.data[1].name;

		  })
		  axios.post('/lovev/miguMovie/data/seeFilmData.jsp',"nodeId=70022794&pagesize=3&pageidx=2")
		  .then(response=> {
		   // console.log(response);
		  	this.comlist = response.data[0].list;
		  	this.datab=response.data[0].name;
		  	this.datac=response.data[1].name;
		  	this.contlist = response.data[1].list;
		  console.log(response);
		  })
		},
		updated(){
		 var swiper = new Swiper('#swiper', {
		      effect: 'coverflow',
		      grabCursor: true,
		      centeredSlides: true,
		      slidesPerView: 'auto',
		      slidesPerView: 1.8,
		      coverflowEffect: {
		        rotate: 50,
		        stretch: 0,
		        depth: 100,
		        modifier: 1,
		        slideShadows : true,
		      },
		      pagination: {
		        el: '.swiper-pagination',
      },
    });
		 var swiper = new Swiper('#swiper-container', {
			      slidesPerView: 3.25,
			      spaceBetween: 10,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			    }
      );
		 var swiper = new Swiper('#container', {
			      slidesPerView: 3.55,
			      spaceBetween: 10,
			      pagination: {
			        el: '#container',
			        clickable: true,
			      },
			    }
      );
		  var swiper = new Swiper('#cont', {
		       
		     });

}}

</script>


<style type="text/css" lang="scss" scoped>
	 body {
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 400px;
			img{
				width: 100%;
			}
    }

	#swiper-container {
				height: 200px;
				margin-top: -30px;
		h2{
			line-height: 20px;
			border-left: 3px solid #F74444;
			margin: 10px 0 10px 0;
			padding:0 0 0 10px;
			font-size: 16px;
			font-weight: 100;
		}
  		#swiper-wrapper{
			 height: 200px;
  		  }
    }

  #jidong{
			color: #666;
			font-size: 14px;
			padding: 2px 0 0 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			}
			#renxin{
				color: #999;
				
				padding: 2px 0 0 10px;
				font-size: 13px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			 #ji{
			color: #666;
			font-size: 14px;
			padding: 2px 0 0 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			}
			#ren{
				color: #999;
				
				padding: 2px 0 0 10px;
				font-size: 13px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		#container{

				margin-top: -30px;
				h2{
					line-height: 20px;
					border-left: 3px solid #F74444;
					margin: 10px 0 10px 0;
					padding:0 0 0 10px;
					font-size: 16px;
					font-weight: 100;
				}
		}
		#wrapper{
				height: 200px;
			}

			#cont{
				margin-top: -30px;
                  h2{
					line-height: 20px;
					border-left: 3px solid #F74444;
					margin: 10px 0 10px 0;
					padding:0 0 0 10px;
					font-size: 16px;
					font-weight: 100;
				}
			}

			
</style>
