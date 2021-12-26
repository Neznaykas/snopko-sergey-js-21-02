const router = require('express').Router();
const UserService = require('../services/users');

router.get('/list/:page/:limit', UserService.list);

module.exports = router;