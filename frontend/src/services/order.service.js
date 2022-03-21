import { httpService } from '../services/http.services.js'
// import { storageService } from './async-storage.service'
// import {userService} from '../services/user-service'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from './socket.service'

export const orderService = {
  addOrder,
  query,
  remove,
  updateOrder
}


// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

async function query(filterBy) {
  const { hostId, buyerId } = filterBy;
  const url = hostId ? `order/host/${hostId}` : `order/user/${buyerId}`;
  const orders = await httpService.get(url)
  return orders
}

function remove(orderId) {
  return httpService.delete(`order/${orderId}`)

}
async function addOrder(orderInfo) {
  const order = await httpService.post(`order`, orderInfo)

  // Only relevant when frontend-only
  // review.byUser = userService.getLoggedinUser()
  // review.aboutUser = await userService.getById(review.aboutUserId)
  // console.log('order to add in order service ',order)
  // const addedOrder = storageService.save('OrderDB', order)

  return order
}

async function updateOrder(order) {
  // await storageService.put('user', user)
  order = await httpService.put(`order/${order._id}`,order)
  // Handle case in which admin updates other user's details
  return order;
}




