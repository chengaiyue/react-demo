let glob = require('glob');
let path = require('path');
let webpack = require('webpack');

let htmlPlugin = require('html-webpack-plugin'); // html模板
let ExtractTextPlugin = require("extract-text-webpack-plugin"); // css文件提取
let uglify = require('uglifyjs-webpack-plugin'); // 压缩js 开发环境不压缩 用于生产环境
//html-withimg-loader  处理html中img标签的图片插件
// let PurifyCssPlugin = require('purifycss-webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const minimize = process.env.REACT_WEBPACK_ENV === 'dist';

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    devtool: 'eval-source-map', // 生成map文件 利于调试
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        host: 'localhost',
        port: 8888,
        compress: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    plugins: [
        new htmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            hash: true
        }),
        new ExtractTextPlugin({
            filename: 'style/[name].css',
            disable: false,
            allChunks: true
        }),
        new uglify(),
        // 剔除不使用的css  会导致有用的css也被剔除
        // new PurifyCssPlugin({
        //     paths: glob.sync(path.join(__dirname, 'src/*.html'))
        // }),
        new webpack.BannerPlugin('zcc'),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            names: ['common', 'vendor']
        }),
        new CopyWebpackPlugin([

        ], {
            ignore: [
                '*.less',
                '*.scss'
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                }],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: 'image/[name].[hash:8].[ext]'
                    }
                }]
            },

            //css加载
            {
                test: /\.css$/,
                //通过 webpack-replace 替换文本内容，将 font 字体改为本地加载，参数可以使用 JSON.stringify 处理
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: minimize
                        }
                    }]
                })
            },
            //sass 加载，先通过 sass-loader 转化为 css，然后跟普通的 css 加载一样
            {
                test: /\.(sass|scss)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: minimize
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                minimize: minimize,
                                outputStyle: 'expanded'
                            }
                        }
                    ]
                })
            },
            //less 加载，先通过 less-loader 转化为 css，然后跟普通的 css 加载一样
            {
                test: /.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: minimize
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                minimize: minimize
                            }
                        }
                    ]
                })
            }
        ]
    }
    // watchOptions:{
    //     //检测修改的时间，以毫秒为单位
    //     poll: 1000,
    //     //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
    //     aggregateTimeout: 500,
    //     //不监听的目录
    //     ignored: /node_modules/
    // }
};
