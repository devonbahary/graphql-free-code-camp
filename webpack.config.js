const path = require('path');

module.exports = {
    entry: './client/src/App.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'client', 'public'),
        historyApiFallback: true,
        port: 8001,
        publicPath: '/dist/',
        proxy: {
            '/api': "http://localhost:8000",
        },
    },
};