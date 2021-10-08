const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".svg", ".png", ".jpg", ".jpeg"]
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
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
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
