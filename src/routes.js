import {HomePage} from './pages/Home.jsx'
import {Explore} from './pages/Explore.jsx'


const routes = [
    
    {
        path: '/explore',
        component: Explore
    },
    {
        path:'/',
        component: HomePage
    },
 
]

export default routes;