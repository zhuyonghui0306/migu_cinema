<template>
  <div>
		<ul>
			<li v-for="data in comingSoonlist" :key="data.id">
				<img :src="'http://movie.miguvideo.com' + data.picAddr"/>
				<h3>{{data.filmName}}</h3>
				<p>导演：{{data.director}}</p>
				<h4>演员：{{data.actor}}</h4>
			</li>
		</ul>
  </div>
</template>

<script>

	import axios from "axios";
export default {
		data(){
			return {
				comingSoonlist:[]
			}
		},
 	
		  mounted(){
		  	axios.post('/lovev/miguMovie/data/indexFilmComing_data.jsp',"cityCode=")
		  .then(response=> {
		   console.log(response.data.movies);
		  	this.comingSoonlist = response.data.movies;
		  	 console.log(this.comingSoonlist);
		  })
		}

}
</script>

<style type="text/css" lang="scss" scoped>
		ul{
		li{
			padding:10px;
			overflow: hidden;
			h3{
				color: #666;
				font-size: 16px;
				font-weight: 100;
				padding: 5px 0 0 0;
			}
			p{
				padding: 10px 0 0 0;
				font-size: 14px;
			}
			h4{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: 100;
				color: #000;
				padding: 10px 0 0 0;
				font-size: 14px;
			}
			img{
				float:left;
				width:80px;
				padding: 5px;
			}
		}
	}
</style>
