var keystone = require('keystone');

exports = module.exports = function (req, res, next) {
	console.log('index view middleware');

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.title = 'Welcome to the Homepage';

	next();
};
