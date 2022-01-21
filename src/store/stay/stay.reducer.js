const initialState = {
    stays: [],
    filterBy: {
        location: "",
        dateIn: "",
        dateOut: "",
        guests: "",

    },
    lastRemovedStay: null,
    classHeader: 'home-page',
}
export function stayReducer(state = initialState, action) {
    var newState = state
    var stays
    switch (action.type) {
        case 'SET_STAYS':
            newState = { ...state, stays: action.stays }
            // console.log('reducer', action.stays)
            break
        // case 'REMOVE_STAY':
        //     const lastRemovedStay = state.stays.find(STAY => STAY._id === action.carId)
        //     stays = state.stays.filter(STAY => STAY._id !== action.carId)
        //     newState = { ...state, stays, lastRemovedStay}
        //     break
        case 'ADD_STAY':
            newState = { ...state, stays: [...state.stays, action.stay] }
            break
        case 'UPDATE_STAY':
            stays = state.stays.map(STAY => (STAY._id === action.STAY._id) ? action.STAY : STAY)
            newState = { ...state, stays }
            break
        case 'SET_FILTER':
            newState = { ...state, filterBy: { ...action.filterBy } };
            break
        case 'SET_CLASS_HEADER':
            newState = { ...state, classHeader: action.newClass };
            break
        default:
    }
    // For debug:
    window.stayState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    console.log('New State:', newState)
    return newState

}
