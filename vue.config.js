module.exports = {
  publicPath: '/',
  transpileDependencies: ['vuetify'],
  //config title when build this project
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Wth&Todo';
      return args;
    });
  },
};
