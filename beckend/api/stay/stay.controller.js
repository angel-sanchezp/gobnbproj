const stayService = require('./stay.service.js');
const logger = require('../../services/logger.service')


module.exports = {
    getStays,
    getStayById,
    addStay,
    updateStay,
    removeStay
}

/* 
{$not: {
    $elemMatch: {
        dateIn:  {$or: [{$ltr: filterBy.dateOut}, {$}]},
        dateOut: {$or: [{},{}]}
    }
}}
*/
//get stays
async function getStays(req, res) {
    try {
        let  filterBy  = req.query;
        console.log(' filter from server', req.query)
            // filterBy = JSON.parse(location);
        //   console.log('filter by after jason in controller',filterBy)
        const stays = await stayService.query(filterBy)
        res.json(stays)

    } catch (err) {
        logger.error('Failed to get stays', err)
        res.status(500).send({ err: 'Failed to get stays' })
    }
}

//get stays by id
async function getStayById(req, res) {
    try {
        const stayId = req.params.id
        const toy = await stayService.getById(stayId)
        res.json(stay)
    } catch (err) {
        logger.error('Failed to get stay', err)
        res.status(500).send({ err: 'Failed to get stays' })
    }
}

//save stay
async function addStay(req, res) {
    // console.log('addtoy', req.session)
    try {
        const stay = req.body
        // console.log('stay from postamn',stay)
        console.log('stay in stoy controller js ', req.body)
        const addedStay = await stayService.add(stay)
        console.log('added',addedStay)
        res.json(addedStay)

    } catch (err) {
        logger.error('Failed to add stay', err)
        res.status(500).send({ err: 'Failed to add stay' })
    }
}


//put update
async function updateStay(req, res) {
    try {
        const stay = req.body;
        console.log('update stay ', stay)
        console.log(stay)
        const updadatedStay = await stayService.update(stay)
        res.json(updadatedStay)
    } catch (err) {
        logger.error('Failed to update stay', err)
        res.status(500).send({ err: 'Failed to update stay' })
    }

}

//remove stay
async function removeStay(req, res) {
    try {
        const toyId = req.params.id
        // console.log(toyId)
        const removedStay = await stayService.removeToy(stayId)
        res.send(removedStay)
    } catch (err) {
        logger.error('Failed to remove stay', err)
        res.status(500).send({ err: 'Failed to remove stay' })
    }
}