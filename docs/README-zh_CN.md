# Panda Design

[![version](https://img.shields.io/npm/v/@panda-design/components.svg?style=flat-square)](http://npm.im/@panda-design/components)
[![npm downloads](https://img.shields.io/npm/dm/@panda-design/components.svg?style=flat-square)](https://www.npmjs.com/package/@panda-design/components)
[![MIT License](https://img.shields.io/npm/l/@panda-design/components.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Panda Design: 基于 [Ant Design](https://ant.design/index-cn) 的可插拔设计系统。

[English](https://github.com/panda-design-team/components/blob/main/README.md) | 中文

## Get Started

- 安装

```bash
yarn add @panda-design/components
```

- 注入样式

```typescript jsx
import {appendStyle} from '@panda-design/components';

appendStyle();
// 如果你不需要某些样式
appendStyle({injectAll: false, inject: {Button: true}});
```

- 使用 `Antd` 和 `Panda Design` 构建你的应用

```typescript jsx
import {Button} from 'antd'; // with style injected

const App = () => {
    return <Button type="primary">OK</Button>;
};
```

- 享受 `Panda Design` 带来的语法糖

```typescript jsx
import {Button} from '@panda-design/components';

const App = () => {
    return <Button type="primary" disabled disabledReason="Primission Denied">OK</Button>;
};
```

## 文档

[查看由此组件库构建的 Panda Design 设计规范](https://panda-design-team.github.io/)

你也可以下载到本地

```bash
git clone git@github.com:panda-design-team/panda-design-team.github.io.git
cd panda-design-team.github.io
yarn
yarn start
```
