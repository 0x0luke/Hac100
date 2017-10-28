'use strict';


var mongoose = require('mongoose'),
Items = mongoose.model('Items');

exports.list_all_items = function(req, res) {
  Items.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};




exports.create_a_item = function(req, res) {
  var new_item = new Items(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.read_a_item = function(req, res) {
  Items.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.update_a_item = function(req, res) {
  Items.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.delete_a_item = function(req, res) {


  Items.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};