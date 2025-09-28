##### on+事件

1 基础写法
```jsx
//基础绑定事件写法
function App() {
  function handleClick() {
    console.log('点击')
  }
  return (
    //触发事件
    <button onClick={handleClick}>点击</button>
  );
}
```

2 含事件参数e写法
```jsx
// 含e事件绑定写法
function App() {
  const handleClick = (e) => {
    console.log('点击', e)
  }
  return (
    //触发事件
    <button onClick={handleClick}>点击</button>
  );
}
```

3 含参数写法
```jsx
// 含参数写法
function App() {
  const handleClick = (name) => {
    console.log('点击', name)
  }
  return (
    //触发事件
    <button onClick={() => handleClick('name')}>点击</button>
  );
}
```

4 既含e又含参数写法
```jsx
//既含e又含参数
function App() {
  const handleClick = (name, e) => {
    console.log('点击', name, e)
  }
  return (
    <div className="App">
      {/* 触发事件 */}
      <button onClick={(e) => handleClick('jack', e)}>点击</button>
    </div>
  );
}
```