var express = require('express');
const magpie_controlers= require('../controllers/magpie');
var router = express.Router();

router.get('/', magpie_controlers.magpie_view_all_Page );
module.exports = router;