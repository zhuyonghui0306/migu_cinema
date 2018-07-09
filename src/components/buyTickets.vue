<template>
  <div>
		<ul>
			<router-link tag="li" to="/buyTickets/nowplaying" activeClass="active">正在热映</router-link>
			<router-link tag="li" to="/buyTickets/comingsoon" activeClass="active">即将上映</router-link>
		</ul>
			<!-- 二级路由容器		 -->
			<router-view></router-view>
	</div>
</template>

<script>

export default {
  
}
</script>

<style type="text/css" lang="scss" scoped>
	ul{
		display: flex;
		list-style: none;
		li{
			flex:1;
			text-align: center;
			height: 40px;
			line-height: 40px;
			
		}
	}

	.active{
		border-bottom: 2px solid #F74444;
		color:#F74444;
	}
</style>
