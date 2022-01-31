const initialState = {
    stays: [],
    filterBy: {
        location: "",
        dateIn: '',
        dateOut: "",
        guests: "",
        amenities:[],
    },
    lastRemovedStay: null,
    classHeader: 'explore-header',
    isMinFilter:false
}
export function stayReducer(state = initialState, action) {
    var newState = state
    var stays
    switch (action.type) {
        case 'SET_STAYS':
            newState = { ...state, stays: action.stays }
            break
        case 'ADD_STAY':
            newState = { ...state, stays: [...state.stays, action.stay] }
            break
        case 'UPDATE_STAY':
            stays = state.stays.map(STAY => (STAY._id === action.STAY._id) ? action.STAY : STAY)
            newState = { ...state, stays }
            break
        case 'SET_FILTER':
            console.log('action,filterby',action.filterBy)
            newState = { ...state, filterBy: action.filterBy };
            break
        case 'SET_CLASS_HEADER':
            newState = { ...state, classHeader: action.newClass };
            break
        case 'SET_MIN_FILTER':
            newState = { ...state, isMinFilter: action.isMinFilter };
            break

        default:
    }

    window.stayState = newState
    return newState

}
