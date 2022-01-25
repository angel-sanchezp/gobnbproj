import {HomePage} from './pages/Home.jsx'
import {Explore} from './pages/Explore.jsx'
import { StayDetails } from './pages/StayDetails.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Orders } from './pages/Orders.jsx'


const routes = [

    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/orders',
        component: Orders
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