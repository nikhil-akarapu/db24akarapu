var express = require('express');
const magpie_controlers= require('../controllers/magpie');
var router = express.Router();

/* GET detail magpie page */ 
router.get('/detail', magpie_controlers.magpie_view_one_Page);

module.exports = router;