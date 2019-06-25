const Author = require('../models/author');

//display list of all authors
exports.author_list = function(req, res) {
  res.send('NOT Implemented: Author list');
};

//display detail page for one author functions we are creating.
exports.author_detail = function(req, res) {
  res.send('Not implemented: Author detail' + req.param.id);
};

//create new author
exports.author_create_get = function(req, res) {
  res.send('Not implemented: create Author get');
};

//handle author create on post
exports.author_create_post = function(req, res) {
  res.send('Not implemeneted Author create post');
};

//display Author delete form on Get
exports.author_delete_get = function(req, res) {
  res.send('Not implemeneted Author delete get');
};

//handle author delete on post
exports.author_delete_post = function(req, res) {
  res.send('Not implemeneted Author delete post');
};

//display author update form on get
exports.author_update_get = function(req, res) {
  res.send('Not implemeneted Author update get');
};

//handle Author update on post
exports.author_update_post = function(req, res) {
  res.send('Not implemeneted Author update post');
};
