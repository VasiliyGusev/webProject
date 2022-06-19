const { resolve } = require('path')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    entry: './js/index.js',
    mode: 'development',
    output: {
        filename: "main.[contenthash].js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test:  /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test:  /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test:  /\.s[ac]ss$/i,
                use: [MinCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MinCssExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        watchFiles: ['./*'],
        open: true,
        hot: true
    }
}