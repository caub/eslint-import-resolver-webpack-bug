const config = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: __dirname + '/../dist',
        filename: 'static/js/[name].js'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors',
        },
        runtimeChunk: true,
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        contentBase: ['dist', 'public'],
        port: 9000,
        clientLogLevel: 'none',
        quiet: true,
        watchOptions: {
            ignored: /node_modules/
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'src': __dirname + '/../src'
        }
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(bmp|gif|jpe?g|png)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                exclude: /src/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                exclude: /node_modules/,
                include: /src/,
                use: {
                    loader: 'svg-react-loader',
                    query: {
                        classIdPrefix: true
                    }
                },
            }
        ]
    },
    performance: {
        hints: false,
    },
}

module.exports = config;
