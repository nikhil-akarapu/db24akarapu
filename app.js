var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const connectionString =  process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true}); 
//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


db.once("open", function(){ 
 console.log("Connection to DB succeeded")}); 


 var indexRouter = require('./routes/index');
 var usersRouter = require('./routes/users');
 var magpieRouter = require('./routes/magpie');
 var addmodsRouter = require('./routes/addmods');
 var selectorRouter = require('./routes/selector');
 var magpie = require("./models/magpie"); 
 var resourceRouter = require('./routes/resource');
 var detailRouter = require('./routes/detail');
 


// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await magpie.deleteMany(); 
 
  let instance1 = new magpie({name:"Nikhil",  color:"Green", weight:35}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 

 
 
  let instance2 = new magpie({name :"sai",  color:"black", weight:28}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("second object saved") 
  }); 
 
 
 
  let instance3 = new magpie({name:"prathik",  color:"white", weight:45}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("third object saved") 
  }); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 
 
var app = express();
 
 // view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'pug');
 
 app.use(logger('dev'));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'public')));
 
 app.use('/', indexRouter);
 app.use('/users', usersRouter);
 app.use('/magpie', magpieRouter);
 app.use('/addmods', addmodsRouter);
 app.use('/selector', selectorRouter);
 app.use('/resource', resourceRouter);
 app.use('/detail', detailRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
