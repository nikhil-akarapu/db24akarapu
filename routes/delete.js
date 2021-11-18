var express = require('express');
const magpie_controlers= require('../controllers/magpie');
var router = express.Router();

/* GET create magpie page */ 
router.get('/delete', magpie_controlers.magpie_delete_Page)

module.exports = router;