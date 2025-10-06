![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)
![alt text](image-7.png)

### JSX 中{}的应用：

![alt text](image-12.png)

### React 事件绑定：

- ![alt text](image-13.png)
- ![alt text](image-14.png)
  示例：
  ![alt text](image-15.png)

##### 阻止默认链接跳转行为：![alt text](image-8.png)

## React 组件:

![alt text](image-10.png)

##### 注意:

![alt text](image-16.png)

##### 导入根组件：

![alt text](image-17.png)

##### 导入其他组件：

![alt text](image-18.png)
在 React 中，所有其他的组件都应该渲染在根组件 App.js 中.
放置组件的特殊情况：![alt text](image-9.png)

### 组件状态：

![alt text](image-19.png)
示例：
![alt text](image-20.png)

##### 组件状态的规则：

![alt text](image-21.png)

##### 删除和修改数组：

![alt text](image-22.png)

##### 注意：

对象不能直接渲染，可以这样渲染：![alt text](image-11.png)

### B 站评论案例：

#### 1.

![alt text](image-23.png)

###### 注意：

![alt text](image-24.png)

#### 2.

![alt text](image-23.png)

---

![alt text](image-25.png)
![alt text](image-26.png)
![alt text](image-27.png)
![alt text](image-28.png)
![alt text](image-29.png)
![alt text](image-30.png)
![alt text](image-31.png)
![alt text](image-32.png)

### 导航 Tab 切换：

#### orderBy:

![alt text](image-37.png)

![alt text](image-33.png)
![alt text](image-34.png)
![alt text](image-35.png)
![alt text](image-38.png)

#### 总结:

![alt text](image-39.png)
![alt text](image-40.png)

---

### classnames:

![alt text](image-41.png)

#### 1. &&:

![alt text](image-42.png)

#### 2.对象语法：

![alt text](image-43.png)

### 使用状态操作表单元素的值：

![alt text](image-58.png)
![alt text](image-60.png)
![alt text](image-61.png)
![alt text](image-59.png)

---

- value 和 onChange 需要同时出现，否则就会报错
- ref.current 代表的就是这个 dom 元素
- 对 dom 操作，用到 ref
- “数据要更改，就得有状态”

---

### useRef 与 Dom 操作:

![alt text](image-55.png)
![alt text](image-56.png)
![alt text](image-57.png)

### 发表评论：

![alt text](image-53.png)

#### 1.给评论框绑定状态，获取内容，用受控组件：

![alt text](image-54.png)
![alt text](image-52.png)

#### 2.发布评论：

##### 2.1 有内容，发布评论，同时排序：

![alt text](image-46.png)
![alt text](image-47.png)
![alt text](image-48.png)

###### 实现![alt text](image-45.png)：

![alt text](image-44.png)

##### 2.2 对 dom 元素进行操作（无内容，获得焦点，提升体验）：

![alt text](image-50.png)
![alt text](image-49.png)

#### 总结：

![alt text](image-51.png)

---

### props:

![alt text](image-70.png)
![alt text](image-71.png)
![alt text](image-72.png)

---

#### 待办任务清单：

![alt text](image-64.png)
![alt text](image-63.png)

#### 父->子：

![alt text](image-62.png)

#### 子->父:

![alt text](image-65.png)
![alt text](image-66.png)
![alt text](image-69.png)
![alt text](image-67.png)
![alt text](image-68.png)

> 谁提供谁负责
> 子到父的通讯：父亲提供函数，传递给子，子拿到函数，回传参数，实现子到父的通讯。

---

#### 非父子之间通讯：

##### 兄弟组件通讯：

![alt text](image-73.png)
![alt text](image-74.png)

###### 1.2：

![alt text](image-75.png)

###### 3：

![alt text](image-76.png)
![alt text](image-77.png)

##### 总结：

![alt text](image-78.png)
![alt text](image-79.png)

#### 非父子组件通讯--后代关系(Context 上下文)：

![alt text](image-80.png)
![alt text](image-81.png)

##### 父组件初始：

![alt text](image-82.png)

##### 2.规定范围，提供共享数据：

![alt text](image-83.png)

##### 3.范围内的组件，获取共享数据：

![alt text](image-85.png)
![alt text](image-86.png)

##### 4.重置主题函数：

![alt text](image-87.png)

### useEffect 的使用：

![alt text](image-88.png)
![alt text](image-89.png)

#### 两种方式：

![alt text](image-93.png)

##### 方式一：以【生命周期钩子函数】为主：

![alt text](image-90.png)

##### 方式二：以功能为主：

![alt text](image-94.png)

##### 补充：

![alt text](image-95.png)

#### 总结：

![alt text](image-91.png)
![alt text](image-92.png)

#### useEffect 的扩展总结：

![alt text](image-96.png)

---

##### useEffect 清楚副作用补充（卸载时）：

![alt text](image-207.png)
![alt text](image-208.png)
在上面这种情况下，点击卸载组件时子组件中的副作用中的定时器不会关闭，要想清除这个副作用，就得卸载：
![alt text](image-209.png)

#### useEffect 的应用--发送请求：

##### 待办任务清单二：

![alt text](image-97.png)
![alt text](image-98.png)
![alt text](image-99.png)
![alt text](image-100.png)

###### 注意：

![alt text](image-101.png)

---

### 自定义 hook 使用：

![alt text](image-210.png)

### React Hooks 总结：

![alt text](image-102.png)

### 知乎-管理频道案例：

![alt text](image-104.png)

#### 1.展示或隐藏频道弹窗：

![alt text](image-105.png)
![alt text](image-106.png)

##### 打开弹窗：

![alt text](image-107.png)
![alt text](image-108.png)
![alt text](image-109.png)

##### 关闭弹窗：

![alt text](image-110.png)
![alt text](image-111.png)

#### 2.渲染频道数据：

![alt text](image-112.png)
![alt text](image-113.png)

##### 1.获取频道数据并渲染：

![alt text](image-114.png)
![alt text](image-115.png)
![alt text](image-116.png)

##### 总结：

![alt text](image-117.png)

#### 3.切换编辑或完成状态：

![alt text](image-118.png)

##### 1.处理可编辑频道：

![alt text](image-119.png)

##### 2.处理不可编辑频道：

![alt text](image-120.png)

##### 3.更新频道选中状态的函数：

![alt text](image-121.png)
![alt text](image-123.png)
![alt text](image-122.png)

###### 1.我的版块更新：

![alt text](image-125.png)

###### 2.更多板块更新：

![alt text](image-126.png)

> 优化版：
> ![alt text](image-127.png)

![alt text](image-124.png)

## Redux:

Redux 是一个独立的状态管理库，并非 React 内置，它的设计思想基于：

- 单一状态树（Single Source of Truth）
- 状态只读（Immutable）
- 通过纯函数（reducer）修改状态
  ![alt text](image-212.png)

### Redux 与 React 的链接：

![alt text](image-213.png)
![alt text](image-214.png)
![alt text](image-215.png)

#### 配置目录：

![alt text](image-216.png)
![alt text](image-217.png)

#### 整体路径：

![alt text](image-220.png)

#### 创建 store(使用 createSlice):

![alt text](image-221.png)

##### 示例：

![alt text](image-222.png)
![alt text](image-223.png)
![alt text](image-224.png)
注：
![alt text](image-218.png)这两个小函数是用来生成 action 对象的。

#### React 组件中使用 store 中的数据（useSelector）：

![alt text](image-225.png)

##### 示例 App.js:

![alt text](image-226.png)

#### React 组件中修改 store 中的数据(useDispatch)：

![alt text](image-227.png)

##### App.js 示例：

![alt text](image-228.png)

#### 总结：

![alt text](image-229.png)

#### 提交 action 传参实现需求（payload 属性）：

![alt text](image-230.png)

---

#### 异步状态操作：

![alt text](image-231.png)
![alt text](image-232.png)
注：![alt text](image-219.png)异步生成的是 action 函数。

### Redux 与 React 的链接总结版：

在 Redux 中，`Provider` 是 `react-redux` 库提供的核心组件，它的主要作用是将 Redux 的 `store` 传递给应用中所有需要访问状态的组件，无需通过 props 层层传递。这是 Redux 与 React 应用连接的关键环节。

### 基本用法步骤：

1. **安装依赖**  
   首先确保已安装 `react-redux`（需配合 Redux 核心库使用）：

   ```bash
   npm install redux react-redux
   # 或使用 yarn
   yarn add redux react-redux
   ```

2. **创建 Redux Store**  
   先定义 reducer 并创建 store（这是 Redux 的基础准备工作）：

   ```javascript
   // store.js
   import { createStore } from "redux";

   // 定义初始状态和 reducer
   const initialState = { count: 0 };
   function counterReducer(state = initialState, action) {
     switch (action.type) {
       case "INCREMENT":
         return { ...state, count: state.count + 1 };
       default:
         return state;
     }
   }

   // 创建 store
   const store = createStore(counterReducer);
   export default store;
   ```

3. **使用 Provider 包裹应用**  
   在应用的根组件（通常是 `App` 组件）外层用 `Provider` 包裹，并传入 `store`：

   ```jsx
   // index.js
   import React from "react";
   import ReactDOM from "react-dom";
   import { Provider } from "react-redux"; // 导入 Provider
   import store from "./store"; // 导入创建好的 store
   import App from "./App";

   // 用 Provider 包裹根组件，并传入 store
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("root")
   );
   ```

4. **子组件中访问 store**  
   被 `Provider` 包裹的所有子组件，都可以通过 `react-redux` 提供的 `useSelector` 和 `useDispatch` 钩子访问 store 中的状态或触发状态更新：

   ```jsx
   // Counter.js
   import { useSelector, useDispatch } from "react-redux";

   function Counter() {
     // 获取 store 中的状态
     const count = useSelector((state) => state.count);
     // 获取 dispatch 方法
     const dispatch = useDispatch();

     return (
       <div>
         <p>计数：{count}</p>
         <button onClick={() => dispatch({ type: "INCREMENT" })}>增加</button>
       </div>
     );
   }
   ```

### Provider 的核心作用：

- **传递 store 上下文**：`Provider` 内部利用 React 的 Context API 创建了一个全局上下文，将 `store` 放入其中，使得所有子组件都能访问到 `store`。
- **简化状态访问**：避免了手动将 `store` 通过 props 逐层传递给子组件的繁琐操作。
- **支持响应式更新**：当 `store` 中的状态发生变化时，使用 `useSelector` 订阅状态的组件会自动重新渲染。

### 注意事项：

- **一个应用通常只需要一个 Provider**：将其放在应用的最顶层（如 `index.js` 中），确保所有组件都能访问到 `store`。
- **必须传入 store 属性**：`Provider` 组件必须接收 `store` 作为 props，否则会报错。
- **与 Context API 的关系**：`Provider` 本质上是对 React Context 的封装，但其设计目的是专门为 Redux 的 `store` 提供全局访问能力。

通过 `Provider`，Redux 实现了与 React 应用的无缝集成，让状态管理变得更加简洁高效。

---

![alt text](image-233.png)action 和 reducer 的关系?

#### 异步状态操作请求：

![alt text](image-234.png)
![alt text](image-235.png)
![alt text](image-236.png)
![alt text](image-240.png)

---

![alt text](image-237.png)
![alt text](image-239.png)
![alt text](image-238.png)
![alt text](image-241.png)
![alt text](image-242.png)
点击分类激活交互效果实现：
![alt text](image-243.png)
![alt text](image-244.png)
![alt text](image-245.png)
![alt text](image-246.png)
![alt text](image-247.png)
商品列表切换显示:
![alt text](image-248.png)
![alt text](image-249.png)
购物车：
action.payload 代表当前拿到的对象？
![alt text](image-250.png)
![alt text](image-251.png)
![alt text](image-252.png)
![alt text](image-253.png)
![alt text](image-254.png)
![alt text](image-255.png)
![alt text](image-256.png)
![alt text](image-257.png)
![alt text](image-258.png)
![alt text](image-259.png)

---

![alt text](image-260.png)
![alt text](image-261.png)
![alt text](image-262.png)
![alt text](image-263.png)
![alt text](image-264.png)
控制购物车显示和隐藏：
![alt text](image-265.png)
![alt text](image-266.png)
![alt text](image-267.png)
![alt text](image-268.png)
遮罩层改为：

```js
visible && "visible";
```

![alt text](image-270.png)
![alt text](image-271.png)
