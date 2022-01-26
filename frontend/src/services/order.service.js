import { httpService } from '../services/http.services.js'
// import { storageService } from './async-storage.service'
// import {userService} from '../services/user-service'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from './socket.service'

export const orderService = {
  add,
  query,
  remove
}


// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query() {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`order`)
  // return storageService.query('OrderDB')
}

function remove(orderId) {
  return httpService.delete(`order/${orderId}`)
  // return storageService.remove('OrderDB', orderId)

}
async function add(order) {
  const addedOrder = await httpService.post(`order`, order)

  // Only relevant when frontend-only
  // review.byUser = userService.getLoggedinUser()
  // review.aboutUser = await userService.getById(review.aboutUserId)
  // console.log('order to add in order service ',order)
  // const addedOrder = storageService.save('OrderDB', order)

  return addedOrder
}



