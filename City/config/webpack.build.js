const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.js")
const config = require("./config")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

module.exports = merge(webpackBase, {
    devtool: config.build.devtool,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common.js",
            filename: "js/common.js"
        }),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                include: /\/src/,
                compress: {
                    warnings: false
                },
                sourceMap: config.build.sourceMap,
                parallel: true //使用多进程并行运行和文件缓存来提高构建速度
            }
        })
    ]
})