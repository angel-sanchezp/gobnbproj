export const storageService = {
    save: saveToStorage,
    load: loadFromStorage,
    query
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    console.log(' entity in query ',entities)

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject('OOOOPs')
            resolve(entities)
        }, delay)   
    })
    // return Promise.resolve(entities)
}