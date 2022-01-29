import { orderService } from '../../services/order.service.js'
import { userService } from '../../services/user.services.js'
import Swal from "sweetalert2";


const loadOrders = (dispatch, filterBy) => {
  orderService.query(filterBy)
    .then(orders => {
      dispatch({
        type: 'SET_ORDERS',
        orders
      })
    })
    .catch(err => {
      console.log('Cannot load stays', err)
    })
}
export function loadHostOrders() {
  return (dispatch) => {
    const host = userService.getLoggedinUser()
    loadOrders(dispatch, { hostId: host._id })
  }
}
export function loadBuyerOrders() {
  return (dispatch) => {
    const buyer = userService.getLoggedinUser()
    loadOrders(dispatch, { buyerId: buyer._id })
  }
}
export function addOrder(order) {
  return async () => {
    try {
      await orderService.addOrder(order)
      Swal.fire({
        position: 'top-end',
        title: "Thank you!",
        text: "Successfully reserved stay.",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500
      })
    } catch (err) {
      Swal.fire({
        title: "Oh no!",
        text: "Could not reserve stay",
        type: "error",
        icon: "error",
      })
    }
  }
}
export function updateOrder(order) {
  console.log('update oder from socket', order)
  return async (dispatch) => {
    try {
      await orderService.updateOrder(order)
      const action = { type: 'UPDATE_ORDER', order };
      dispatch(action);
    } catch (err) {
      console.log('Cannot add order', err);
    }
  }
}
export function setNewOrder() {
  return async (dispatch) => {
    try {
      const action = { type: 'NEW_ORDER', isNewOrder:true};
      dispatch(action);
    } catch (err) {
      console.log('Cannot add order', err);
    }
  }
}
export function setConfirmedOrder() {
  return async (dispatch) => {
    try {
      const action = { type: 'CONFIRMED_ORDER', isConfirmedOrder:true };
      dispatch(action);
    } catch (err) {
      console.log('Cannot add order', err);
    }
  }
}


















