'use strict';

const ReactEngine = require('react-engine');

module.exports = (app) => {
    app.get('*', function(req, res) {
        console.log(req.url);
        const props = {
            title: 'test from props',
        };
        res.render(req.url, props);
    });

    // add the error handler middleware
    app.use(function(err, req, res, next) {
        console.error(err);

        // http://expressjs.com/en/guide/error-handling.html
        if (res.headersSent) {
            return next(err);
        }

        if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
            return res.redirect(302, err.redirectLocation);
        }
        else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
            return res.status(404).send('Route Not Found!');
        }
        else {
            // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
            // any other error we just send the error message back
            return res.status(500).send(err.message);
        }
    });
};
