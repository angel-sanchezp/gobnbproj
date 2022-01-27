import { storageService } from './async-storage.service.js'
import { httpService } from '../services/http.services.js'
import { utilService } from '../services/utils.service.js'
import { socketService} from './socket.service'



const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
var gWatchedUser = null;


export const userService = {
    login,
    getUsers,
    logout,
    signup,
    getLoggedinUser,
    getById,
    remove,
    update,
}

window.us = userService;


// _createUsers();
// function _createUsers() {
//     storageService.query(STORAGE_KEY).then((users) => {
//         if (!users || !users.length) {
//             storageService.save(STORAGE_KEY, users);
//         }

//         return users;
//     });
// }


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
    if (_saveLocalUser()._id === user._id) _saveLocalUser(user)
    return user;
}



async function login(userCred) {
    console.log(userCred)
    // return storageService.query(STORAGE_KEY).then(users => {
    //     const user = users.find(user => user.username === credentials.username &&
    //         user.password === credentials.password)
    const user = await httpService.post('auth/login', userCred)
    // socketService.emit('set-user-socket', user._id);
    if (user) return _saveLocalUser(user)
}
async function signup(userInfo) {
    console.log('sign up in user service', userInfo)
    const user = await httpService.post('auth/signup', userInfo)
    // socketService.emit('set-user-socket', userInfo._id);

    if (user) return _saveLocalUser(user)

    // return storageService.post(STORAGE_KEY, userInfo)
    //     .then((user) => {
    //         _setLoggedinUser(user)
    //         return user
    //     })


}
async function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    // socketService.emit('unset-user-socket');

    return await httpService.post('auth/logout')

}

function _saveLocalUser(user) {
    console.log('save to session in service', user)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}







