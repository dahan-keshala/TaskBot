const express = require('express');

const router = express.Router();

const { initRoute, _404 } = require('./init');

const init = initRoute('TaskBot is working properly');

router.route('/').get(init);

router.use(_404);

module.exports = router;