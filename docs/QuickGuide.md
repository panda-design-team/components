# 速查手册

快速了解 Panda Design 对 antd 的改动。查看[完整规范](https://panda-design-team.github.io/)。

# Part1 - 可插拔的样式注入

1. theme（新）

- 提供黑色为 `Primary Color` 的主题（Beta），由于[部分 Token 还在确定中](https://github.com/ant-design/ant-design/issues/38975)，使用此主题可能会在升级时有潜在的影响。

2. colors（新）

- 提供 `colors` 色盘

3. style（新）

  允许控制各种组件是否进行样式注入，当你不需要某些样式或动画时，可以返回使用 antd 默认样式

- Badge（微调）
- Button（注入动画）
- Menu（对齐）
- Message（倒计时条、关闭按钮）
- Modal（微调）
- Select（微调）
- Table（线性动画）
- Tabs（大小）
- Typography（Text类型）

Tip1. 如果你需要禁用样式注入，你可以指定到组件级别：

  ```typescript
  appendStyle({injectAll: false, inject: {Button: true}});
  // 或
  appendStyle({injectAll: true, inject: {Button: false}});
  ```

Tip2. 如果你禁用了部分组件的样式，你可能需要同时修改 `theme`：

  ```typescript
  import {themeBlack} from '@panda-design/components';

  if (themeBlue.components) {
    delete themeBlue.components.Button;
  }
  ```

# Part2 - 额外的工具

- `createIcon`：对 svg 进行必要处理
- 提供数个 `icon`，以 `Icon` 作为前缀
- 提供数个 `hooks`：
  - `createDocumentEventListenerHook`
  - `createWindowEventListenerHook`
  - `useLoadingMutex`

# Part3 - antd 组件语法糖

- `Button`
  - 增加按钮类型 `type="flat"`
  - 增加属性 `tooltip` 和 `disabledReason` 方便开发
- `message`
  - 增加属性 `title`
  - 增加属性 `showCloseIcon` 允许关闭叉叉
- `Modal`
  - 默认垂直居中
  - 默认宽度 600
- `Tag`
  - 增加 `type` 字段包括 5 种类型，风格各异
  - 预置 11 个预定义的颜色配置
  - 通过 `createTag` 自由增加颜色配置
- `Typography.Text`（导出为 `Text`）
  - 增加 `type="tertiary"`, `type="quaternary"`, `type="info"`, `type="error"`

# Part4 - 新组件

- `Fields`
  - 作用上类似 Description，用于渲染单个 entity
  - api 上形似 `Table`，采用 `rows + dataSource` 的形式组织
- `Link`
  - 配合 [`react-router-template-link`](https://github.com/dancerphil/react-router-template-link) 提供样式
  - 增加 `linkType`，可选 `link`, `text`, `none`, `default`
- `Loading`
  - 页面级 Loading 组件
- `QuickEdit`
  - 提供单个表单项的快速编辑功能
