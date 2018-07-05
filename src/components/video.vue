<template>
  <div class="hello">
	<ul class="video">
	   <li v-for="data in datalist"  :key="data.id">
				<img :src="'http://movie.miguvideo.com/publish/i_www'+ data.picList[0].imgSrc">
				<p>{{data.name}}</p>

			</li>
	</ul>
	
  </div>
</template>

<script>
	import axios from "axios";

export default {

	data(){

			return{
				datalist:[],

			}

	},
	mounted(){
		axios.post("/lovev/miguMovie/data/seeFilmData.jsp","nodeId=70027030&pagesize=3&pageidx=1").then(res=>{
				console.log(res.data[0].list);
				console.log(res.data[0].list[0].picList[0].imgSrc);

				this.datalist=res.data[0].list
			})
	}
  
}
</script>


<style scoped>
	ul{margin: 0;padding: 0}
	img{width: 100%}
	li{list-style: none;font-size: 12px;position:relative;border-bottom: 3px solid #ccc;width: 100%;padding-bottom:5px}
	li p{position: absolute;
		bottom: 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 90%;color: #fff;font-weight: 700;font-size: 14px;text-indent: 2em
	}
</style>
