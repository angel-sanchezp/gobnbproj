const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const socketService = require('../../services/socket.service')
const orderService = require('./order.service')

async function getOrders(req, res) {
    console.log('get orders',req.params)
    try {
        const orders = await orderService.query(req.params)
        res.send(orders)
    } catch (err) {
        logger.error('Cannot get reviews', err)
        res.status(500).send({ err: 'Failed to get reviews' })
    }
}

async function deleteOrder(req, res) {
    console.log(req.params.id)
    try {
        await orderService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete review', err)
        res.status(500).send({ err: 'Failed to delete review' })
    }
}


async function addOrder(req, res) {
    console.log('req order add',req.body);
    try {
        var order = req.body
        // order.byUserId = req.session.user._id
        order = await orderService.add(order)
        
        // prepare the updated review for sending out
        // order.aboutUser = await userService.getById(order.aboutUserId)
        
        // Give the user credit for adding a review
        // var user = await userService.getById(order.byUserId)
        // user.score += 10;
        // user = await userService.update(user)
        // order.byUser = user
        // const fullUser = await userService.getById(user._id)

        // console.log('CTRL SessionId:', req.sessionID);
        // socketService.broadcast({type: 'review-added', data: review, userId: review.byUserId})
        // socketService.emitToUser({type: 'review-about-you', data: review, userId: review.aboutUserId})
        // socketService.emitTo({type: 'user-updated', data: fullUser, label: fullUser._id})

        res.send(order)

    } catch (err) {
        console.log(err)
        logger.error('Failed to add review', err)
        res.status(500).send({ err: 'Failed to add review' })
    }
}

module.exports = {
    getOrders,
    deleteOrder,
    addOrder
}