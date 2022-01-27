# 概述
UNIAPP是一个非常好的开发框架，被选为我们（[星汇盛世](https://www.xhcms.com)）微信小程序项目的核心开发框架，承载着大型项目支持。

在使用过程我会针对UNIAPP提交一些PR，在这些PR被吸纳和发布之前，我会把一些PR针对最新UNIAPP发布版本做成patch发布，供需要使用的同学分享。

当前提供四个patch，分别是：
- [增强Tree shaking优化](https://github.com/dcloudio/uni-app/pull/2949)
> patches/@dcloudio+vue-cli-plugin-uni+2.0.0-32920210927002.patch

- [支持微信小程序分包异步化(仅限组件)](https://github.com/dcloudio/uni-app/issues/2934)
> patches/@dcloudio+uni-cli-shared+2.0.0-32920210927002.patch
> patches/@dcloudio+webpack-uni-mp-loader+2.0.0-32920210927002.patch

- [增强externalClasses继承](https://github.com/dcloudio/uni-app/issues/2934)
> patches/@dcloudio+uni-mp-weixin+2.0.0-32920210927002.patch

- 解决@dcloudio/types定义的小问题
> patches/@dcloudio+types+2.5.12.patch

# PATCH支持包
- @dcloudio/vue-cli-plugin-uni: 2.0.0-32920210927002
- @dcloudio/uni-cli-shared: 2.0.0-32920210927002
- @dcloudio/webpack-uni-mp-loader: 2.0.0-32920210927002
- @dcloudio/uni-mp-weixin: 2.0.0-32920210927002
- @dcloudio/types: 2.5.12

>package.json

```json
{
  "dependencies": {
    "@dcloudio/uni-mp-weixin": "2.0.0-32920210927002"
  },
  "devDependencies": {
    "@dcloudio/types": "2.5.12",
    "@dcloudio/uni-cli-shared": "2.0.0-32920210927002",
    "@dcloudio/vue-cli-plugin-uni": "2.0.0-32920210927002",
    "@dcloudio/webpack-uni-mp-loader": "2.0.0-32920210927002"
  }
}
```

# 使用方法
1. 对项目添加patch-package依赖
 > npm install --save-dev patch-package

或者
 > yarn add -D patch-package postinstall-postinstall

2. 拷贝script脚本和patches到项目根目录
 - `./script`
 - `./patches`

3. 配置postinstall自动执行patch
> package.json

```json
{
  "scripts": {
    "postinstall": "node ./script/local-run.js patch-package"
  }
}
```

4. 上述配置完毕后，可以主动执行一次patch
> npm run postinstall

或者
> yarn postinstall

# 关于打开Tree shaking优化
> 可以参考本项目配置，本项目已经开启了Tree shaking

关于webpack的Tree Shaking，可参考[Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

项目开启Tree Shaking方法：
1. 禁止babel编译成commonjs模式，保持ESM方式
> babel.config.js

```js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        modules: false,
        // ...
      }
    ]
  ]
  // ...
}
```
只需要把`modules`配置改为`false`

2. 开启webpack配置
> vue.config.js

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin(),
      ],
    },
  }
}
```

- 设置`optimization.usedExports`为`true`
- 添加`terser-webpack-plugin`

3. 如果当前项目JS模块支持Tree Shaking的话，配置package.json开启

# 测试项目
分包优化：
https://github.com/huadong/weapp-subpackages-optimization


# 其它
我们提供了一个IOX UI的UI组件库，欢迎提交PR：http://iox-ui.xinghui.club/

>IOX UI参考Vant（轻量、可靠的移动端 Vue 组件库）的设计和实现，在微信小程序组件库版本vant-weapp基础上实现的uniapp版本。
>
>针对uniapp的一些特性进行了修改和调整，同时增加一些新的组件，对一些组件功能也有所增强。
>
>当前参考的vant-weapp版本为：1.5.0。


