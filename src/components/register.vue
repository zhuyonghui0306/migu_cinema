<template>
  <div class="hello">
  	<p>
  	  邮箱：<input v-model="email" placeholder="输入邮箱">

  	</p>
 <p>
 	昵称：<input v-model="name" placeholder="昵称">
 </p>
 	<p>密码：<input v-model="password" placeholder="输入密码"></p>
	<p><button @click="handleclick">注册</button></p>
  </div>
</template>

<script>
	    import axios from "axios";

export default {
  
	data(){
		return{
			name:'',
		password:'',
		email:''
		}
		
	},
	methods:{
		handleclick(){
   axios.post("/ap",'email='+this.email+'&name='+this.name+'&password='+this.password).then(res=>{
        
      console.log(res)
      console.log('email='+this.email+'&name='+this.name+'&password='+this.password)
     

  })

		}
	},
	mounted(){

     

	}
}

</script>


<style scoped>
p{text-align: center;margin: 20px;overflow: hidden;}
input{width: 80%;height: 30px;}
a{color:#333;float:right;margin-right: 20px}
</style>
