module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 80,
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './'
}
