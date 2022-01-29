const initialState = {
    orders: [],
    isNewOrder:false,
    isConfirmedOrder:false

}
export function orderReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break
        case 'NEW_ORDER':
            console.log(action.isNewOrder)
            newState = { ...state, isNewOrder: action.isNewOrder }
            break
        case 'CONFIRMED_ORDER':
            newState = { ...state, isConfirmedOrder:  action.isConfirmedOrder }
            break
        case 'ADD_ORDER':
            newState = { ...state, orders: [...state.orders, action.order] }
            break
        case 'UPDATE_ORDER':
            const newOrder = state.orders.map(order => {
                return (order._id === action.orderId) ? { ...order, status: 'confirm' } : order
            })
            newState = { ...state, orders: [...newOrder] }
            break
     

        default:
    }

    window.orderState = newState
    return newState

}
