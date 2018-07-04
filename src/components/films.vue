<template>
  <div class="hello">
	 <ul class="films">
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
		axios.post("/lovev/miguMovie/data/seeFilmData.jsp","nodeId=70022797&pagesize=3&pageidx=1").then(res=>{
				console.log(res.data);
					this.datalist=res.data[0].list
			})
	}
  	
}
</script>


<style scoped>
	img{width: 100%}
	ul{margin: 0px;padding: 0px}
	li{list-style: none;font-size: 12px;position:relative;border-bottom: 3px solid #ccc;width: 100%;margin: 0px;padding-bottom: 5px}
	li p{position: absolute;
		top:50%;margin:auto;
		font-size: 16px;color:#fff;
		text-align: center;
		width: 300px;left: 50%;margin-left: -150px
	}

</style>
