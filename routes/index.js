
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Jarrad's Face Finder' });
};