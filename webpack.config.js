// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    
    entry: path.resolve(__dirname, './src/index.js'),
    // 输出配置
    output: {
        path: path.resolve(__dirname, './css'),
        publicPath: 'css/',
        filename: 'webcom.js'
    },
    devtool: "source-map", 
    module: {
        loaders: [
            
            {
                test: /\.css$/,   
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.html$/, 
                loader: 'html-loader'   
            },
            { 
              test: /\.scss$/,
              loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
						title: 'webcom11',
            projectPath: 'static',
            filename: '../index.html',
            template: path.resolve(__dirname, 'src/index.ejs'),
            inject: false  //false 在生成的html中不插入打包后的js和css
        }),
        new ExtractTextPlugin("webcom.css")
    ]
}