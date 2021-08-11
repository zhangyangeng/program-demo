// 引入一个包
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        // 打包后文件的名字
        filename: "bundle.js",
        // 兼容IE11与10，即不使用const和箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    
    // 指定webpack打包时要用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 指定要使用的loader
                use: "ts-loader",
                // 指定要排除的文件
                exclude: /node_modules/
            },
            // 指定设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // postcss设置
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                    // 修复postcss报错
                                    require("autoprefixer")({
                                        browsers: "last 2 versions"
                                    })
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "这里可以自定义标题",
            template: "./src/index.html"
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"]
    }
}