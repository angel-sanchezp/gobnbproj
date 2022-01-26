const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    // console.log('filterBy in order',filterBy)
    const criteria = _buildCriteria(filterBy)
    // console.log('criteria in order service',criteria)
    try {
        const collection = await dbService.getCollection('order')
        var orders = await collection.find(criteria).toArray()
        // console.log('after build criteria ',criteria)
       var orders = await collection.aggregate([
            {
                $match: criteria
            },
            {
                $lookup:
                {
                    from: 'host',
                    localField: 'hostId',
                    foreignField: '_id',
                    as: 'hostDetails'
                }
            },
            {
                $unwind: '$hostDetails'
            },
            {
                $lookup:
                {
                    from: 'stay',
                    localField: 'stay_id',
                    foreignField: '_id',
                    as: 'stayDetails'
                }
            },
            {
                $unwind: '$stayDetails'
            }
        ]).toArray()
        orders = orders.map(order => {
            console.log('order in map ', order)
            order.hostDetails = { _id: order.hostDetails._id, fullname: order.hostDetails.fullname , stays:order.hostDetails.stays }
            order.stayDetails = { name: order.stayDetails.name,  imgUrls:order.stayDetails.imgUrls }
            return order
        })

        console.log('orders after agragtzia', orders)

        return orders
    } catch (err) {
        logger.error('cannot find orders', err)
        throw err
    }

}

async function remove(orderId) {
    try {
        // const store = asyncLocalStorage.getStore()
        // const { userId, isAdmin } = store
        const collection = await dbService.getCollection('order')
        // remove only if user is owner/admin
        const criteria = { _id: ObjectId(orderId) }
        // if (!isAdmin) criteria.byUserId = ObjectId(userId)
        await collection.deleteOne(criteria)
    } catch (err) {
        logger.error(`cannot remove review ${orderId}`, err)
        throw err
    }
}


async function add(order) {
    console.log(order.hostId)
    try {
        const collection = await dbService.getCollection('order')
        const orderToAdd = {
            ...order,
            hostId: ObjectId(order.hostId),
            buyer_id: ObjectId(order.buyer_id),
            stay_id:ObjectId(order.stay_id),
        }
        await collection.insertOne(orderToAdd)
        return order;
    } catch (err) {
        logger.error('cannot insert order', err)
        throw err
    }
}



function _buildCriteria(filterBy) {
    console.log(filterBy)
    const criteria = {}
    if (filterBy.user) criteria.buyer_id=  filterBy.user

    return criteria
}

// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.byUserId) criteria.byUserId = filterBy.byUserId
//     return criteria
// }


module.exports = {
    query,
    remove,
    add
}


