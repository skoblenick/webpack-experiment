const path = require("path");
const webpack = require("webpack");

module.exports = ({ mode }) => {
  const pathToIndexHtml = require.resolve("./src/index.html");
  const pathToIndexJs = require.resolve("./src/index.js");

  return {
    context: path.resolve(__dirname, "src"),
    entry: ["./index.html"],
    output: {
      assetModuleFilename: "[name][ext]",
      /**
       * @ref {@link https://webpack.js.org/loaders/html-loader/#cdn}
       */
      // publicPath: 'http://cdn.example.com/',
      publicPath: "", // override the auto prefix injected by webpack
      clean: true,
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      compress: true,
      hot: true,
      open: true,
      port: 5000,
    },
    module: {
      rules: [
        /**
         * HTML
         */
        {
          test: /\.html$/,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]",
          },
        },
        {
          test: /\.html$/i,
          use: [
            // 'file-loader', // disabled to prevent html from being mangled in dist
            "extract-loader",
            {
              loader: "html-loader",
              options: {
                esModule: false,
                        // sources: {
                        //   list: [
                        //     {
                        //       tag: "script",
                        //       attribute: "src",
                        //       type: "src",
                        //       filter: (tag, attribute, attributes, resourcePath) => {
                        //         console.log(tag, attribute, attributes, resourcePath)
                        //         return true;
                        //       },
                        //     },
                        //     { tag: 'link', attribute: 'href', type: 'src' },
                        //     { tag: 'img', attribute: 'src', type: 'src' },
                        //     {
                        //       tag: 'img',
                        //       attribute: 'data-src',
                        //       type: 'src',
                        //       filter: (tag, attribute, attributes, resourcePath) => {
                        //         return true;
                        //       },
                        //     },
                        //   ],
                        // },
              },
            },
          ],
        },
        /**
         * JavaScript
         */
        {
          test: /\.js$/,
          type: 'asset/resource',
          // generator: {
          //   filename: '[name].[contenthash][ext]',
          // },
        },
        {
          test: /\.js$/i,
          exclude: /\.js$/i,
          use: [
            "extract-loader",
            // {
            //   loader: "babel-loader",
            //   options: {
            //     presets: ["@babel/preset-env"],
            //   },
            // },
          ],
        },

        /**
         * Styles
         */
        {
          test: /\.css$/i,
          use: [
            "file-loader",
            "extract-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        // {
        //   test: /\.(scss|css)$/,
        //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        // },
        /**
         * Assets
         */
        {
          test: /\.jpg$/,
          use: ["file-loader"],
        },
        {
          test: /\.png$/,
          type: "asset/inline",
        },
        // Fonts and SVGs
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};
