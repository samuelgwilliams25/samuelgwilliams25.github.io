const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const debug = process.env.NODE_ENV !== "production";

module.exports = withPlugins([withCSS,withImages],{
  exportPathMap: function(){
    return{
      "/": {page:"/"},
      //"/Projects": {page:"/Projects"},
      "/Resume": {page: "/Resume"}
    }
  },
  assetPrefix: !debug ? '' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);

    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
});

