const path = require('path');

module.exports = ({ mode }) => {
  const pathToIndexHtml = require.resolve('./src/index.html');
  const pathToIndexJs = require.resolve('./src/index.js');

  return {
    entry: [pathToIndexHtml, pathToIndexJs],
    output: {
      publicPath: 'http://cdn.example.com/[contenthash]/',
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: [
            'file-loader',
            'extract-loader',
            {
              loader: 'html-loader',
              options: {
                esModule: false,
                sources: {
                  list: [
                    { tag: 'link', attribute: 'href', type: 'src' },
                    { tag: 'img', attribute: 'src', type: 'src' },
                    {
                      tag: 'img',
                      attribute: 'data-src',
                      type: 'src',
                      filter: (tag, attribute, attributes, resourcePath) => {
                        return true;
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
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
