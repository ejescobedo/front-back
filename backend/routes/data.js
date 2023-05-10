const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Data = require('../models/data');

const dataController = require('../controllers/data');

router.post('/table', dataController.findData);


module.exports = router;
