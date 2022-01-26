import { orderService } from '../../services/order.service.js'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'
// import { userService } from '../../services/user.services'


export function loadOrders() {
  return async dispatch => {
    try {
      const orders = await orderService.query()
      dispatch({ type: 'SET_ORDERS', orders })
    //   socketService.on(SOCKET_EVENT_REVIEW_ADDED, (order) =>{
    //     dispatch({ type: 'ADD_REVIEW', order })
    //   })

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err)
    }
  }
}

// export function addOrder(order) {
//   return async dispatch => {
//     try {
//       const addedReview = await orderService.add(order)
//       dispatch({ type: 'ADD_REVIEW', order: addedReview })

//       const score = await userService.changeScore(SCORE_FOR_REVIEW)
//       dispatch({ type: 'SET_SCORE', score })
      
//     } catch (err) {
//       console.log('ReviewActions: err in addReview', err)
//     }
//   }
// }

// export function removeReview(orderId) {
//   return async dispatch => {
//     try {
//       await orderService.remove(orderId)
//       dispatch({ type: 'REMOVE_REVIEW', orderId })
//     } catch (err) {
//       console.log('ReviewActions: err in removeReview', err)
//     }
//   }
// }