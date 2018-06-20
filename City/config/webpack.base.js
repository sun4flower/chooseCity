const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const config = require("./config")
module.exports = {
    entry: config.base.entry,
    output: {
        path: config.base.outputPath,
        filename: "js/" + config.base.outputFilename
    },
    module: {
        rules: [{
            test: /\.js|.jsx$/,
            loader: "babel-loader",
            exclude: "/node_modules",
            options: config.babel
        }, {
            test: /\.css/,
            //loader: ["style-loader", "css-loader"]
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader?module"
            })
        }, {
            test: /\.(png|jpg|gif|jpeg)/,
            loader: "url-loader"
        }]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: config.base.templatePath,
            minify: config.base.htmlMinify

        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, "../src/static"),
            to: config.base.outputPath + "/static",
            ignore: [".*"]
        }]),
        new ExtractTextPlugin({
            filename: "css/[name]-[contenthash].css",
            allChunks: true
        }),
        // new OptimizeCssPlugin({
        //     assetNameRegExp: /\.optimize\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: { discardComments: { removeAll: true } },
        //     canPrint: true
        // })
    ]
}