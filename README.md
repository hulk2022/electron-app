# electron-cli 基于Electron28+Vite5.x+Vue3+TypeScript搭建项目脚手架

[官网](https://cn.electron-vite.org/)

### Node版本

20.16.0

### 快速开始

```sh
# clone the project
git clone http://172.30.64.82/zhuyuanchao/electron-cli.git or git@172.30.64.82:zhuyuanchao/electron-cli.git

# enter the project directory
cd electron-cli

# install dependency
nvm use 20.16.0
npm install

# develop
npm run dev
```

### 启动

```
npm run electron:serve:dev  开发
npm run electron:serve:test  测试
npm run electron:serve:staging  准上
npm run electron:serve:prod  生产
```

### 构建

```bash
# 通过 cross-env NODE_ENV=production，确保构建打包NODE_ENV一定是production
npm run electron:build:dev 开发
npm run electron:build:test 测试
npm run electron:build:staging 准上
npm run electron:build:prod 生产
```

### 开发须知

```
1. 以下包为demo代码使用，可按需删除。@electron/remote；electron-settings;electron-shortcut-normalizer;glob;highlight.js
```

### 技术栈

| 技术         | 描述                      | 学习地址                                                            |
| ------------ | ------------------------- | ------------------------------------------------------------------- |
| electron     | 写前端的方式开发桌面端    | [官网](https://www.electronjs.org/zh/docs/latest/api/app)           |
| vite         | 新一代前端构建工具        | [官网](https://cn.vitejs.dev/guide/)                                |
| vue3         | 渐进式前端框架            | [官网](https://cn.vuejs.org/guide/components/props.html)            |
| typescript   | js 的超集，更好的代码提示 | [菜鸟教程](https://www.runoob.com/typescript/ts-object.html)        |
| element-plus | 前端 ui 框架              | [文档地址](https://element-plus.gitee.io/zh-CN/component/icon.html) |
| axios        | 请求发送                  | [官网](https://axios-http.com/zh/docs/intro)                        |
| pinia        | 全局状态管理              | [官网](https://pinia.web3doc.top/introduction.html)                 |

### 工程目录核心结构

```diff
+ ├─┬ demos           Electron API示例
+ ├─┬ src
+ │ ├─┬ main
+ │ │ └── index.ts    Electron主进程入口
+ │ ├─┬ preload
+ │ │ └── index.ts    预加载ts脚本
  ├─└─┬ renderer
  │   └── src
  ├────────└── api         请求API
  ├────────├── assets      静态资源
  ├────────├── components  vue公共组件
  ├────────├── directives  全局指令
  ├────────├── demos       示例代码目录
  ├────────├── hooks       组合式函数封装
  ├────────├── interface   类型定义
  ├────────├── layout      布局组件
  ├────────├── locales     多语言
  ├────────├── mixin       混入
  ├────────├── store       全局状态管理
  ├────────├── utils       工具函数
  ├───┬────└── views       视图
  │   └── index.html
  │
  ├── package.json
  └── electron.vite.config
```

### 必装插件

- eslint 语法检测
- prettier 代码格式化
-

### 本地调试

> `Ctrl+Shift+i`打开控制台
> `Ctrl+R`刷新
