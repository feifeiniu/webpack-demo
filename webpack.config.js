const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.conflig.base.js')

module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],


            },
        ],
    },
};

