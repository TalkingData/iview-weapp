<p align="center">
    <a href="https://weapp.iviewui.com">
        <img width="200" src="https://file.iviewui.com/weapp-logo.svg">
    </a>
</p>

# iView Weapp

### 一套高质量的微信小程序 UI 组件库

## 文档
[https://weapp.iviewui.com](https://weapp.iviewui.com)

## 体验
使用微信扫一扫体验小程序组件示例

<img width="200" src="https://raw.githubusercontent.com/TalkingData/iview-weapp/master/assets/code.jpg">

## 快速上手
### 使用之前
在开始使用 iView Weapp 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

### 如何使用
到 [GitHub](https://github.com/TalkingData/iview-weapp) 下载 iView Weapp 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "i-button": "../../dist/button/index"
}
```
2. 在 wxml 中使用组件：
```html
<i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
```

### 预览所有组件
我们内置了所有组件的示例，您可以扫描右侧的小程序码体验，或按以下方式在微信开发者工具中查看：

```shell
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
```
然后，将 `examples` 目录在微信开发者工具中打开即可。
## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, iView