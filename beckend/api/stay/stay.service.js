//REQUIRES
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

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
        criteria["inavialabilites"] = 
            { $not:
                { $elemMatch:
                    { $and: [
                        { dateIn: { $lt: checkOut }}, // start1 < end2
                        { dateOut: { $gte: checkIn }} // end1 >= start2
                    ]}
                }     
            }
    }
     
            
    if (filterBy.amenities?.length) {
        criteria["amenities"] = (typeof (filterBy.amenities) === 'string') ? { $in: [filterBy.amenities] } :
            { $all: filterBy.amenities }
    }
    console.log('criteria', criteria)
    return criteria
}

async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        const stay = await collection.findOne({ '_id': ObjectId(stayId) })
        return stay
    } catch (err) {
        logger.error(`while finding car ${stayId}`, err)
        throw err
    }
}

async function removeStay(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.deleteOne({ '_id': ObjectId(stayId) })
        return stayId
    } catch (err) {
        logger.error(`cannot remove car ${stayId}`, err)
        throw err
    }
}

async function add(stay) {
    try {
        const collection = await dbService.getCollection('stay')
        const addedStay = await collection.insertOne(stay)
        return stay
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
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
}
