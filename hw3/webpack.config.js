const { resolve } = require('path')
const HtmlWeb = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: resolve(__dirname, 'src', 'js', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MinCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:  /\.(png|jpeg|jpg|gif|mp3|m4v|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            gifsicle: {
                                quality: 65
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWeb({
            template: resolve(__dirname, './src/index.html')
        }),
        new MinCssExtractPlugin({
            filename: '[name][contenthash].css'
        })
    ],
    devServer: {
        watchFiles: ['./*'],
        open: true,
        hot: true
    }
}