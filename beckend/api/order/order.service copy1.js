const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

function getaggregation(criteria) {

    return [
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
        }
        // {
        //     $lookup:
        //     {
        //         from: 'stay',
        //         localField: 'stay._id',
        //         foreignField: '_id',
        //         as: 'stayDetails'
        //     }
        // },
        // {
        //     $unwind: '$stayDetails'
        // },
        // {
        //     $lookup:
        //     {
        //         from: 'user',
        //         localField: 'buyer._id',
        //         foreignField: '_id',
        //         as: 'userDetails'
        //     }
        // },
        // {
        //     $unwind: '$userDetails'
        // },
        // {
        //     $lookup:
        //     {
        //         from: 'order',
        //         localField: '._id',
        //         foreignField: '_id',
        //         as: 'orderDetails'
        //     }
        // },
        // {
        //     $unwind: '$orderDetails'
        // }
    ]


}

async function query(filterBy = {}) {
    // console.log('filterBy in order', filterBy)
    // console.log('criteria in order service',criteria)
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('order')
        const mongoQuery = getaggregation(criteria)
        // console.log('mongo query', mongoQuery)
        var orders = await collection.aggregate(mongoQuery).toArray()
        // console.log('orders after ongo query', orders)
        orders = orders.map(order => {
            // console.log('order in map ', order)
            order.hostDetails = { fullname: order.hostDetails.fullname, stays: order.hostDetails.stays }
            // order.stayDetails = { name: order.stay.name,  imgUrls:order.imgUrls }
            // order.userDetails = {fullname:order.userDetails.fullname  }
            // order.orderDetails={_id:order.orderDetails._id, totalPrice:order.orderDetails.totalPrice , createdAt: order.orderDetails.createdAt,
            // checkIn:order.orderDetails.startDate, checkOut:order.orderDetails.endDate, guests:order.orderDetails.guests}
            return order
        })
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
    try {
        const collection = await dbService.getCollection('order')
        await collection.insertOne(order)
        return order;
    } catch (err) {
        logger.error('cannot insert order', err)
        throw err
    }
}



function _buildCriteria(filterBy) {
    const criteria = {}
    // if (filterBy.byUserId) criteria.byUserId = filterBy.byUserId

    return criteria
}

module.exports = {
    query,
    remove,
    add
}


