import { orderService } from '../../services/order.service.js'
import { userService } from '../../services/user.services.js'
import Swal from "sweetalert2";

const loadOrders = (dispatch, filterBy) => {
  orderService.query(filterBy)
  .then(orders => {
      console.log('stays from DB:', orders)
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
    return async (dispatch) => {
        console.log("order action ", order);
        try {
            await orderService.addOrder(order)
            const action = { type: 'ADD_ORDER', order };
            dispatch(action);
            Swal.fire({
                position: 'top-end',
                title: "Thank you!",
                text: "Successfully reserved stay.",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
              }).then(function () {
                window.location = "/trips";
              });
        } catch (err) {
            Swal.fire({
                title: "Oh no!",
                text: "Could not reserve stay",
                type: "error",
                icon: "error",
              }).then(function () {
                window.location = "/explore";
              });
            console.log('Cannot add order', err);
        }
    }
}

