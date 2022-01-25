const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getHosts, getHost, deleteHost, updateHost , addHost } = require('./host.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/',  getHosts)
router.get('/:id', getHost)
router.put('/:id', updateHost)
router.post('/', addHost)

// router.put('/:id',  requireAuth, updateUser)
router.delete('/:id',  deleteHost)
// router.delete('/:id', requireAuth, requireAdmin, deleteUser)

module.exports = router