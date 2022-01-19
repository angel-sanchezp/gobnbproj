
import {storageService} from './async-storage.service.js'


const STORAGE_KEY= 'STAYDB'

export const stayService = {
    query,
    getById,
    save,
    remove,
}

const gStays =[   {
    "_id": "200001",
    "name": "Shinjuku",
    "type": "Apartment",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 50,
    "summery": "Information",
    "capacity": 2,
    "bedrooms": 2,
    "beds": 1,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Dryer" , "Kitchen", "Parking"],
    "host": {
        "_id": "1234",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Japan",
        "countryCode": "JPN",
        "address": "Shinjuku",
        "lat": 35.698796, 
        "lng":139.708853
    },
    "reviews": [{
        "id": "00001",
        "txt": "Nice apartment",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"]

},
{
    "_id": "200002",
    "name": "Asakusa",
    "type": "House",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 300,
    "summery": "Information",
    "capacity": 5,
    "bedrooms": 4,
    "beds": 3,
    "bathrooms": 2,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "1234",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Japan",
        "countryCode": "JPN",
        "address": "Asakusa",
        "lat": 35.719782, 
        "lng":139.793300
    },
    "reviews": [{
        "id": "00004",
        "txt": "Wow!",
        "rate": 5,
        "by": {
            "_id": "u103",
            "fullname": "user3",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"]

},
{
    "_id": "200003",
    "name": "Shibuya",
    "type": "Apartment",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 120,
    "summery": "Information",
    "capacity": 3,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "1234",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Japan",
        "countryCode": "JPN",
        "address": "Shibuya",
        "lat": 35.664252, 
        "lng":139.702251
    },
    "reviews": [{
        "id": "00005",
        "txt": "Wow!",
        "rate": 5,
        "by": {
            "_id": "u103",
            "fullname": "user3",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"]

}
]




_createStays()

function  _createStays(){
     storageService.query(STORAGE_KEY)
     .then((stays)=>{
           if(!stays || !stays.length) {
            storageService.save(STORAGE_KEY,gStays)
           }

           return stays 
     })


    

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
    if (stay._id) {
        return storageService.put(STORAGE_KEY, stay)
    } else {
        // stay.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, stay)
    }
}