import {userService} from '../../services/user.services.js'

// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from "../services/socket.service.js";


export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}
export function login(user) {
    return  async(dispatch) => {
        try{
           await userService.login(user)
           const action = {type: 'SET_USER', user}
           dispatch(action)
            
        }catch(err) {
        console.log('Cannot login')
        }
    }
}
export function signup(user) {
    return async (dispatch) => {
        try{
            await userService.signup(user)
            const action = {type: 'SET_USER', user}
            dispatch(action)


        }catch(err) {
            console.log('Cannot signup')
        }    
    }
}
export function logout() {
    return async (dispatch) => {
        try{
           await userService.logout()
           const action = {type: 'SET_USER', user: null}
           dispatch(action)

        }catch(err){
            console.log('Cannot logout')
        }
    }
}


// export function loadAndWatchUser(userId) {
//     return async (dispatch) => {
//         try {
//             const user = await userService.getById(userId);
//             dispatch({ type: 'SET_WATCHED_USER', user })
//             // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
//             socketService.off(SOCKET_EVENT_USER_UPDATED)
//             socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
//                 console.log('USER UPADTED FROM SOCKET');
//                 dispatch({ type: 'SET_WATCHED_USER', user })
//             })
//         } catch (err) {
//             // showErrorMsg('Cannot load user')
//             console.log('Cannot load user', err)
//         }
//     }
// }