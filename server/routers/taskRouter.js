const Router = require('express')
const router = new Router()
const controller = require('../controllers/taskController')

router.get('/task', controller.getTask)
router.get('/tasks', controller.getAll)

router.patch('/:id', controller.updateTask)
router.delete('/delete:id', controller.deleteTask)

router.post('/add', controller.add)

module.exports = router
