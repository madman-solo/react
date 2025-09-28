// 在useEffect中编写的由渲染本身引起的对接组件外部的操作，社区也经常把它叫做副作用操作。
//说明：清理副作用的函数最常见的执行时机是在组件卸载时自动执行

//比如在useEffect中开启一个定时器，在组件卸载时把这个定时器再清理掉，这个过程就是清理副作用：
import { useEffect, useState } from 'react';
function Son() {
  useEffect(() => {
    const [count, setCount] = useState(0);
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      //清理副作用用return
      clearInterval(timer); // 清理副作用
    };
  }, []);
}
function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Son />}
      <button onClick={() => { setShow(false) }}>卸载Son组件</button>
    </div>
  )
}
export default App