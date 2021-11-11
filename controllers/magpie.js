var magpie = require('../models/magpie'); 
 
// List of all magpies 
exports.magpie_list = async function(req, res) { 
    try{ 
        themagpie = await magpie.find(); 
        res.send(themagpie); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific magpie. 
exports.magpie_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: magpie detail: ' + req.params.id); 
}; 
 
// Handle magpie create on POST. 
exports.magpie_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: magpie create POST'); 
}; 
 
// Handle magpie delete form on DELETE. 
exports.magpie_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: magpie delete DELETE ' + req.params.id); 
}; 
 
// Handle magpie update form on PUT. 
exports.magpie_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: magpie update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.magpie_view_all_Page = async function(req, res) { 
    try{ 
        themagpie = await magpie.find(); 
        res.render('magpie', { title: 'magpie Search Results', results: themagpie }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 