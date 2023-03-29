# 速查手册

快速了解 Panda Design 对 antd 的改动。查看[完整规范](https://panda-design-team.github.io/)。

# Part1 - 可插拔的样式注入

## theme（新）

- 提供黑色为 `Primary Color` 的主题（Beta），由于[部分 Token 还在确定中](https://github.com/ant-design/ant-design/issues/38975)，使用此主题可能会在升级时有潜在的影响。

## style（新）

- 允许控制各种组件是否进行样式注入，当你不需要某些样式或动画时，可以返回使用 antd 默认样式
  - Badge（微调）
  - Button（注入动画）
  - Menu（对齐）
  - Message（倒计时条、关闭按钮）
  - Modal（微调）
  - Select（微调）
  - Table（线性动画）
  - Tabs（大小）
  - Typography（Text类型）
- 如果你需要禁用样式注入，你可以指定到组件级别：
  ```typescript
  appendStyle({injectAll: false, inject: {Button: true}});
  // 或
  appendStyle({injectAll: true, inject: {Button: false}});
  ```
- 如果你禁用了部分组件的样式，你可能需要同时修改 `theme`：
  ```typescript
  export const theme: ThemeConfig = {
    token: pandaThemeToken,
    components: {
      ...pandaThemeComponents,
      Button: {},
    },
  };
  ```

# Part2 - 额外的语法糖

## Button

- 增加按钮类型 `type="flat"`
- 增加属性 `tooltip` 和 `disabledReason` 方便开发

## message

- 增加属性 `title`

## Modal

- 默认垂直居中
- 默认宽度 600

## Tag

- 增加 `type` 字段包括 5 种类型，风格各异
- 预置 11 个预定义的颜色配置
- 通过 `createTag` 自由增加颜色配置

## Typography.Text

- 增加 `type="tertiary"`, `type="quaternary"`, `type="info"`, `type="error"`

# Part3 - 新组件

## colors（新）

- 提供 `colors` 色盘

## Fields（新）

- 渲染单个 entity
- api 形似 `Table`，采用 `rows + dataSource` 的形式组织

## Link（新）

- 配合 [`react-router-template-link`](https://github.com/dancerphil/react-router-template-link) 提供样式
- 增加 `linkType`，可选 `link`, `text`, `none`, `default`

## icon（新）

- 提供 `createIcon` 方法，对 svg 进行必要处理

## icons（新）

- 提供数个 icon
