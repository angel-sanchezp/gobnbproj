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

const STORAGE_KEY = "users";
const STORAGE_KEY_LOGGEDIN = "loggedinUser";

window.us = userService;

const gUsers = [
  {
    _id: "u101",
    fullname: "User 1",
    imgUrl: "/img/img1.jpg",
    isAdmin: false,
    username: "user1",
    password: "secret",
  },
  {
    _id: "u102",
    fullname: "User 2",
    imgUrl: "/img/img2.jpg",
    isAdmin: false,
    username: "user2",
    password: "secret",
  },
  {
    _id: "u103",
    fullname: "User 3",
    imgUrl: "/img/img3.jpg",
    isAdmin: false,
    username: "user3",
    password: "secret",
  },
  {
    _id: "u104",
    fullname: "User 4",
    imgUrl: "/img/img4.jpg",
    isAdmin: false,
    username: "user2",
    password: "secret",
  },
];

_createUsers();
function _createUsers() {
  storageService.query(STORAGE_KEY).then((users) => {
    if (!users || !users.length) {
      storageService.save(STORAGE_KEY, users);
    }

    return users;
  });
}


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
    // return storageService.query(STORAGE_KEY).then(users => {
    //     const user = users.find(user => user.username === credentials.username &&
    //         user.password === credentials.password)

    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
}
async function signup(userInfo) {
    const user = await httpService.post('auth/signup', userInfo)
    return _saveLocalUser(user)

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

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

function getNewUser() {
  return {
    _id: utilService.makeId(),
    fullname: "",
    imgUrl: "",
    isAdmin: false,
    username: "",
    password: "",
    email: "",
  };
}





