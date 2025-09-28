// useEffect基础使用:
// 在组件挂载时获取数据并渲染到页面上（在组建渲染完毕之后，立刻获取数据并渲染到页面中）
import React, { useEffect, useState } from 'react';
const URL = 'https://geek.itheima.net/v1_0/channels'; // 频道列表的接口地址
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    //1.
    // fetch(URL)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data.channels);
    //   });
    //2.
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      setData(data.channels);
    }
    fetchData(); // 调用异步函数
  }, []);
  // 1.空依赖数组，初始
  // 2.无依赖项，初始+组件更新
  // 3.有特定依赖项，初始+特定依赖项变化时执行
  return (
    <div>
      this is App
      <ul>
        {data && data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default App; 