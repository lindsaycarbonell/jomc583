var db = require('../config/db');
var ObjectID = require('mongodb').ObjectID;


exports.homeList = function(req, res) {
  var collection = db.get().collection('posts');

  collection.find({}).toArray(function(err, results){
      // console.log("results: " + results.title);
      //console.log(results._id);
       res.render('home/list', {posts: results});
  });
};

exports.innerShow = function(req, res){
  var collection = db.get().collection('posts');
  var cursor = collection.find({"_id": ObjectID(req.params.id)});
  cursor.nextObject(function(err, item){
    console.log(err);
    console.log(item);
       res.render('inner/show', {posts: item});
  });

};

exports.remove = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.removeOne({
        _id : ObjectID(req.params.id)
    });

    return res.redirect('/');
};
