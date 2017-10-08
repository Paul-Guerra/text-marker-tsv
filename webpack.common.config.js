module.exports = {
  entry: './tmp/tsv.js',
  output: {
    library: 'textMarkerTsv',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: __dirname,
  }
};
