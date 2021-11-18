var express = require('express');
const magpie_controlers= require('../controllers/magpie');
var router = express.Router();

/* GET create update page */ 
router.get('/update', magpie_controlers.magpie_update_Page); 

module.exports = router;