# Panda Design

[![version](https://img.shields.io/npm/v/@panda-design/components.svg?style=flat-square)](http://npm.im/@panda-design/components)
[![npm downloads](https://img.shields.io/npm/dm/@panda-design/components.svg?style=flat-square)](https://www.npmjs.com/package/@panda-design/components)
[![MIT License](https://img.shields.io/npm/l/@panda-design/components.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Pluggable design system base on [Ant Design](https://ant.design)

English | [中文](https://github.com/panda-design-team/components/blob/main/docs/README-zh_CN.md)

## Get Started

- Install

```bash
yarn add @panda-design/components
```

- Inject styles

```typescript jsx
import {appendStyle} from '@panda-design/components';

appendStyle();
// And if you don't want some style
appendStyle({inject: {Button: false}});
```

- Build your application above `Antd` & `Panda Design`

```typescript jsx
import {Button} from 'antd'; // with style injected

const App = () => {
    return <Button type="primary">OK</Button>;
};
```

- Enjoy the syntax sugar of `Panda Design`

```typescript jsx
import {Button} from '@panda-design/components';

const App = () => {
    return <Button type="primary" disabled disabledReason="Primission Denied">OK</Button>;
};
```

## Docs

[see StyleGuide made by this package](https://panda-design-team.github.io/)

also you may clone

```bash
git clone git@github.com:panda-design-team/panda-design-team.github.io.git
cd panda-design-team.github.io
yarn
yarn start
```

## Contribute

Feel free to raise issues and PR.
