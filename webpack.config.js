const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js',
  },

  devServer: {
    port: 4000,
    watchContentBase: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        //Javascript loading
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node-modules/,
      },
      {
        //Typescript loading
        test: /\.(ts|tsx)$/,
        use: { loader: 'ts-loader' },
        exclude: /node-modules/,
      },
      {
        //Global Sass loading
        test: /\.(s?c|a)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /\.module\.s(c|a)ss$/,
      },
      {
        //Sass module loading
        test: /\.(s?c|a)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.s(c|a)ss$/,
      },
      {
        //File loading
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
