# 使用 `ft-design`

:tada: 本节将介绍如何在项目中使用 Ft Design。

## 环境支持

::: tip 当前封装所使用的库版本

- element-plus 版本为： `2.2.+`
- vue 版本为： `3.2.+`
  :::

## 安装

### 1. 使用包管理器

```shell
# NPM
npm install ft-design

# Yarn
yarn install ft-design

# pnpm
pnpm install ft-design
```

## 快速开始

### 1. 完整引入

`ft-design` 将会在 Vue 应用中进行**全局组件注册**。

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import FtDesign from "ft-design";
// 引入样式及主题(包含 Element 样式)
import "ft-design/theme-chalk/src/index.scss";
const app = createApp(App);
app.use(router).mount("#app");
app.use(FtDesign);
```

### 2. 按需引入

需要在使用组件的地方手动对 `Ft Design 组件` 进行导入。

<!-- main.ts -->

```ts
// 引入样式及主题(包含 Element 样式)
import "ft-design/theme-chalk/src/index.scss";
```

```html
<!-- App.vue -->
<template>
  <FtButton> test </FtButton>
</template>

<script setup>
  import { FtButton } from "ft-design";
</script>
```

## 注意事项

::: danger 关于原生库
组件库打包时会对第三方包如 `element-plus` 、`vue` 进行 `externals` 处理，所以务必保证使用组件的项目中导入必须要的第三方库。
:::
