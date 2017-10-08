module.exports = {
  entry: './tmp/tsv.js',
  output: {
    filename: './dist/text_marker_tsv.js',
    library: 'textMarkerTsv',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: __dirname,
  }
};
