import { storageService } from "./async-storage.service.js";
import { utilService } from "./utils.service.js";
import userJson from "../data/user.json";

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getNewUser,
};

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

function login(credentials) {
  return storageService.query(STORAGE_KEY).then((users) => {
    const user = users.find(
      (user) =>
        user.username === credentials.username &&
        user.email === credentials.email
    );
    if (user) {
      localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
      return user;
    } else {
      console.log("No user with those credentials");
      console.log(user);
      return user;
    }
  });
}

function signup(userInfo) {
  return storageService.post(STORAGE_KEY, userInfo).then((user) => {
    localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
    return user;
  });
}

function logout() {
  localStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
  return Promise.resolve();
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





