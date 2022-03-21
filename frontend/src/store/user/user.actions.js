import { userService } from "../../services/user.services.js";
import Swal from "sweetalert2";
import { showSuccessMsg, showErrorMsg } from "../../services/event-bus.service.js";

// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from "../services/socket.service.js";

export function loadUsers() {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOADING_START" });
      const users = await userService.getUsers();
      dispatch({ type: "SET_USERS", users });
    } catch (err) {
      console.log("UserActions: err in loadUsers", err);
    } finally {
      dispatch({ type: "LOADING_DONE" });
    }
  };
}

export function removeUser(userId) {
  return async (dispatch) => {
    try {
      await userService.remove(userId);
      dispatch({ type: "REMOVE_USER", userId });
    } catch (err) {
      console.log("UserActions: err in removeUser", err);
    }
  };
}
export function login(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials)
      console.log(user)
      const action = { type: 'SET_USER', user }
      dispatch(action)
      showSuccessMsg(`Welcome ${user.fullname}`)
      // Swal.fire({
      //   position: "top-end",
      //   title: "Welcome!",
      //   text: "Successfully logged in",
      //   type: "success",
      //   showConfirmButton: false,
      //   timerProgressBar: true,
      //   timer: 1000,
      // });
      return user
    } catch (err) {
      // showErrorMsg('Could not login.')
        Swal.fire({
          title: "Oh no!",
          text: "Could not login",
          type: "error",
          icon: "error",    
        });
      console.log("Cannot login");
    }
  }
}
   

export function signup(credentials) {
  return async (dispatch) => {
    // console.log("login in user action ", credentials);
    try {
      const user = await userService.signup(credentials)
      const action = { type: 'SET_USER', user }
      dispatch(action);
      showSuccessMsg(`Welcome ${user.fullname}`)
      // Swal.fire({
      //   position: "top-end",
      //   title: "Welcome!",
      //   text: "Successfully signed up",
      //   type: "success",
      //   showConfirmButton: false,
      //   timerProgressBar: true,
      //   timer: 1000,
      // }).then(function () {
      //   this.props.history.push('/');
      // });
    } catch (err) {
      // showErrorMsg('Could not sign up.')
      Swal.fire({
        title: "Oh no!",
        text: "Could not sign up",
        type: "error",
        icon: "error",
      // }).then(function () {
      //   this.props.history.push('/');
      });
      console.log("Cannot signup");
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await userService.logout();
      const action = { type: "SET_USER", user: null };
      dispatch(action);
      showSuccessMsg('Goodbye!')
      // Swal.fire({
      //   position: "top-end",
      //   title: "Goodbye!",
      //   text: "Successfully logged out",
      //   type: "success",
      //   showConfirmButton: false,
      //   timerProgressBar: true,
      //   timer: 1000,
      // }).then(function () {
      //   window.location = "/";
      // });
    } catch (err) {
      // showErrorMsg('Could not logout.')
      Swal.fire({
        title: "Oh no!",
        text: "Could not logout",
        type: "error",
        icon: "error",
      })
      .then(function () {
        window.location = "/";
      });
      console.log("Cannot logout");
    }
  };
}

export function getCurrentUser() {
  return async (dispatch) => {
    try {
      const user = await userService.getLoggedinUser();
      dispatch({
        type: "SET_USER",
        user,
      });
      return user;
    } catch (err) {
      console.log("User not found", err);
    }
  };
}

export function update(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.update(credentials);
      dispatch({
        type: "SET_USER",
        user,
      });
      return user;
    } catch (err) {
      console.log("Cannot signup", err);
    }
  };
}

export function addToLikedStays(stayId) {
  return async (dispatch) => {
    try {
      const user = userService.getLoggedinUser();
      user.likedStays.push(stayId);
      await userService.update(user);
      dispatch({
        type: "ADD_USER_LIKED_STAY",
        user,
      });
    } catch (err) {
      console.log("Cannot save stay", err);
    }
  };
}

export function removeFromLikedStays(stayId) {
  return async (dispatch) => {
    try {
      const user = userService.getLoggedinUser();
      const likedStays = user.likedStays.filter(
        (likedStay) => likedStay !== stayId
      );
      await userService.update({ ...user, likedStays });
      dispatch({
        type: "REMOVE_USER_LIKED_STAY",
        user,
      });
    } catch (err) {
      console.log("Cannot save stay", err);
    }
  };
}

export function loadUserLikedStays() {
  return async (dispatch) => {
    try {
      const user = await userService.getLoggedinUser();
      const likedStays = user.likedStays;
      dispatch({ type: "LOAD_USER_LIKED_STAYS", likedStays });
      return likedStays;
    } catch (err) {
      console.log("UserActions: err in loadStaysFromUser", err);
    }
  };
}
