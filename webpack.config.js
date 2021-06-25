const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.bundle.js",
  },

  devServer: {
    port: 4000,
    watchContentBase: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        //Javascript loading
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
        exclude: /node-modules/,
      },
      {
        //Typescript loading
        test: /\.(ts|tsx)$/,
        use: { loader: "ts-loader" },
        exclude: /node-modules/,
      },
      {
        //Global Sass loading
        test: /\.s(c|a)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.s(c|a)ss$/,
      },
      {
        //Sass module loading
        test: /\.s(c|a)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "sass-loader",
        ],
        include: /\.module\.s(c|a)ss$/,
      },
      {
        //Global CSS loading
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        //CSS module loading
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        //File loading
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
