// eslint-disable-next-line no-undef
webpackConfig.module
  .rule('svg')
    .test(/\.(svg)(\?.*)?$/)
    .use('file-loader')
      .loader('file-loader')
      .options({
        // eslint-disable-next-line no-undef
        name: genAssetSubPath('img')
      })
      
// eslint-disable-next-line no-undef
webpackConfig.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          // eslint-disable-next-line no-undef
          .options(genUrlLoaderOptions('img'))
