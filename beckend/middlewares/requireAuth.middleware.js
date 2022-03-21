const logger = require('../services/logger.service')

async function requireAuth(req, res, next) {
  const user = req.session
  
  // console.log('eq.session',req.session)
  // console.log('eq.session.user',req.session.user)
  if (!req.session || !req.session.user) {
    res.status(401).end('Unauthorized!')
    return
  }
  // console.log('user auth',user)
  next()
}

async function requireAdmin(req, res, next) {
  const user = req.session.user
  // console.log(user)
  if (!user.isAdmin) {
    logger.warn(user.fullname + ' Attempt to perform admin action')
    res.status(403).end('Unauthorized Enough..')
    return
  }
  next()
}


// module.exports = requireAuth

module.exports = {
  requireAuth,
  requireAdmin
}
