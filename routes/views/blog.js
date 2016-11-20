var keystone = require('keystone');

exports = module.exports = function (req, res, next) {
	console.log('blog view middleware');

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'blog';
	locals.title = 'Welcome to the Blog';

	next();
};
