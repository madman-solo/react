useRef 是 React 提供的一个 Hook，它主要用于在函数式组件中创建一个可变的 ref 对象。这个 ref 对象在组件的整个生命周期内保持不变，无论组件重新渲染多少次，它始终指向同一个对象。下面详细介绍 useRef 的用法、特性和常见应用场景。

基本用法：
```jsX
// import 语法
import { useRef } from 'react'
//表单受控绑定
function App() {
  //1.创建ref对象
  const newref = useRef(null)
  return (
    <div className="App">
      {/* 2.将ref对象绑定在Dom元素上 */}
      <input type='text' ref={newref}></input>
    </div >
  );
}
```

实用：
1.

```jsX
// import 语法
import { useRef } from 'react'
//表单受控绑定
function App() {
  //1.创建ref对象
  const newref = useRef(null)
  const juJiao = () => {
    //利用ref对象的属性current访问Dom元素
    newref.current.focus()
    //这样可以实现：点击按钮时，文本框会自动聚焦，此时可以输入内容
    //focus()是Dom元素的方法，而newref是ref对象，newref.current指向Dom标签，才能使用其方法。
  }
  return (
    <div className="App">
      {/* 2.将ref对象绑定在Dom元素上 */}
      <input type='text' ref={newref}></input>
      <button onClick={juJiao}>聚焦输入框</button>
    </div >
  );
}
```

2.

```jsX
// import 语法
import { useRef } from 'react'
//表单受控绑定
function App() {
  //1.创建ref对象
  const newref = useRef(null)
  const showTime = () => {
    //利用ref对象的属性current访问Dom元素

    //dir会获取到的元素的属性及一些列内容
    console.dir(newref.current);// input 等展开内容

    //log会获取到元素本身
    console.log(newref.current);//<input type='text'>

  }
  return (
    <div className="App">
      {/* 2.将ref对象绑定在Dom元素上 */}
      <input type='text' ref={newref}></input>
      <button onClick={showTime}>聚焦输入框</button>
    </div >
  );
}
```
