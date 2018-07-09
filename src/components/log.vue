<template>
  <div class="hello">
  	<p>
  	 <router-link to="register" tag="a" activeClass="active">前往注册</router-link>
  	</p>
 <p>
 	账号：<input v-model="email" placeholder="输入账号">
 </p>
 	<p>密码：<input v-model="password" placeholder="输入密码"></p>
	<p><button @click="handleclick">登录</button></p>
  </div>
</template>

<script>
export default {
  
	data(){
		return{
			email:'',
		password:''
		}
		
	},
	methods:{
		handleclick(){


		}
	},
	mounted(){
			this.$store.commit("isshow","false");
		}

}

</script>


<style scoped>
p{text-align: center;margin: 20px;overflow: hidden;}
input{width: 80%;height: 30px;}
a{color:#333;float:right;margin-right: 20px}
</style>
