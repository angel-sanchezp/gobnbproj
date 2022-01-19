import { utilService } from "./utils.service.js";
import { storageService } from "./storage.service.js"

// export const stayService = {
    
// }

const STAY_KEY = 'stayDB';

// In progress : copying information
function _createStays() {
    let stays = _loadStaysFromStorage(STAY_KEY);
    if(!stays || !stays.length) {
        stays = [];



    }
}


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