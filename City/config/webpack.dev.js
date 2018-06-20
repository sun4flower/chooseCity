const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const config = require("./config")
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.js")
module.exports = merge(webpackBase, {
    devServer: {
        host: config.dev.host,
        contentBase: config.dev.outputPath,
        port: config.dev.port,
        open: config.dev.browerOpen,
        proxy: config.dev.proxy,
        before: config.dev.before
    },
    devtool: config.dev.devtool,
    plugins: []
})