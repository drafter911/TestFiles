//var webpack = require("webpack");
var entry = './src/js/main.js',
    output = {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    };

module.exports = {
    debug : true,
    entry: entry,
    output: output,
    //externals: {
    //    "jquery": "jQuery"
    //},
    resolve: {
        modulesDirectories: ['./src/js', './node_modules']
    },
    module : {
        loaders : [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.html$/, loader: 'html?config=otherHtmlLoaderConfig' }
            //{
            //    test: /jquery\.js$/,
            //    loader: 'expose?jQuery'
            //},
            //{
            //    test: /jquery\.js$/,
            //    loader: 'expose?$'
            //},
            //{
            //    test:   /jquery\..*\.js/,
            //    loader: "imports?$=jquery,jQuery=jquery,this=>window"
            //}
        ]
    }
};