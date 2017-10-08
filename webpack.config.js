const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const dev = {
  devtool: 'source-map',
  output: {
    filename: './tmp/text_marker_tsv.js',
    auxiliaryComment: { root: 'Text Marker TSV middleware DEVELOPMENT version' },
  }
};

module.exports = merge(common, dev);
