#### 使用create-react-app快速搭建开发环境
###### 执行命令：
`npx create-react-app react-basic`
1.npx Node.js工具命令，查找并执行后续的包命令
2.create-react-app 核心包（固定写法），用于创建React项目
3.react-basic React项目的名称（可以自定义）

#### jsX
js 和html(Xml)的结合使用。

###### 语法：
使用<span style="color:red">{}</span>识别js中的表达式，比如常见的变量，函数调用，方法调用。
例如：

```jsX
function App(){
  return(
    <div className='App>
    <div style={{color:'red'}}> this is app</div>
    </div>
  )
}
```

>{{color:'red'}}这里是双层大括号，外层是识别语法，内层是识别的表达式的结构

###### 基础
```jsX
const list = [
  { id: 1, name: 'jack' },
  { id: 2, name: 'jeck' }
]
function App() {
  return (
    <div className="App">
      this is App
      {/*渲染列表*/}
      {/*map循环哪个结构，return哪个结构*/}
      {/*注意事项：加上一个独一无二的key,字符串或者是Number id*/}
      {/*key的作用：React框架内部使用 提升列表更新性能*/}

      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}
```