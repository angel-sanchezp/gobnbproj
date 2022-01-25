import {HomePage} from './pages/Home.jsx'
import {Explore} from './pages/Explore.jsx'
import { StayDetails } from './pages/StayDetails.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Trips } from './pages/Trips.jsx'


const routes = [

    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/trips',
        component: Trips
    },
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