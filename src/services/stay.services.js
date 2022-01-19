
import {storageService} from './async-storage.service.js'

const STORAGE_KEY = 'STAYDB'

export const stayService = {
    query,
    getById,
    save,
    remove,
}

 const gStays=[
    {_id:"200001",name:"Shinjuku place",type:"Apartment",imgUrls:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],price:50,summary:"Information about the place",type:"Apartment"},
    {_id:"200002",name:"Beutiful Place",type:"Apartment",imgUrls:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],price:50,summary:"Information about the place",type:"Apartment"},
    {_id:"200003",name:"love apt",type:"Apartment",imgUrls:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],price:50,summary:"Information about the place",type:"Apartment"}


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