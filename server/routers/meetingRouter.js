const Router = require('express')
const router = new Router()
const controller = require('../controllers/meetingController')

router.get('/:id', controller.getMeeting)
router.get('/', controller.getAll)

router.put('/:id', controller.updateMeeting)
router.delete('/:id', controller.deleteMeeting)

router.post('/add', controller.add)

module.exports = router;
