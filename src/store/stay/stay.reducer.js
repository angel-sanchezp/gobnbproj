const initialState = {
    stays: [],
    filterBy: {
        location: "",
        dateIn: "",
        dateOut: "",
        guests: "",
        amenities:[],
        sortBy:""

    },
    lastRemovedStay: null,
    // classHeader: 'home-header-expanded',
    classHeader: 'explore-header',
    isMinFilter:false
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
            console.log('action,filterby',action.filterBy)
            newState = { ...state, filterBy: { ...action.filterBy } };
            break
        case 'SET_CLASS_HEADER':
            // console.log(action.newClass)
            newState = { ...state, classHeader: action.newClass };
            break
        case 'SET_MIN_FILTER':
            newState = { ...state, isMinFilter: action.isMinFilter };
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
