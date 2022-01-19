import {HomePage} from './pages/Home.jsx'
import {Explore} from './pages/Explore.jsx'
import { StayDetails } from './pages/StayDetails.jsx'


const routes = [
    
    {
        path: '/details/:stayId',
        component: StayDetails
    },
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