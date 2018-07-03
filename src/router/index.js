import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import commend from "../components/commend"
import buyTickets from "../components/buyTickets"
import films from "../components/films"
import filmTable from "../components/filmTable"
import seeFilm from "../components/seeFilm"
import video from "../components/video"
import comingSoon from "../components/comingSoon"
import nowPlaying from "../components/nowPlaying"

export default new Router({
  routes: [
    {
      path: '/seeFilm',
      component: seeFilm
    },
    {
      path: '/commend',
      component: commend
    },
    {
      path: '/buyTickets',
      component: buyTickets,
      children:[
      		{
    			path:"nowPlaying", 
    			component:nowPlaying
    		},
    		{
    			path:"nowPlaying", 
    			component:nowPlaying
    		},
      ]
    },
    {
      path: '/films',
      component: films
    },
    {
      path: '/filmTable',
      component: filmTable
    },
    {
      path: '/video',
      component: video
    },
    {
    	path:"*",
    	redirect:"/seeFilm"
    }

  ]
})
