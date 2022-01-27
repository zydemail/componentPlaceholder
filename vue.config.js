/*
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-11 16:11:36
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-12 17:01:16
 */
var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@/': path.join(__dirname, 'src'),
        'commonPackage':path.join(__dirname, 'commonPackage')
      }
    },
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
            compress: {
              pure_funcs: ["console.log"]
            }
          },
          extractComments: false,
        }),
      ],
    },
  }
}