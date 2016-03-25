var db = require('../config/db');
var ObjectID = require('mongodb').ObjectID;


exports.list = function(req, res) {
  // var inputDate = new Date(myDate.toISOString());
  // console.log("inputDate: " + inputDate);

  var collection = db.get().collection('posts');

  collection.find({}).toArray(function(err, results){
      // console.log("results: " + results.title);
      //console.log(results._id);
       res.render('home/list', {posts: results});
  });
};

exports.show = function(req, res){
  console.log("show: " + req.params.id);

  var collection = db.get().collection('posts');
  var cursor = collection.find({"_id": ObjectID(req.params.id)});

  cursor.nextObject(function(err, item){
    console.log("item: " + item);
     res.render('inner/show', {post: item});

  });

};

exports.showEdit = function(req, res){
  var collection = db.get().collection('posts');

  console.log(req.params.id);

  collection.find({"_id": ObjectID(req.params.id)}).toArray(function(err, results){
    res.render('inner/update', {post: results[0]});
  });

}


exports.update = function(req, res){
  // res.render('inner/update');

  var collection = db.get().collection('posts');
  var inputDate = new Date().toDateString().substring(4,15);

  console.log(req.params.id);

  collection.updateOne(
    {_id : ObjectID(req.params.id)},
    {
      $set: {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category,
        tags: req.body.tags,
        date: inputDate,
        thumbnail: req.body.thumbnail
      }
    }
  );

  res.redirect('/posts/' + req.params.id);

};

exports.createForm = function(req, res){

    res.render('inner/create');

}

exports.create = function(req, res) {
  var collection = db.get().collection('posts');
  var inputDate = new Date().toDateString().substring(4,15);


  collection.insert({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags,
    date: inputDate,
    thumbnail: req.body.thumbnail
  });

  res.redirect('/');

};

exports.remove = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.removeOne({
        _id : ObjectID(req.params.id)
    });

    return res.redirect('/');
};
