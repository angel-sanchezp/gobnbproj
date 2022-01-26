import { userService } from '../../services/user.services'

const loggedInUser = userService.getLoggedinUser()
const initialState = {
    user: loggedInUser ? loggedInUser : null,
}


// add update user
export function userReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break;
     
    }
    return newState
}