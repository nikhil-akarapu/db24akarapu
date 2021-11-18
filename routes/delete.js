var express = require('express');
const magpie_controlers= require('../controllers/magpie');
var router = express.Router();

/* GET create costume page */ 
router.get('/delete', costume_controlers.costume_delete_Page)

module.exports = router;