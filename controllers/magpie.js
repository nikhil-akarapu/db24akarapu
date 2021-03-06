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
// for a specific magpie. 
exports.magpie_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await magpie.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
// Handle magpie delete on DELETE. 
exports.magpie_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await magpie.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle building the view for updating a magpie. 
// query provides the id 
exports.magpie_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await magpie.findById(req.query.id) 
        res.render('magpieupdate', { title: 'magpie Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a magpie. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.magpie_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('magpiecreate', { title: 'magpie Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.magpie_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await magpie.findById(req.query.id) 
        res.render('magpiedelete', { title: 'magpie Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle a show one view with id specified by query 
exports.magpie_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await magpie.findById( req.query.id) 
        res.render('magpiedetail',  
{ title: 'magpie Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
// Handle magpie update form on PUT. 
exports.magpie_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try { 
        let toUpdate = await magpie.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.color){
            toUpdate.color = req.body.color; 
        } 
        if(req.body.weight){
            toUpdate.weight = req.body.weight; 
        } 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.magpie_view_all_Page = async function(req, res) { 
    try{ 
        themagpie = await magpie.find(); 
        res.render('magpie', { title: 'magpie Search Results', results: themagpie}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 