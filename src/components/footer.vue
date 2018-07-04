<template>
  <div class="hello">
  	<div class="footer">
    <ul>
	         <router-link to="/seeFilm" tag="li" activeClass="active">看片</router-link>
	         <router-link to="/buyTickets" tag="li" activeClass="active">购票</router-link>
	         <router-link to="/my" tag="li" activeClass="active">我的</router-link>
	       </ul>
		</div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
	.footer{position: fixed;bottom: 0;z-index: 10px;width: 100%}
	ul,li{margin: 0;padding: 0}
	
	ul{		text-align: center;
			list-style: none;
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			
		}
		li{
			
			flex: 1;text-align: center;height: 50px;line-height: 50px;background: #fff
		}
	.active{
		
		color:#F74444;
	}
</style>
