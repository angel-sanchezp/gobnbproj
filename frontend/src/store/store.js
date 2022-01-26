

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'


import { stayReducer } from './stay/stay.reducer'
import { userReducer } from "./user/user.reducer.js"
import { reviewReducer } from './review/review.reducer.js'
import { orderReducer } from './order/order.reducer.js'



const rootReducer = combineReducers({
    stayModule: stayReducer,
    userModule : userReducer,
    reviewModule: reviewReducer,
    orderModule: orderReducer,




})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
