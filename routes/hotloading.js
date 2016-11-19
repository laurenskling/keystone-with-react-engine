// start client webpack
 const config = require('../webpack.config');
 const webpack = require('webpack');
 const compiler = webpack(config);

module.exports = (app) => {
    // setup the dev environment
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: false,
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        stats: {
            colors: true,
        },
    }));

    // because hotloading is cool
    app.use(require('webpack-hot-middleware')(compiler));
};
