const initialState = {
    orders: [],

}
export function orderReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break
        case 'ADD_ORDER':
            newState = { ...state, orders: [...state.orders, action.order] }
            break
        // case 'UPDATE_ORDER':
        //     const newOrder = orders.map(order => {
        //         return (order._id === action.orderId) ? { ...order, status: 'confirm' } : order
        //     })
        //     newState = { ...state, orders: newOrder }
        //     break

        // default:
    }

    window.orderState = newState
    return newState

}
