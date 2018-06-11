# tua-mp-example-iview-weapp
基于 [tua-mp-example-webpack-vue](https://github.com/tuateam/tua-mp/tree/master/examples/webpack-vue) 和 `iview-weapp` 结合的例子。

![webpack version](https://img.shields.io/badge/webpack-%5E4.8.1-green.svg)
![vue-loader version](https://img.shields.io/badge/vue--loader-%5E15.0.12-green.svg)

在这个例子中我们添加了 `vue-loader`，让我们能够使用文件扩展名为 `.vue` 的 `single-file components`(单文件组件) 。

[单文件组件就是将模板（template）、脚本（script）、样式（style）写在一个文件中。](https://cn.vuejs.org/v2/guide/single-file-components.html)

在这个例子中的单文件组件和一般 web 端的单文件组件有所不同：

1.页面的模板我们使用的是 `<template lang="wxml">...</template>`

2.添加了一个 `<config>` 的自定义块，用于填写**页面**的配置（即原来的 `.json`）

3.由于 webpack 或其他地方需要读取 `app.json` 中的某些字段，所以在不编写 loader 的情况下只好维持原状，不将其放到 `app.vue` 中的 `<config>` 中。

> [什么是自定义块？](https://vue-loader.vuejs.org/zh/guide/custom-blocks.html)

<image src="https://github.com/tuateam/tua-mp/raw/master/doc/imgs/logs.vue.png" width="400" alt="logs.vue" />

## 如何使用
* 开发时运行 `npm start`，`webpack` 就会开启监听
* 发布时运行 `npm run build`，`webpack` 会先删除 `dist/` 然后将源码压缩生成到其中

此外还配置了 `babel` 和 `eslint`，使用时可以根据喜好自行更改配置。

## 文件结构
### `src/` 源码
* app/: 应用入口
* assets/: 资源文件，比如图片
* **iview/: iview-weapp 生成的组件**
* comps/: 组件
* pages/: 页面
* scripts: 公用代码
* scripts/const: 常量（已配置别名 @const）
* scripts/utils: 辅助函数（已配置别名 @utils）
* styles/: 公用样式
* templates/: 模板

### `dist/` 打包后代码
* chunks/: 公共依赖
    * runtime: [是 webapck 在运行时连接各个模块的代码](https://doc.webpack-china.org/concepts/manifest/#runtime)
    * vendors: 是提取的 `node_modules` 下的依赖
    * scripts: 是提取的 `src/scripts/` 下的依赖
