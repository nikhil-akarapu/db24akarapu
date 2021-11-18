var express = require('express');
const magpie_controlers= require('../controllers/magpie');
var router = express.Router();

/* GET create magpie page */ 
router.get('/create', magpie_controlers.magpie_create_Page); 

module.exports = router;