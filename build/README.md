

> 项目组织与开发

## 项目目录

|-- assets // 项目静态资源
|-- build
|  |-- template // 快速创建目录模板
|  |-- util // 构建公共方法
|  |-- build-dev.js // 构建dev模式
|  |-- build-prod.js // 构建产出模式
|-- example // 示例目录
|-- src
|  |-- components 组件目录  
|  |-- index.js // 入口文件
|
|-- ...


## 组件开发说明

* 通过``npm run create xxx``命令创建组件目录，目录模板在build下面。xxx是要创建的组件名

* 组件目录中将vue文件与样式文件分离解偶，方便维护与拓展

* examples目录下是mpvue项目，新开发的组件在这里进行调试验证