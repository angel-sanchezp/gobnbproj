import { storageService } from './async-storage.service.js'
import { httpService } from '../services/http.services.js'


const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
var gWatchedUser = null;


export const userService = {
    login,
    getUsers,
    logout,
    signup,
    getLoggedinUser,
    emptyUser,
    chargeAmount,
    getById,
    remove,
    update,
}

window.us = userService


function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    gWatchedUser = user;
    return user;
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // await storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _setLoggedinUser(user)
    return user;
}



async function login(userCred) {
    // return storageService.query(STORAGE_KEY).then(users => {
    //     const user = users.find(user => user.username === credentials.username &&
    //         user.password === credentials.password)

    const user = await httpService.post('auth/login', userCred)
    if (user) return _setLoggedinUser(user)
}
async function signup(userInfo) {
    const user = await httpService.post('auth/signup', userInfo)
    return _setLoggedinUser(user)

    // return storageService.post(STORAGE_KEY, userInfo)
    //     .then((user) => {
    //         _setLoggedinUser(user)
    //         return user
    //     })


}
async function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return await httpService.post('auth/logout')

}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function chargeAmount(amount) {
    const user = getLoggedinUser()
    user.score -= amount
    if (user.score < 0) return Promise.reject('Not enough score')
    _setLoggedinUser(user)
    return Promise.resolve(user)
    // TODO: need to also update the user, in the user array in localStorage
}



function emptyUser() {
    return {
        username: '',
        password: '',
        fullname: '',
        score: 10000
    }
}

function _setLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
}


// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Noya', score: 22})
// userService.login({ username: 'muki', password: 'muki1' })