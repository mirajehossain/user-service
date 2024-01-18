const { Router } = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.post('/api/v1.0.0/users', userController.createUser);

router.get('/api/v1.0.0/users', userController.getUsers);

router.patch('/api/v1.0.0/users/:userId', userController.updateUser);

router.delete('/api/v1.0.0/users/:userId', userController.deleteUser);


module.exports = router;