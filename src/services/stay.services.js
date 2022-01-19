import { utilService } from "./utils.service.js";
import { storageService } from "./async-storage.service.js"

// export const stayService = {
    
// }

const STORAGE_KEY = 'stayDB';

// In progress : copying information
function _createStays() {
    let stays = _loadStaysFromStorage(STORAGE_KEY);
    if(!stays || !stays.length) {
        stays = [];



    }
}


// import { userService } from './user.service.js'


export const carService = {
    query,
    getById,
    save,
    remove,
    
}


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}
function remove(stayId) {
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, stayId)
}
function save(stay) {
    if (car._id) {
        return storageService.put(STORAGE_KEY, stayId)
    } else {
        car.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, stay)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))





// Dynamic function
function _createStay(id, name, type, imgUrls, price, summary, capacity, bedrooms, beds, bathrooms, sleep, amenities, host, country, countryCode, address, lat, lng, reviews) {
    return {
        id,
        name,
        type,
        imgUrls,
        price,
        summary,
        capacity,
        bedrooms,
        beds,
        bathrooms,
        sleep,
        amenities,
        host: {
            id:host.id,
            fullName: host.fullName,
            imgUrl: host.imgUrl,
        },
        location:{
            country,
            countryCode,
            address,
            lat,
            lng,
        },
        reviews
    }
}

function _saveStaysToStorage(stays) {
    storageService.save(STAY_KEY, stays);
}

function _loadStaysFromStorage() {
    storageService.load(STAY_KEY);
}