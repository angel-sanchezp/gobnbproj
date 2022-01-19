import { utilService } from "./utils.service.js";
import { storageService } from "./storage.service.js"

const STAY_KEY = 'stayDB';
export const stayService = {
    query,
}

function query(){
    _createStays();
}

_createStays()

// In progress : copying information
function _createStays() {
    let stays = _loadStaysFromStorage(STAY_KEY);
    if(!stays || !stays.length) {
        stays = [];

        // Tokyo
        stays.push(_createStay("200001", "Shinjuku place", "Apartment", ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'], 50, 'Information about the place', 2, 2, 1, 1, ['6.jpg'], ['Wifi', 'Dryer' , 'Kitchen', 'Parking'], 'Japan', 'JPN', 'Shinjuku', 35.698796, 139.708853));
        stays.push(_createStay("200002", "Asakusa place", "House", ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'], 300, 'Information about the place', 5, 4, 3, 2, ['6.jpg'], ['Wifi', 'Wash disher' , 'Kitchen', 'Parking', 'Working space'], 'Japan', 'JPN', 'Asakusa', 35.719782, 139.793300));
        stays.push(_createStay("200003", "Shibuya place", "Apartment", ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'], 120, 'Information about the place', 3, 3, 2, 1, ['6.jpg'], ['TV', 'Dryer' , 'Kitchen', 'Parking', 'AC'], 'Japan', 'JPN', 'Shibuya', 35.664252, 139.702251));
        console.log(stays);
        // Paris

        // London

        // New Zealand

        // Mexico

        // Others

    }

    _saveStaysToStorage(stays);
    return stays;
}


// Dynamic function
function _createStay(id, name, type, imgUrls, price, summary, capacity, bedrooms, beds, bathrooms, sleep, amenities, country, countryCode, address, lat, lng) {
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
        
        location:{
            country,
            countryCode,
            address,
            lat,
            lng,
        },
        // reviews:{
        //     user1,
        //     user2
        // },
    }
}

function _saveStaysToStorage(stays) {
    storageService.save(STAY_KEY, stays);
}

function _loadStaysFromStorage() {
    storageService.load(STAY_KEY);
}