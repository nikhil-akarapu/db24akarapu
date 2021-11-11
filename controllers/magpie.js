var magpie = require('../models/magpie'); 
 
// List of all magpie
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
exports.magpie_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new magpie(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"magpie_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.color = req.body.color; 
    document.weight = req.body.weight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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