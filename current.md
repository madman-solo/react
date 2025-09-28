在 React 里使用 `useRef` 创建的 `ref` 对象时，调用 `focus()` 方法必须加上 `current`，不能省略，下面详细解释原因：

###  `useRef` 返回的是一个具有 `current` 属性的对象
`useRef` 是 React 提供的一个 Hook，调用它时会返回一个可变的 `ref` 对象。这个对象有一个特殊的 `current` 属性，`current` 属性才是用来存储对 DOM 元素或组件实例的引用。

以下是一个简单示例：
```jsx
import React, { useRef } from 'react';

function FocusInput() {
    const inputRef = useRef(null);
    console.log(inputRef); // 输出的是一个包含 current 属性的对象

    const handleClick = () => {
        // 尝试不加 current 调用 focus 方法
        // inputRef.focus(); // 这行代码会报错
        inputRef.current.focus(); // 正确的调用方式
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>聚焦输入框</button>
        </div>
    );
}

export default FocusInput;
```
在上述代码中，`inputRef` 本身是一个对象，其结构类似 `{ current: null }` ，初始时 `current` 属性值为 `null` 。当组件渲染，`ref` 绑定到 `<input>` 元素后，`inputRef.current` 就会指向这个 `<input>` DOM 元素。

### 直接使用 `inputRef` 调用 `focus` 会报错
`focus()` 是 DOM 元素的方法，而 `inputRef` 是一个 `ref` 对象，并非 DOM 元素，所以直接调用 `inputRef.focus()` 会导致 JavaScript 报错，因为 `inputRef` 对象并没有 `focus` 方法。只有通过 `inputRef.current` 才能获取到实际的 DOM 元素，进而调用其 `focus()` 方法。 

综上所述，在使用 `useRef` 创建的 `ref` 对象调用 DOM 元素方法时，必须通过 `current` 属性来访问实际的 DOM 元素。 