const router = require('express').Router();
const userRouter = require('./users');
const postRouter = require('./posts');

router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;
