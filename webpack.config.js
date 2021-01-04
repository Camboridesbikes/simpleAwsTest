const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    /amplify/,
                    /.vscode/
                ],
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify")
        }
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    }
};