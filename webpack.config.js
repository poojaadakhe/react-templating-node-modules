const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '/dist'),
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx']
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: 'artifi_[local]_[hash:base64:5]'
                            }
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.rollup.json'
                }
            }
        ]
    },

}