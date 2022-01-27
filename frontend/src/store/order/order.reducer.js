const initialState = {
    order: [],
 
}
export function orderReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break
    
        default:
    }

    window.orderState = newState
    return newState

}
