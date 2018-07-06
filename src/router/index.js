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
import my from "../components/my"
import watchfilm from "../components/watchfilm"
import Detail from "../components/detail"

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
    			path:"comingSoon", 
    			component:comingSoon
    		},
        ,
        {
          path:"/film",
          redirect:"/film/nowplaying"
        }
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
      path: '/my',
      component: my
    },
     {
      path: '/watchfilm',
      component: watchfilm
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
    	path:"*",
    	redirect:"/seeFilm"
    }

  ]
})
