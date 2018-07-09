import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);//注册模块

const store = new Vuex.Store({


	state:{
		list:[],
		lists:[],
		alllist:[],
		alllists:[],
		show:true
	},

	actions:{
		getlist(){
			axios.post("/lovev/miguMovie/data/seeFilmData.jsp","nodeId=70035127&pagesize=3&pageidx=1").then(res=>{
				
				store.commit("getlists",res.data[0].list);
			
			
			});
		},
		getli(){
			axios.post("/lovev/miguMovie/data/seeFilmData.jsp","nodeId=70022795&pagesize=3&pageidx=1").then(res=>{
				
				store.commit("getlistfilms",res.data[0].list);
			

			});
		}
	},

	mutations:{
getlists(state,payload){
			state.lists = payload;
		
		},
	getlistfilms(state,payload){
			state.list = payload;
			console.log(payload)
		},
		
	isshow(state,payload){
		state.show = payload;
		console.log(state.show)
	}
	
		}
})
//store 一个“全局对象”

export default store;