const hostService = require('./host.service.js')
const logger = require('../../services/logger.service')

module.exports = {
    getHost,
    getHosts,
    deleteHost,
    updateHost,
    addHost
}
async function getHost(req, res) {
    try {
        console.log('host in controller',req.params.id)
        const host = await hostService.getById(req.params.id)
        res.send(host)
    } catch (err) {
        logger.error('Failed to get host', err)
        res.status(500).send({ err: 'Failed to get host' })
    }
}

async function getHosts(req, res) {
    try {
        const filterBy = {
            txt: req.query?.txt || '',
        }
        const hosts = await hostService.query(filterBy)
        res.send(hosts)
    } catch (err) {
        logger.error('Failed to get hosts', err)
        res.status(500).send({ err: 'Failed to get hosts' })
    }
}

async function deleteHost(req, res) {
    try {
        await hostService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete host', err)
        res.status(500).send({ err: 'Failed to delete host' })
    }
}

async function updateHost(req, res) {
    try {
        const host = req.body
        const savedHost = await hostService.update(host)
        res.send(savedHost)
    } catch (err) {
        logger.error('Failed to update host', err)
        res.status(500).send({ err: 'Failed to update host' })
    }
}

async function addHost(req,res){
    try{
        const host =req.body
        console.log('host controller ', req.body)
        const addedHost= await hostService.add(host)
        res.json(addedHost)

    }catch(err){
        logger.error('Failed to add host', err)
        res.status(500).send({ err: 'Failed to add host' })
    }
}


