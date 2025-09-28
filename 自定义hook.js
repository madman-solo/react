import { useState } from 'react';

function useToggle() {
  const [state, setState] = useState(false);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle];
}
function App() {
  const [state, toggle] = useToggle();
  return (
    <div>
      <h1>{state && 'this is h1'}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
export default App;

//封装自定义Hook通用思路(自定义Hook函数以use打头)：
// 1.声明一个以use开头的函数
// 2.在函数体内封装可复用的逻辑（只要是可复用的逻辑）
// 3.return出需要暴露的状态和方法（以对象或者数组的形式）
// 4.在函数组件中调用自定义Hook，结构出来状态和回调进行使用