const path = require('path');

module.exports = {
    entry: "./src",

    output: {
        path: path.resolve(__dirname,"dist"),

        filename: "bundle.js",
        
        publicPath: "/",

        library: "Searchbar",

        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    stats: {
        colors: true
    },
    resolve: {
        modules: ['node_modules']
    },
    devServer: {
        disableHostCheck: true,
        progress: true,
        publicPath: "/",
    }
}