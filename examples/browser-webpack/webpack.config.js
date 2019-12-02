module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 3 Chrome Versions',
                      'last 3 Firefox Versions',
                      'last 3 Safari Versions',
                      'last 3 Edge Versions',
                      'IE >= 11',
                    ],
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  entry: {
    all: './example-all.js',
    v1: './example-v1.js',
    v4: './example-v4.js',
  },
  output: {
    filename: '[name].js',
  },
  mode: 'production',
};
