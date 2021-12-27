const router = require('express').Router();
const PostService = require('../services/posts');

router.get('/:page/:limit', PostService.list);

module.exports = router;
