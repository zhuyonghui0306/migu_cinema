<template>
  <div class="hello">
	<div class="navbar">
		<ul>
	         <router-link to="/commend" tag="li" activeClass="active">推荐</router-link>
	         <router-link to="/watchFilm" tag="li" activeClass="active">看片</router-link>
	         <router-link to="/filmTable" tag="li" activeClass="active">影单</router-link>
	         <router-link to="/video" tag="li" activeClass="active">小视频</router-link>
	         <router-link to="/films" tag="li" activeClass="active">影评</router-link>
	       </ul>
	</div>
	  

  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
	.navbar{
		position: fixed;
		top: 30px;
		z-index: 10;
		width: 100%;
		height: 40px;
		line-height: 40px
	}
	ul,li{margin: 0;padding: 0}
	
	ul{		text-align: center;
			list-style: none;
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			background: #fff;
			
		}
		li{
			
			flex: 1
		}
	.active{
		border-bottom:2px solid #F74444;
		color:#F74444;
	}
</style>
