const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename:'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: './dist',
    open: true, 
  },
  module: {
    rules: [
      {
       test: /\.(png|jpe?g|gif|svg)$/i,
       type: 'asset/resource',
       },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
    }),
  ],
};