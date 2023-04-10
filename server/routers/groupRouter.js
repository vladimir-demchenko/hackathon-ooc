const Router = require('express')
const router = new Router()
const controller = require('../controllers/groupController')

router.get('/:id', controller.getGroup)
router.get('/', controller.getAll)

router.put('/:id', controller.updateGroup)
router.delete('/:id', controller.deleteGroup)

router.post('/add', controller.add)

module.exports = router;
