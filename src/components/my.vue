<template>
  <div class="hello">
  <router-link to="/log" tag="a" activeClass="active"><b class="iconfont icon-electronics"></b>点击登录</router-link>
  
  <ul>
      <li><b class="iconfont icon-favorite"></b>收藏 </li>
      <li><b class="iconfont icon-edit"></b>影评</li>
      <li><b class="iconfont icon-history"></b>播放</li>
  </ul>
  <div>
  	<p>
  		<b class="iconfont icon-survey"></b>
  		我的订单<i class="iconfont icon-more" ></i>
  	</p>
  	<p>
  		<b class="iconfont icon-folder"></b>
  	我的钱包<i class="iconfont icon-more" ></i>
  </p>
  	<p><b class="iconfont icon-security"></b>常见问题<i class="iconfont icon-more" ></i></p>
  	<p><b class="iconfont icon-phone"></b>在线客服<i class="iconfont icon-more" ></i></p>
  	<p><b class="iconfont icon-gifts"></b>商城<i class="iconfont icon-more" ></i></p>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
		ul,li{margin: 0px;padding: 0px}
     .icon-favorite,.icon-history,.icon-edit{display: block;font-size: 30px;text-align: center;color:#ff2020}
     .icon-history{color:#0f0;}
	.hello{background: #ccc;height: 100%;width: 100%}
	a{text-decoration: none;color: #333;height: 80px;line-height: 80px;width: 100%;display: block;background:#fff;margin-bottom: 5px;font-size: 24px}
	.icon-electronics{font-size: 40px;margin-left: 50px;margin-right: 30px}
	ul{display: flex;justify-content: space-between;list-style: none;margin-top: 5px;background:#fff;height: 140px;padding-top: 50px}
	li{flex: 1;text-align: center;font-size: 20px}
	.icon-phone,.icon-security,.icon-folder,.icon-survey,.icon-gifts{margin:0 15px;background:#fff}
	p{height:60px;background:#fff;margin:0;padding: 0px;line-height: 60px;border-bottom: 1px solid #ccc}
	p b{float: left;font-size: 20px}
	p i{float:right;}
</style>
