const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: [path.resolve(__dirname, './src/index.js'),
                path.resolve(__dirname, './src/styles/main.scss')],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ {
                    loader: 'file-loader',
                    options: { outputPath: 'src/styles/', name: 'style.min.css'}
                },
                    'sass-loader'
                ]
                //use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    }
}