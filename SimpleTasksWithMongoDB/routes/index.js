var mongojs = require('mongojs');
var db = mongojs.connect('mydb', ['tasks']);
/*
 * GET home page.
 */

exports.index = function(req, res){
  db.tasks.find({}, function(err, docs) {
  res.render('index', { title: 'Tasks', tasks: docs });
  });
};

exports.addtask = function(req, res){
  var taskname = req.body.taskname;
  console.log('Task Name to Add: ' + taskname);
  db.tasks.insert({name: taskname});
  res.redirect('/');
}