
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ,favicon = require('static-favicon')
  ,bodyParser = require('body-parser')
  ,cookieParser = require('cookie-parser')
  ,expressSession = require('express-session')
  ,errorHandler = require('errorhandler')
  ;

var app = express();
var router = express.Router();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon());
//app.use(express.logger('dev'));
app.use(bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
router.use(function(req,res,next){
   console.log('%s %s %s', req.method, req.url, req.path);
});

app.get('/', routes.index);
app.get('/users', user.list);


app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
   app.use(errorHandler());
   app.locals.pretty = true;
   app.set('port', process.env.PORT || 3000);
}
else {
  app.set('port', 80);
}

app.listen(app.get('port'));
//http.createServer(app).listen(app.get('port'), function(){
  console.log('My Express server listening on port ' + app.get('port'));
//});