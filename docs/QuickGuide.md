# 速查手册

快速了解 Panda Design 对 antd 的改动。查看[完整规范](https://panda-design-team.github.io/)。

## colors（新）

- 提供 `colors` 色盘

## theme（新）

- 提供黑色主题（Beta），由于[部分 Token 还在确定中](https://github.com/ant-design/ant-design/issues/38975)，使用此主题可能会在升级时有潜在的影响。

## Button

- 增加按钮类型 `type="flat"`
- 增加属性 `tooltip` 和 `disabledReason` 方便开发
- 注入动画

## Fields（新）

- 渲染单个 entity
- api 形似 `Table`，采用 `rows + dataSource` 的形式组织

## message

- 增加属性 `title`
- 注入倒计时条
- 注入关闭按钮

## Modal

- 默认垂直居中
- 默认宽度 600

## Tag

- 增加 5 种类型，风格各异
- 预置 11 个预定义的颜色配置
- 通过 `createTag` 自由增加颜色配置

## Link（新）

- 配合 [`react-router-template-link`](https://github.com/dancerphil/react-router-template-link) 提供样式
- 增加 `linkType`，可选 `link`, `text`, `none`, `default`

## icon（新）

- 提供 `createIcon` 方法，对 svg 进行必要处理

## icons

- 提供多个 icon

## style

- 允许控制各种组件是否进行样式注入，当你不需要某些样式或动画时，可以返回使用 antd 默认样式
  - Badge
  - Button
  - Message
  - Select
  - Table
  - Tabs
