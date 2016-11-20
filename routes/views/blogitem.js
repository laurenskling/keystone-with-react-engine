var keystone = require('keystone');

exports = module.exports = function (req, res, next) {
	console.log('blog item view middleware');

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.filters = {
		id: req.params.id,
	};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'blog';
	locals.title = 'Welcome to the blog post ' + locals.filters.id;

	next();
};
