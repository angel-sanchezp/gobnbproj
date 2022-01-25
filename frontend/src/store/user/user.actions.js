import { userService } from '../../services/user.services.js'


export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user,
            })
            return user
        } catch (err) {
            console.log('Could not login', err);
        }

    }
}

export function signup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user,
            })
            return user
        } catch (err) {
            console.error('Could not Signup', err)
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null,
            })
            console.log('logged out')
        } catch (err) {
            console.error('Could not Logout', err)

        }
    }
}

export function getCurrentUser() {
    return async (dispatch) => {
        try {
            const user = await userService.getLoggedinUser()
            dispatch({
                type: 'SET_USER',
                user,
            })
            return user
        } catch (err) {
            console.log('User not found', err)
        }
    }
}

