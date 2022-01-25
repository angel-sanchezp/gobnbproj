//REQUIRES
const fs = require('fs')
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

//FROM JSON 
// var toys = require('../../data/toys.json')

module.exports = {
    query,
    getById,
    removeStay,
    add,
    update
}

async function query(filterBy = {}) {
    console.log('filter in query stys service ', filterBy)
    const criteria = _buildCriteria(filterBy)
    console.log('criteria', criteria)
    try {

        const collection = await dbService.getCollection('stay')
        var stays = await collection.find(criteria).toArray()
        return stays
    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }

    // var filterBy = JSON.parse(filterBy);
    // console.log('filter in service', filterBy)
    // const filterdToys = toys.filter((toy) => {
    //     const isByLabel = isLabelsMatch(toy.labels, filterBy.labels);
    //     return (
    //         toy.name.toUpperCase().includes(filterBy.name.toUpperCase()) &&
    //         toy.inStock === filterBy.inStock &&
    //         isByLabel
    //     );
    // });
    // return Promise.resolve(filterdToys);
}


function _buildCriteria(filterBy = {}) {
    console.log('_buildCriteria');
    console.log('line 48, filterBy: ', filterBy)
    const criteria = {}
    if (filterBy.location) {
        criteria["location.country"] = { $regex: filterBy.location, $options: 'i' }
    }
    if (filterBy.maxPrice && filterBy.minPrice) {
        const maxPrice = JSON.parse(filterBy.maxPrice)
        const minPrice = JSON.parse(filterBy.minPrice)
        criteria["price"] = { $gt: minPrice, $lt: maxPrice }

    }
    if (filterBy?.dateIn && filterBy?.dateOut) {
        const checkIn = JSON.parse(filterBy.dateIn)
        const checkOut = JSON.parse(filterBy.dateOut)
        criteria.$or = [
            {
                inavialabilites:
                {
                    $elemMatch:
                    {
                        dateIn: { $lt: checkIn },
                        dateOut: { $lte: checkIn }
                    }
                }
            },
            {
                inavialabilites:
                {
                    $elemMatch:
                    {
                        dateOut: { $lt: checkIn }
                    }
                }
            },
            {
                inavialabilites:
                {
                    $elemMatch:
                    {
                        dateIn: { $gte: checkOut }
                    }
                }
            },
            { inavialabilites: null },


        ]


    }
    if (filterBy.amenities?.length) {
        criteria["amenities"] = (typeof (filterBy.amenities) === 'string') ? { $in: [filterBy.amenities] } :
            { $all: filterBy.amenities }
    }
    console.log('criteria', criteria)
    return criteria
}


// function isLabelsMatch(toyLabels, labels) {
//     console.log(toyLabels, 'in toy service toy labels')
//     console.log(labels, 'toy labels of filter ')
//     return labels.every(label => {
//         return toyLabels.includes(label)
//     })

// }







async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        const stay = collection.findOne({ '_id': ObjectId(stayId) })
        return stay
    } catch (err) {
        logger.error(`while finding car ${stayId}`, err)
        throw err
    }

    // var toy = toys.find(toy => toy._id === toyId)
    // if (!toy) return Promise.reject(`No such bug ${toyId}`);
    // return Promise.resolve(toy)
}

async function removeStay(stayId) {
    try {
        // console.log(toyId)
        const collection = await dbService.getCollection('stay')
        await collection.deleteOne({ '_id': ObjectId(stayId) })
        return stayId
    } catch (err) {
        logger.error(`cannot remove car ${stayId}`, err)
        throw err
    }


    // toys = toys.filter(toy => toy._id !== toyId)
    // return _saveToysTofile()
}

async function add(stay) {
    // console.log('user after addd', req.session)

    // console.log('adeddtoy',toy)

    try {
        const collection = await dbService.getCollection('stay')
        const addedStay = await collection.insertOne(stay)
        return stay
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
    // console.log('service beckend', toy)
    // toy._id = _makeId()
    // // bug.timeStamp = Date.now()
    // toys.unshift(toy)
    // return _saveToysTofile().then(() => toy)
}

async function update(stay) {
    try {
        const { location, price, amenities } = stay
        const savedStay = {
            _id: ObjectId(stay._id), // needed for the returnd obj
            updateAt: Date.now(),
            location, price, amenities
        }
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: savedStay._id }, { $set: savedStay })
        return savedStay;
    } catch (err) {
        logger.error(`cannot update stay ${stayId}`, err)
        throw err
    }

    // toys = toys.map(toy => (toy._id === toyToUpdate._id) ? toyToUpdate : toy);
    // return _saveToysTofile().then(() => toyToUpdate)
}



//SAVE TO JSON FILE
function _saveToysTofile() {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/toys.json', JSON.stringify(toys, null, 2), (err) => {
            if (err) {
                console.log(err);
                reject('Cannot write to file')
            } else {
                console.log('Wrote Successfully!');
                resolve()
            }
        });
    })

}


//HELPER
function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}