const express = require('express');
const router = express.Router();
const Hello = require('../Controllers/hello.js');

router.get('/hello', Hello.test);

module.exports = router;