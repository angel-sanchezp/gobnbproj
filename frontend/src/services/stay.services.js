import { httpService } from './http.services.js'
// import { storageService } from './async-storage.service.js'
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { isEmpty } from 'lodash';

const moment = extendMoment(Moment);


const STORAGE_KEY = 'STAYDB'

export const stayService = {
    query,
    getById,
    save,
    remove
    
}


function query(filterBy) {
  return httpService.get('stay', filterBy)
}

function getById(stayId) {
    return httpService.get(`stay/${stayId}`)
}
function remove(stayId) {
    // return Promise.reject('Not now!');
    return httpService.remove(`/${stayId}`)
}
function save(stay) {
    if (stay._id) {
        return httpService.put(`/${stay}`)
    } else {
        // stay.owner = userService.getLoggedinUser()
        return httpService.post(stay)
    }
}