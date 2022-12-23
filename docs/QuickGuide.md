# 速查手册

快速了解 Panda Design 对 antd 的改动

## Button

- 增加按钮类型 `type="flat"`
- 增加属性 `tooltip` 和 `disabledReason` 方便开发
- 注入动画

## colors（新）

- 提供 `colors` 色盘

## Fields（新）

- 渲染单个 entity
- api 形似 `Table`，采用 `rows + dataSource` 形似组织

## icon（新）

- 提供 `createIcon` 方法，对 svg 进行必要处理

## icons

- 提供多个 icon

## message

- 增加属性 `title`
- 注入倒计时条
- 注入关闭按钮

## Modal

- 默认垂直居中
- 默认宽度 600

## Tag

- 增加 5 种类型，风格各异
- 限制在 11 个预定义的颜色

## style

- 允许控制各种组件是否进行样式注入
