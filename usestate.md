##### useState基础使用
useState是一个React Hook(函数)，它允许我们向组件添加一个<span style="color:red">状态变量</span>，从而控制影响组件的渲染效果。

在React中，状态被认为是只读的，我们应该<span style="color:red">替换它而不是修改它</span>，直接修改状态不能引发视图更新。
<span style="color:blue">即：在以下例子中不能直接写count++,而要通过set方法修改它。
</span>

useState实现一个计数器按钮:

```jsX
//引入useState函数
import { useState } from 'react'
function App() {
  //1.调用useState添加一个状态变量
  //count是状态变量
  //setCount是修改状态变量的方法
  const [count, setCount] = useState(0)

  //2.实现渲染，点击事件回调
  const handleClick = () => {
    //作用：1.用传入的新值修改count
    //2.重新使用新的count渲染UI
    setCount(count + 1)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
```

复杂数据类型例子：
```jsX
import { useState } from 'react'
function App() {
  const [form, setForm] = useState({name: 'jack', })
  const select = ['john', 'yark', 'mary', 'Dawei', 'HuaSheng', 'xialuoke']
  const [count, setCount] = useState(0)
  
  const handleName = () => {
    setForm({
      ...form,
      name: select[count]
    })

    //虽然说是替代它，而不是修改它，但是这里依旧用替代后的值来比较大小
    if (count < select.length - 1) {
      setCount(count + 1)
    }
  }

  return (
    <div className="App">
      <button onClick={handleName}>{form.name}</button>
    </div>
  );
}
```
