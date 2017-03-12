const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = 
[
    {
        entry: {
            style: './css/style.scss'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].css'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract(
                        {
                            fallback: 'style-loader', 
                            use: 'css-loader?-url&sourceMap!sass-loader'
                        }
                    )
                }
            ]
        },
        devtool: 'source-map',
        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    },
    {
        entry: {
            bundle: './src/app.js',
        },
        output: {
            path: path.resolve(__dirname, './dist/js/'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, '/node_modules'),
                    use: 'babel-loader',
                },
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, 'node_modules'),
                    use: 'eslint-loader'
                },
                
            ]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: './',
            port: 3000,
            inline: true,
        }
    },
]