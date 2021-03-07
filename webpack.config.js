const path = require('path');

module.exports = ({ mode }) => {
  const pathToIndexHtml = require.resolve('./src/index.html');
  const pathToIndexJs = require.resolve('./src/index.js');

  return {
    context: path.resolve(__dirname, 'src'),
    entry: [
      './index.html',
      // pathToIndexJs, // disbled temporarily
    ],
    output: {
      // assetModuleFilename: '[name][ext]',
      /**
       * @ref {@link https://webpack.js.org/loaders/html-loader/#cdn}
       */
      // publicPath: 'http://cdn.example.com/',
      publicPath: "" // override the auto prefix injected by webpack
    },
    module: {
      rules: [
        /**
         * HTML
         */
        {
          test: /\.html$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
        {
          test: /\.html$/i,
          use: [
            // 'file-loader', // disabled to prevent html from being mangled in dist
            'extract-loader',
            {
              loader: 'html-loader',
              options: {
                esModule: false,
                // sources: {
                //   list: [
                //     { tag: 'script', attribute: 'src', type: 'src' },
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
          test: /\.js$/i,
          loader: 'babel-loader',
        },
        {
          test: /\.js$/,
          type: 'asset/resource',
          generator: {
            filename: '[name].[contenthash][ext]',
          },
        },
        /**
         * Styles
         */
        {
          test: /\.css$/i,
          use: [
            'file-loader',
            'extract-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        /**
         * Assets
         */
        {
          test: /\.jpg$/,
          use: [
            'file-loader'
          ],
        },
        {
          test: /\.png$/,
          type: 'asset/inline',
        },
      ],
    },
  };
};
