const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./frontend/main.js"
  },
  output: {
    path: path.join(__dirname, "/dist/frontend"),
    publicPath: "/public/",
    filename: "[name].js"
  },
  target: "web",
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // Insert javascript into html template provided, in this case is index.html
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader/url",
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css"
            }
          },
          // "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js"
              }
            }
          },
          "sass-loader"
        ]
        // the order should like this, or it will throw error on build
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|bmp|tga)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            }
            /* query: {
              name: "public/img/[name].[hash:8].[ext]" // for storybook
            } */
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "json-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      frontend: path.resolve(__dirname, "./frontend"),
      components: path.resolve(__dirname, "./frontend/views/components"),
      atoms: path.resolve(__dirname, "./frontend/views/components/atoms")
    },
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      filename: "../index.html",
      excludeChunks: ["server"]
    })
  ],
  optimization: {
    noEmitOnErrors: true
  }
};
