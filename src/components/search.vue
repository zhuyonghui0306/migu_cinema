<template>
  <div class="hello">
  	<div class="search">
  		<b class="iconfont icon-trade"></b>0元
  		<b class="iconfont icon-search"></b>
  		<b class="iconfont icon-clock"></b>
  	</div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
		
	.search{
		width: 100%;
		position: fixed;
		top: 0px;
		background: #fff;
		height: 40px;
		line-height: 40px;
		z-index: 10;
		
	}
	b{font-size: 20px;}
	.icon-trade{float: left;margin-left: 20px}
	.icon-clock,.icon-search{float: right;margin-right: 20px}
	.icon-search{margin-right:40px}
</style>
