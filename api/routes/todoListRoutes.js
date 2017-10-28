'use strict';
module.exports = function(app) {
  var Items = require('../controllers/todoListController');

  app.route('/items')
    .get(Items.list_all_items)
    .post(Items.create_a_item);


  app.route('/items/:itemId')
    .get(Items.read_a_item)
    .put(Items.update_a_item)
    .delete(Items.delete_a_item);
};
