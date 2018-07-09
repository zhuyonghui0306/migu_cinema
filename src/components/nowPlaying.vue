<template>
  <div>
		<ul>
			<li v-for="data in nowplayinglist" >
				<img :src="'http://movie.miguvideo.com' + data.picAddr"/>
				<p>导演：{{data.director}}</p>
				<h3 title="data.actor">演员：{{data.actor}}</h3>
				
			</li>
		</ul>
  </div>
</template>

<script>

	import axios from "axios";
	export default {
		data(){
			return {
				nowplayinglist:[],
			}
		},
 	
		  mounted(){
		  	axios.post('/lovev/miguMovie/data/indexFilm_data.jsp',"cityCode=4945")
		  .then(response=>{
		  	console.log(response.data.movies);
		  	this.nowplayinglist = response.data.movies;
		  	
		  	console.log(response.data.movies);
		  	console.log(this.nowplayinglist);
		  
		  })
		 
		}

}
</script>

<style type="text/css" lang="scss" scoped>
		ul{
		li{
			padding:10px;
			overflow: hidden;
			p{
				font-weight: bold;
				font-size: 16px;
				padding: 25px 0 0 0;
			}
			h3{
				padding: 15px 0 0 0;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				/*文本多出不换行*/
				font-weight: 100;
			}
		
			img{
				padding: 5px;
				float:left;
				width:100px;
			}
		}
	}
</style>
