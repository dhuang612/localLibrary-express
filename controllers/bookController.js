const Book = require('../models/book');
exports.index = function(req, res) {
  res.send('Not implemented: Site homepage');
};

//display all book
exports.book_list = function(req, res) {
  res.send('Not implemented: Book list');
};

//display detail page for one book
exports.book_detail = function(req, res) {
  res.send('Not implemented: book detail' + req.params.id);
};

//display book create form on GET
exports.book_create_get = function(req, res) {
  res.send('Not implemented: create GET');
};

//handle book create on post
exports.book_create_post = function(req, res) {
  res.send('Not implemented: create POST');
};

//display book delete form on GET
exports.book_delete_get = function(req, res) {
  res.send('Not implemented: delete GET');
};

//display book delete on POST
exports.book_delete_post = function(req, res) {
  res.send('Not implemented: delete post');
};

//display book update form on GET
exports.book_update_get = function(req, res) {
  res.send('Not implemented: update GET');
};

//handle book update on post
exports.book_update_post = function(req, res) {
  res.send('Not implemented: book update POST');
};
