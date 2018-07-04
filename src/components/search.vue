<template>
  <div class="hello">
  <header>
		<ul>
	         <router-link to="/commend" tag="li" activeClass="active">推荐</router-link>
	         <router-link to="/seeFilm" tag="li" activeClass="active">看片</router-link>
	         <router-link to="/filmTable" tag="li" activeClass="active">影片</router-link>
	         <router-link to="/video" tag="li" activeClass="active">小视频</router-link>
	         <router-link to="/films" tag="li" activeClass="active">影评</router-link>
	       </ul>
	</header>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
		header{
		position:fixed;
		width:100%;
		height: 10%;
		top:0px;
		left:0px;
		color:#333;
		z-index:10;
		}
		header ul{
			display: inline-block;
			list-style: none;
		}
		li{
			float: left;
			padding:0 10px 0  10px;
		}
	.active{
		border-bottom:2px solid #F74444;
		color:#F74444;
	}

</style>
