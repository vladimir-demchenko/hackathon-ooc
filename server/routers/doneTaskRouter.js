const Router = require('express')
const router = new Router()
const controller = require('../controllers/doneTaskController')

router.get('/:id', controller.getTask)
router.get('/', controller.getAll)

router.put('/:id', controller.updateDoneTask)
router.delete('/:id', controller.deleteTask)

router.post('/add', controller.add)

module.exports = router
