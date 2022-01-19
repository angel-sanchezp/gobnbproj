const initialState = {
    stays: [{_id:"200001",name:"Shinjuku place",type:"Apartment",imgUrls:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],price:50,summary:"Information about the place",type:"Apartment"}],
    lastRemovedStay: null
}
export function stayReducer(state = initialState, action) {
    var newState = state
    var stays
    switch (action.type) {
        case 'SET_STAYS':
            newState = { ...state, stays: action }
            break
        // case 'REMOVE_STAY':
        //     const lastRemovedStay = state.stays.find(STAY => STAY._id === action.carId)
        //     stays = state.stays.filter(STAY => STAY._id !== action.carId)
        //     newState = { ...state, stays, lastRemovedStay}
        //     break
        case 'ADD_STAY':
            newState = { ...state, stays:[...state.stays, action.stay]}
            break
        case 'UPDATE_STAY':
            stays = state.stays.map(STAY => (STAY._id === action.STAY._id)? action.STAY : STAY)
            newState = { ...state, stays}
            break
        default:
    }
    // For debug:
    window.stayState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
