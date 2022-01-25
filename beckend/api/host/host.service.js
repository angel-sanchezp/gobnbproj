const fs = require('fs');
// var users = require('../data/user.json')

const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const orderService = require('../order/order.service')
const PAGE_SIZE = 10;

module.exports = {
    query,
    getById,
    getByUsername,
    remove,
    add,
    update,
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('host')
        var hosts = await collection.find(criteria).toArray()
        hosts = hosts.map(host => {
            delete host.password
            host.createdAt = ObjectId(host._id).getTimestamp()
            // Returning fake fresh data
            // user.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
            return host
        })
        return hosts
    } catch (err) {
        logger.error('cannot find hosts', err)
        throw err
    }
}
    // let filteredUsers = users;
    // filteredUsers = filteredUsers.filter(user => (user.price < filterBy.maxPrice) && user.price > filterBy.minPrice)
    // const startIdx = PAGE_SIZE * filterBy.currPage;
    // if (startIdx < filteredUsers.length) {
    //     filteredUsers = filteredUsers.slice(startIdx, startIdx + PAGE_SIZE);
    // }
    // return Promise.resolve(filteredUsers)




// && user.password === credentials.password
 async function getByUsername(username) {
     
     console.log('credential in check login ', username)
     try {
         const collection = await dbService.getCollection('host')
         const host = await collection.findOne({ username })
         return host
        } catch (err) {
            logger.error(`while finding host ${username}`, err)
            throw err
        }

  
    // const user = users.find(user => user.username === credentials.username)
    // if (user) {
    //     console.log(user)
    //     user = { ...user }
    //     delete user.password
    // }

    // console.log('check login ', user)
    // return Promise.resolve(user)
}

async function getById(hostId) {
    try {
        // console.log('user by Id  in sevice ',userId)
        const collection = await dbService.getCollection('user')
        const host = await collection.findOne({ '_id': ObjectId(hostId) })
        // console.log('user after get from collection',user)

        delete host.password

        host.historyOrders = await orderService.query({ byUserId: ObjectId(host._id) })
        host.historyOrders= host.historyOrders.map(order => {
            delete order.byUser
            return order
        })

        return host
    } catch (err) {
        logger.error(`while finding user ${hostId}`, err)
        throw err
    }
}
// function getById(userId) {
//     var user = users.find(user => user._id === userId)
//     if (!user) return Promise.reject(`No such User ${userId}`)

//     return Promise.resolve(user)
// }

async function remove(hostId) {
    try {
        const collection = await dbService.getCollection('host')
        await collection.deleteOne({ '_id': ObjectId(hostId) })
    } catch (err) {
        logger.error(`cannot remove host ${hostId}`, err)
        throw err
    }
}

// function remove(userId) {
//     users = users.filter(user => user._id !== userId)
//     return _saveUsersToFile()
// }

async function add(host) {
    try {
        // peek only updatable fields!
        const hostToAdd = {
            hostname: host.username,
            password: host.password,
            fullname: host.fullname,
            stays:host.stays,
            isAdmin:false
        }
        const collection = await dbService.getCollection('host')
        await collection.insertOne(hostToAdd)
        return hostToAdd
    } catch (err) {
        logger.error('cannot insert host', err)
        throw err
    }
}

// function add(user) {
//     user._id = _makeId()
//     users.unshift(user)
//     return _saveUsersToFile().then(() => user)
// }

async function update(host) {
    try {
        // peek only updatable fields!
        const hostToSave = {
            _id: ObjectId(host._id),
            username: host.username,
            fullname: host.fullname,
        }
        const collection = await dbService.getCollection('host')
        await collection.updateOne({ '_id': hostToSave._id }, { $set: hostToSave })
        
        console.log('update service host',hostToSave)
        return hostToSave;
    } catch (err) {
        logger.error(`cannot update user ${host._id}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                username: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    // if (filterBy.minBalance) {
    //     criteria.score = { $gte: filterBy.minBalance }
    // }
    return criteria
}

// function update(userToUpdate) {
//     if (userToUpdate.price > 1000) return Promise.reject('price too high');
//     users = users.map(user => (user._id === userToUpdate._id) ? userToUpdate : user);
//     return _saveUsersToFile().then(() => userToUpdate)
// }

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _saveUsersToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/user.json', JSON.stringify(users, null, 2), (err) => {
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