##### 1.ReactHooks 使用规则：

- 只能在组件中或者其他自定义 Hook 函数中调用
- 只能在组件的顶层调用，不能嵌套在 if 或者 for 或者其他函数中

##### 2.使用 redux 的步骤：

- 1.使用 CRA 快速创建 React 项目
  npx creat-reaxt-app react-redux(这个是项目名称)
- 2.安装配套工具：
  npm i @reduxjs/toolkit react-redux
- 3.启动项目：
  npm run start

##### 3.什么是 Redux:

Redux 是 React 最常用的<span style="color:red">集中状态管理工具</span>，类似于 Vue 中的 Vuex，<span style="color:red">可以独立于框架运行</span>
作用：通过集中管理的方式管理应用的状态
