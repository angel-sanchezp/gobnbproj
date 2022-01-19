const initialState = {
    stays: [],
    cart:[],
    lastRemovedStay: null
}
export function carReducer(state = initialState, action) {
    var newState = state
    var stays
    var cart
    switch (action.type) {
        case 'SET_CARS':
            newState = { ...state, stays: action.stays }
            break
        case 'REMOVE_CAR':
            const lastRemovedStay = state.stays.find(car => car._id === action.carId)
            stays = state.stays.filter(car => car._id !== action.carId)
            newState = { ...state, stays, lastRemovedStay}
            break
        case 'ADD_CAR':
            newState = { ...state, stays:[...state.stays, action.car]}
            break
        case 'UPDATE_CAR':
            stays = state.stays.map(car => (car._id === action.car._id)? action.car : car)
            newState = { ...state, stays}
            break

        case 'UNDO_REMOVE_CAR':
            if (state.lastRemovedStay) {
                newState = { ...state, stays: [...state.stays, state.lastRemovedStay], lastRemovedStay: null}
            }
            break
        default:
    }
    // For debug:
    window.carState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
