const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/debug/main.tsx",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/debug/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    host: "localhost",
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
