var path = require("path")
var api = require("../mock/index")
module.exports = {
    base: {
        entry: path.join(__dirname, "../src/main.js"),
        outputFilename: "[id]-[name]-[hash].js",
        outputPath: path.join(__dirname, "../dist"),
        templatePath: "./src/index.html",
        htmlMinify: {
            removeComments: true, //去除注释
            collapseWhitespace: true, //去除空格
            removeAttributeQuotes: true, //移除属性的引号
            removeEmptyAttributes: true, //去除空属性
        }
    },
    // cssHandle:{

    // },
    dev: {

        host: "localhost",
        port: 8080,
        browerOpen: true,
        proxy: {
            "/apis": {
                target: "http://localhost:3000",
                // pathRewrite: ["^/apis", "/api"],
                secure: false
            }
        },
        hot: true,
        // 设置页面引入
        inline: true,
        before: api,
        devtool: "cheap-module-eval-source-map"

    },
    build: {
        sourceMap: false,
        devtool: false
    },
    babel: {
        presets: [
            ["env", { modules: false }], "stage-0", "react"
        ],
        plugins: [
            ["transform-runtime",
                {
                    "helpers": false,
                    "polyfill": false,
                    "regenerator": true,
                    "moduleName": "babel-runtime"
                }
            ],
            "syntax-dynamic-import", "transform-object-rest-spread", "transform-react-jsx"
        ]
    }
}