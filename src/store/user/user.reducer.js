import {userService} from '../../services/user.services'

const initialState = {
    user: userService.getLoggedinUser()
}

export function userReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break;
        case 'DECREASE_FROM_SCORE':
            newState = { ...state, user: {...state.user, score : state.user.score - action.amount} }
            break;
    }
    return newState;
}