const Router = require('express');
const router = new Router();
const controller = require('../controllers/objectController');

router.get('/object:id', controller.getObject);
router.get('/', controller.getAll);
router.put('/:id', controller.updateObject);
router.delete('/:id', controller.deleteObject);
router.post('/', controller.add);

module.exports = router;
