const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    let { username, password } = req.body;
    // console.log('login req in aouth contoller',req.body)
    
    // console.log('login in controller ',username, password)
    try {
        const user = await authService.login(username, password)
        req.session.user = user
        // console.log('user after service',req.session)
        // console.log('user after service', req)
        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}


async function signup(req, res) {
    try {
        // console.log(req.body)
        const { username, password, fullname } = req.body
        // Never log passwords
        // logger.debug(fullname + ', ' + username + ', ' + password)
        const account = await authService.signup(username, password, fullname)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        const user = await authService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function logout(req, res){
    try {
        // console.log(req.session)
        req.session.destroy()
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}

module.exports = {
    login,
    signup,
    logout
}