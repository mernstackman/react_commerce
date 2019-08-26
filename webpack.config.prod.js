const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const unglifyJsPlugin = require("uglifyjs-webpack-plugin");
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ImageCompression = require("imagemin-webpack-plugin").default;

module.exports = {
  mode: "production",
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
  optimization: {
    minimizer: [
      new unglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // generate JS source map
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new optimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // Insert javascript into html template provided, in this case is index.html
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
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
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ] // the order should like this, or it will throw error on build
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|bmp|tga)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            }
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
    extensions: [".scss", ".js", ".jsx"]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      filename: "../index.html"
    }),
    // https://www.npmjs.com/package/imagemin-webpack-plugin
    new ImageCompression({
      test: /\.(png|jpg|jpeg|gif|svg|bmp|tga)$/
    })
  ]
};
