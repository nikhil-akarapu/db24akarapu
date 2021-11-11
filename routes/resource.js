var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var magpie_controller = require('../controllers/magpie'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/magpie', magpie_controller.magpie_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/magpie/:id', magpie_controller.magpie_delete); 
 
// PUT request to update Costume. 
router.put('/magpie/:id', 
magpie_controller.magpie_update_put); 
 
// GET request for one Costume. 
router.get('/magpie/:id', magpie_controller.magpie_detail); 
 
// GET request for list of all Costume items. 
router.get('/magpie', magpie_controller.magpie_list); 
 
module.exports = router; 
 