# Solar Value Web APP

A Web App dev for Solar Value

<p align="center">
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img width="200" src="https://avatars1.githubusercontent.com/u/41156540?s=200&v=4" alt="Vue logo">
    </a>
</p>
<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
</p>

## Work Plan

- 第一阶段：APP 静态原型开发（1周）

| 任务名称 | 开始时间 | 预测结束时间 | 实际结束时间 | 负责人 |
| -------- | -------- | ---------- | ----------- | ----- |
| `DataTable` 组件开发 + `Summary` 页面 | 2018/07/31 | 2018/07/31 | 达标 | DengDeng |
| `Event 页` + 根据设计图调整 + `highcharts` 配置 | 2018/07/31 | 2018/07/31 | 达标 | ZhanQuan |
| `多项目` 与 `单项目` 剩余页面搭建 | 2018/08/01 | 2018/08/01 | 达标 | DengDeng |
| 所有项目 `highchart` 图表配置, `Google` 谷歌地图组件 | 2018/08/01 | 2018/08/01 | 达标 | ZhanQuan |
| `下拉无限懒加载列表`组件 + `单项目Detail页面` | 2018/08/02 | 2018/08/02 | 达标 | DengDeng |
| 日历组件 `vue-event-calendar` 开发与改造 | 2018/08/03 | 2018/08/03 | 达标 | DengDeng |

- 第二阶段： APP 业务逻辑与接口联调（1周）

| 任务名称 | 开始时间 | 预测结束时间 | 实际结束时间 | 负责人 |
| -------- | -------- | ---------- | ----------- | ----- |
| `axios` 请求模块封装,开发环境跨域代理，`顶部导航` 与 `Widget面板` api联调成功 | 2018/08/06 | 2018/08/06 | 达标 | DengDeng |
| `highcharts` 图表数据源整理与开发 | 2018/08/07 | 2018/08/07 | - | DengDeng |
| `货币日期单位格式化` 工具函数开发 | 2018/08/08 | 2018/08/08 | - | DengDeng |

- 第三阶段： APP 测试返修与上线优化（1周）

    - 待定

## Work Log

- 2018/08/06
    - `axios` 请求模块封装
    - 开发环境跨域代理设置
    - `顶部导航` 与 `Widget面板` api联调对接成功
    - coolie 键 `.AspNet.ApplicationCookie`, 值 `ufe_dMg_uzRkd3GuZLZUcYe-aXu9HROpLX1vX2agYGX4h68fyQSRrGUkTLNXF29y2UcOphgMq1AgE_1PMVKuudUrvTGA0mgR8EaRpe368XuEMxaprtwQ97tFw_30HyKeOc0km-9f89Su2G40Pwg1EJbuQnxx_fiStPVlRSJEcPujo7Xd9X67j8CEfJCqJYb4eoCQt78L4cN2Xw4C4UEOkiM1aBXc0Z9oUNbhAgCL5cZ5sqoQXTZBa6oasrvm0Vb9zd_ui0Gtag5IK2j8yFIsID5gmcmQdUvTh4NMv6rKJhNxjpJlA1iw89zpBAfYiyCsLxgSTAhP6SR6wweiPUHnjTY6-9bXFQqzNH3mkzmzBJAxQ-ZPk8h3825rpvjYFYwg89o6LR-DD0NzyDB8pvl1k97ciBH-Va_T67DyCDTkYLry_bmxfQsfmOwjGbAygd1YRUg_M1aq996puntTg8pCGDeR1Wulj5B3Se6hrMG_6XDd-RHUH7rIG5NDlm8h5CD5VhR8bF7NHLlWba52w4ViPg`

- 2018/08/03
    - 事件日历组件开发与调试
    - 发现问题，eslint 规则无约束，代码不规范
    - `vue` 组件命名依然不够优雅

- 2018/08/02
    - 引入下拉加载组件
    - 考虑使用 `highStock` 触屏拉伸，时间段

- 2018/08/01
    - 完成 `单项目` 基本原型开发
    - 引入事件日历
    - 申请百度地图API `kK8ubS00D9vxxBTEaT8QD8QcIIjfXHZw`

- 2018/07/31
    - 完成 `多项目` 基本原型开发
    - 组件设计

- 2018/07/30
    - 完成 `dashboard`

- 2018/07/26
    - 完善登录流程，理解 `csrfToken` 安全提交校验
    - 打通前后端登录推出过程
    - 改变 `highchart` 主题颜色

- 2018/07/25
    - 完成图标体系 `Icon库` 选型，`Material Design Icon` 配套

- 2018/07/24
    - 完成登陆页面制作，背景放弃图片，选用 `24k` 大小的粒子动画 `particles.js` 
    - 引入安慰加载骨架屏组件 `vue-content-loader`
    - 使用状态管理 `Vuex` 存储用户登陆信息状态

- 2018/07/23
    - 完成嵌套路由设置，路由传参 `props`
    - 设置 `nav-tabs` 选中状态关联路由
    - 颜色，icon 的使用

- 2017/07/20
    - 基本页面组件划分搭建
    - 图表组件选用 `HighCharts`
    - 尝试对 `api` 封装, 开发环境下请求域名，生产环境下路由

- 2017/07/19
    - 使用 `egg` 构建 `Nodejs` 轻量服务器 `sv-egg`
    - 开发 `Restful API`，为前端工程 `sv-vue` 提供接口测试与 `Mock` 服务

- 2017/07/18
    - 新建前端工程 `sv-vue`, 一款日本新能源产业基金 Web App 应用
    - `Vuetify` 前端组件库选型测试

- 2017/07/16
    - 设计图定稿
    - 参考谷歌 `Material Design` 材料化设计方案
    - PhotoShop 产出设计稿（共计10页）





