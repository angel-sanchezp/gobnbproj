

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'


import { stayReducer } from './stay/stay.reducer'


const rootReducer = combineReducers({
    stayModule: stayReducer,

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
