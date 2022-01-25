import { userService } from '../services/user.service.js'

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
            break
        case 'REMOVE_USER':
            newState = {
                ...state, users: state.users.filter((user) => user._id !== action.userId),
            }
            break
    }
    return newState
}