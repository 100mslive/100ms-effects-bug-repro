
module.exports = {
  transpileDependencies: [true],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `vendor.${packageName.replace("@", "")}`;
            },
            reuseExistingChunk: true,
          },
        },
      },
    }
  },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .tap((options) => {
  //       return {
  //         ...options,
  //         compilerOptions: {
  //           isCustomElement: (tag) => {
  //             console.log(tag, tag.startsWith("hms-"));
  //             return tag.startsWith("hms-");
  //           },
  //         },
  //       };
  //     });
  // },
};
