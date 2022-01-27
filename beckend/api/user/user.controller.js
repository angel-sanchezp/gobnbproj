const userService = require('./user.service.js')
const logger = require('../../services/logger.service')

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    addUser,
    getHostUser
}
async function getUser(req, res) {
    try {
        console.log('user in controller',req.params.id)
        const user = await userService.getById(req.params.id)
        res.send(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

async function getHostUser(req, res) {
    try {
        console.log('host in controller',req.params.id)
        const host = await userService.getHostById(req.params.id)
        res.send(host)
    } catch (err) {
        logger.error('Failed to get host', err)
        res.status(500).send({ err: 'Failed to get host' })
    }
}





async function getUsers(req, res) {
    try {
        const filterBy = {
            txt: req.query?.txt || '',
        }
        const users = await userService.query(filterBy)
        res.send(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function deleteUser(req, res) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete user', err)
        res.status(500).send({ err: 'Failed to delete user' })
    }
}

async function updateUser(req, res) {
    try {
        const user = req.body
        const savedUser = await userService.update(user)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}

async function addUser(req,res){
    try{
        const user =req.body
        console.log('server js ', req.body)
        const addedUser= await userService.add(user)
        res.json(addedUser)

    }catch(err){
        logger.error('Failed to add user', err)
        res.status(500).send({ err: 'Failed to add user' })
    }
}


