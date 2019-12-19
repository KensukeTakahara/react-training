module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./bundle.js",
    path: `${__dirname}/dist`
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      }
    ]
  }
};
