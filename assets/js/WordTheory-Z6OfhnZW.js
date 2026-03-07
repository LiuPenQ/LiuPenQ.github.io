import"./objectSpread2-C5mcNoIF.js";import{E as k,It as i,L as o,Mt as u,S as a,T as C,Y as x,g,h as _,i as P,lt as T,rt as d,s as j,v as M,x as y,y as e,z as h}from"./index-CJRj6QAw.js";import"./axios-DpqUCHN_.js";import{t as O}from"./ai-yT0eJ9YA.js";const E=[{key:"js",label:"JavaScript"},{key:"htmlcss",label:"HTML/CSS"},{key:"vue",label:"Vue"},{key:"engineering",label:"工程化"},{key:"network",label:"网络"},{key:"browser",label:"浏览器"},{key:"backend",label:"后台系统"},{key:"project",label:"项目"}],I=[{id:1001,title:"变量提升与暂时性死区",content:"var、let、const区别？什么是暂时性死区？",answer:`var/let/const区别：

var：
- 函数作用域
- 允许重复声明
- 变量提升（声明提升，值为undefined）
- 可修改

let：
- 块级作用域
- 不允许重复声明
- 存在暂时性死区
- 可修改

const：
- 块级作用域
- 不允许重复声明
- 存在暂时性死区
- 声明时必须初始化
- 不可修改（但对象属性可修改）

暂时性死区（TDZ）：
- 从代码块开始到变量声明语句之间的区域
- 在此区域内访问变量会报ReferenceError
- let和const声明的变量存在TDZ`,category:"js",stars:4},{id:1002,title:"作用域与作用域链",content:"全局作用域、函数作用域、块级作用域？作用域链怎么形成的？",answer:`作用域类型：

1. 全局作用域
   - 在任何地方都能访问
   - var声明的全局变量会成为window属性

2. 函数作用域
   - 函数内部定义的变量
   - 外部无法访问

3. 块级作用域
   - {}内使用let/const声明的变量
   - 只在块内有效

作用域链：
- 由词法作用域决定
- 函数定义时就确定了
- 从内向外查找变量
- 直到全局作用域
- 找不到则报ReferenceError`,category:"js",stars:4},{id:1003,title:"闭包",content:"定义？用途（数据私有化、柯里化、防抖节流）？内存泄漏问题？",answer:`闭包定义：
有权访问另一个函数作用域中变量的函数

特点：
1. 可以访问函数内部的变量
2. 变量不会被垃圾回收
3. 可以实现私有变量

用途：
1. 数据私有化
   - 模块模式
   - 封装私有变量

2. 柯里化
   - 函数复用
   - 参数复用

3. 防抖节流
   - 保存定时器引用
   - 控制执行频率

内存泄漏：
- 闭包会引用外部变量
- 不再使用时要解除引用
- 避免在闭包中引用大对象
- 及时清除定时器和事件监听`,category:"js",stars:5},{id:1004,title:"this指向",content:"默认绑定、隐式绑定、显式绑定（call/apply/bind）、箭头函数、new绑定？优先级？",answer:`this绑定规则（优先级从高到低）：

1. new绑定
   - this指向新创建的对象

2. 显式绑定（call/apply/bind）
   - this指向传入的第一个参数
   - bind返回新函数，call/apply立即执行
   - apply第二个参数是数组

3. 隐式绑定
   - this指向调用该方法的对象
   - 注意隐式丢失问题

4. 默认绑定
   - 严格模式：undefined
   - 非严格模式：window

箭头函数：
- 没有自己的this
- 继承外层作用域的this
- 绑定后不可改变`,category:"js",stars:5},{id:1005,title:"原型与原型链",content:"__proto__、prototype、继承方式（组合继承、寄生组合继承）、instanceof原理？",answer:`原型：
- __proto__：对象的原型
- prototype：构造函数的原型对象
- 实例.__proto__ === 构造函数.prototype

原型链：
- 对象通过__proto__链接
- 最终指向Object.prototype
- Object.prototype.__proto__ === null

继承方式：
1. 组合继承
   - 原型链+借用构造函数
   - 缺点：调用了两次父类构造函数

2. 寄生组合继承（最优）
   - 使用Object.create()
   - 只调用一次父类构造函数

instanceof原理：
- 沿着原型链查找
- 判断prototype是否在原型链上`,category:"js",stars:5},{id:1006,title:"类型判断",content:"typeof、instanceof、Object.prototype.toString.call？各有什么局限？",answer:`typeof：
- 返回字符串
- 可以判断：undefined、string、number、boolean、symbol、function
- 局限：null返回object、数组返回object

instanceof：
- 判断原型链
- 可以区分数组和对象
- 局限：只能判断对象类型

Object.prototype.toString.call：
- 最准确
- 返回[object Type]
- 可以判断所有类型

最佳实践：
- 基本类型：typeof
- 引用类型：Object.prototype.toString.call
- 数组：Array.isArray()`,category:"js",stars:4},{id:1007,title:"深浅拷贝",content:"浅拷贝（Object.assign、扩展运算符）、深拷贝（JSON.parse缺陷、递归实现）？",answer:`浅拷贝：
1. Object.assign()
2. 扩展运算符...
3. Array.prototype.slice()
- 只复制一层
- 嵌套对象仍是引用

深拷贝：
1. JSON.parse(JSON.stringify())
   - 缺陷：无法处理函数、undefined、Symbol、循环引用

2. 递归实现
   - 处理各种类型
   - 处理循环引用（WeakMap）

手写深拷贝要点：
- 判断类型
- 处理循环引用
- 处理特殊对象（Date、RegExp、Map、Set）
- 递归复制`,category:"js",stars:5},{id:1008,title:"函数式编程",content:"纯函数、高阶函数、柯里化、组合函数？",answer:`纯函数：
- 相同输入永远返回相同输出
- 无副作用
- 不依赖外部状态

高阶函数：
- 接收函数作为参数
- 或返回一个函数
- 如：map、filter、reduce

柯里化：
- 将多参数函数转为单参数函数
- 延迟执行
- 参数复用

组合函数：
- 将多个函数组合成一个
- 从右向左执行
- compose(f, g)(x) = f(g(x))`,category:"js",stars:3},{id:1009,title:"防抖与节流",content:"手写实现？适用场景？区别？",answer:`防抖（Debounce）：
- 最后一次触发后执行
- 实现：定时器，每次触发清除重新计时

节流（Throttle）：
- 固定时间间隔执行
- 实现：时间戳或定时器

适用场景：
防抖：
- 搜索框输入
- 窗口resize
- 表单验证

节流：
- 滚动加载
- 鼠标移动
- 按钮重复点击

区别：
- 防抖：只执行最后一次
- 节流：固定频率执行`,category:"js",stars:5},{id:1010,title:"Promise",content:"状态、实例方法、静态方法（all/race/allSettled/any）、手写Promise.all？",answer:`三种状态：
- pending：进行中
- fulfilled：已成功
- rejected：已失败

实例方法：
- then()：成功回调
- catch()：失败回调
- finally()：无论成功失败都执行

静态方法：
- Promise.all()：全部成功才成功
- Promise.race()：返回最快的结果
- Promise.allSettled()：等待所有完成
- Promise.any()：任一成功就成功

手写Promise.all：
- 返回新Promise
- 计数器记录完成数量
- 按顺序存储结果
- 全部完成时resolve`,category:"js",stars:5},{id:1011,title:"async/await",content:"原理（generator+自动执行）？错误处理？",answer:`原理：
- async函数返回Promise
- await相当于generator的yield
- 自动执行器处理异步

错误处理：
1. try/catch
   \`\`\`js
   try {
     const res = await fn()
   } catch(e) {
     console.error(e)
   }
   \`\`\`

2. .catch()
   \`\`\`js
   await fn().catch(e => {})
   \`\`\`

3. 封装错误处理函数

注意：
- await后的代码相当于then回调
- 多个await串行执行
- 并行用Promise.all`,category:"js",stars:4},{id:1012,title:"事件循环",content:"宏任务、微任务、执行顺序分析？",answer:`宏任务：
- script整体代码
- setTimeout/setInterval
- I/O操作
- UI渲染
- requestAnimationFrame

微任务：
- Promise.then/catch/finally
- async/await
- MutationObserver
- queueMicrotask

执行顺序：
1. 执行同步代码
2. 执行所有微任务
3. UI渲染
4. 执行一个宏任务
5. 重复2-4

经典题目分析：
- 同步代码先执行
- Promise.then是微任务
- setTimeout是宏任务
- 微任务优先于宏任务`,category:"js",stars:5},{id:1013,title:"ES6+新特性",content:"let/const、解构赋值、箭头函数、Symbol、Set/Map、Proxy与Reflect？",answer:`let/const：
- 块级作用域
- 暂时性死区
- const声明常量

解构赋值：
- 数组解构
- 对象解构
- 默认值

箭头函数：
- 无this
- 无arguments
- 不能new

Symbol：
- 唯一值
- 作为属性键

Set/Map：
- Set：唯一值集合
- Map：键值对集合

Proxy与Reflect：
- Proxy：代理对象
- Reflect：操作对象的方法
- Vue3响应式基础`,category:"js",stars:4},{id:1014,title:"ES Module vs CommonJS",content:"区别？动态加载？循环依赖处理？",answer:`ES Module：
- 静态分析
- 编译时加载
- 输出值引用
- this是undefined

CommonJS：
- 运行时加载
- 输出值拷贝
- this指向当前模块

区别：
1. 加载时机
   - ES Module编译时
   - CommonJS运行时

2. 输出方式
   - ES Module引用
   - CommonJS拷贝

3. this指向
   - ES Module：undefined
   - CommonJS：module.exports

循环依赖：
- ES Module：只输出已执行部分
- CommonJS：输出已执行部分`,category:"js",stars:4},{id:2001,title:"HTML5语义化标签",content:"语义化标签有哪些？为什么需要语义化？",answer:`语义化标签：
- header：头部
- nav：导航
- main：主要内容
- article：文章
- section：章节
- aside：侧边栏
- footer：底部

语义化的好处：
1. SEO优化
   - 搜索引擎更好地理解页面结构

2. 可访问性
   - 屏幕阅读器更好解析

3. 代码可读性
   - 结构清晰
   - 易于维护

4. 开发体验
   - 团队协作更方便`,category:"htmlcss",stars:3},{id:2002,title:"本地存储",content:"localStorage、sessionStorage、cookie区别？IndexedDB？",answer:`localStorage：
- 持久化存储
- 无过期时间
- 约5MB
- 同源共享

sessionStorage：
- 会话存储
- 关闭标签页清除
- 约5MB
- 仅当前标签页

cookie：
- 可设置过期时间
- 约4KB
- 每次请求携带
- 可设置HttpOnly、Secure、SameSite

IndexedDB：
- 大容量存储
- 异步API
- 支持索引和事务
- 适合大量结构化数据`,category:"htmlcss",stars:4},{id:2003,title:"CSS盒模型",content:"标准盒模型、IE盒模型、box-sizing？",answer:`标准盒模型（content-box）：
- width = content
- 总宽度 = content + padding + border

IE盒模型（border-box）：
- width = content + padding + border
- 总宽度 = width

box-sizing属性：
- content-box：标准盒模型
- border-box：IE盒模型

最佳实践：
\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

使用border-box的好处：
- 更直观的宽度计算
- 布局更方便
- 避免padding撑大盒子`,category:"htmlcss",stars:4},{id:2004,title:"CSS选择器优先级",content:"优先级计算？权重？伪类伪元素？",answer:`优先级计算：
- !important > 内联 > ID > 类/伪类/属性 > 元素/伪元素

权重值：
- 内联：1000
- ID：100
- 类/伪类/属性：10
- 元素/伪元素：1

伪类：
- :hover
- :active
- :focus
- :nth-child()

伪元素：
- ::before
- ::after
- ::first-line

注意：
- 通配符*权重为0
- 继承的样式没有优先级
- 相同权重后者覆盖`,category:"htmlcss",stars:4},{id:2005,title:"BFC（块级格式化上下文）",content:"什么是BFC？如何创建？应用场景？",answer:`BFC定义：
块级格式化上下文，一个独立的渲染区域

创建BFC：
- float不为none
- position为absolute/fixed
- display为inline-block/flex/grid
- overflow不为visible

应用场景：
1. 清除浮动
   - 父元素overflow: hidden

2. 防止margin重叠
   - 创建新的BFC

3. 阻止元素被浮动覆盖
   - 创建BFC形成独立区域`,category:"htmlcss",stars:4},{id:2006,title:"Flex布局",content:"容器属性、项目属性？常用场景？",answer:`容器属性：
- flex-direction：主轴方向
- flex-wrap：换行方式
- justify-content：主轴对齐
- align-items：交叉轴对齐
- align-content：多行对齐

项目属性：
- flex-grow：放大比例
- flex-shrink：缩小比例
- flex-basis：初始大小
- flex：grow shrink basis简写
- align-self：单独对齐
- order：排列顺序

常用场景：
1. 水平垂直居中
   \`\`\`css
   display: flex;
   justify-content: center;
   align-items: center;
   \`\`\`

2. 两端对齐
   \`\`\`css
   justify-content: space-between;
   \`\`\`

3. 等分布局
   \`\`\`css
   flex: 1;
   \`\`\``,category:"htmlcss",stars:5},{id:2007,title:"水平垂直居中",content:"多种实现方案？",answer:`方案一：Flex
\`\`\`css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

方案二：Grid
\`\`\`css
.parent {
  display: grid;
  place-items: center;
}
\`\`\`

方案三：绝对定位 + transform
\`\`\`css
.parent { position: relative; }
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
\`\`\`

方案四：绝对定位 + margin: auto
\`\`\`css
.parent { position: relative; }
.child {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
}
\`\`\`

方案五：table-cell
\`\`\`css
.parent {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
\`\`\``,category:"htmlcss",stars:5},{id:2008,title:"响应式布局",content:"媒体查询、rem/vw/vh、移动端适配方案？",answer:`媒体查询：
\`\`\`css
@media screen and (max-width: 768px) {
  /* 移动端样式 */
}
\`\`\`

rem方案：
- 1rem = 根元素font-size
- 配合flexible.js
- 动态设置html的font-size

vw/vh方案：
- 1vw = 视口宽度的1%
- 1vh = 视口高度的1%
- 更现代的方案

移动端适配：
1. viewport设置
   \`\`\`html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   \`\`\`

2. 1px问题
   - transform: scale(0.5)
   - 伪元素

3. 安全区域
   - env(safe-area-inset-bottom)`,category:"htmlcss",stars:4},{id:3001,title:"Vue2响应式原理",content:"Object.defineProperty怎么实现？数组怎么处理？缺点？",answer:`实现原理：
1. 遍历对象属性
2. 使用Object.defineProperty
3. 为每个属性添加getter/setter
4. getter收集依赖
5. setter通知更新

数组处理：
- 重写7个方法
- push、pop、shift、unshift、splice、sort、reverse
- 使用Object.create继承原型

缺点：
1. 无法检测对象新增属性
2. 无法检测对象删除属性
3. 无法检测数组索引变化
4. 无法检测数组长度变化
5. 需要递归遍历，性能较差`,category:"vue",stars:5},{id:3002,title:"Vue3响应式原理",content:"Proxy比defineProperty好在哪里？懒代理是什么？",answer:`Proxy优势：
1. 可以检测对象新增属性
2. 可以检测对象删除属性
3. 可以检测数组索引和长度
4. 性能更好
5. 支持Map、Set等

懒代理：
- 只有访问到属性时才代理
- 不需要递归遍历
- 按需代理，性能更好

实现方式：
\`\`\`js
const proxy = new Proxy(target, {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    track(target, key)
    if (typeof res === 'object') {
      return reactive(res) // 懒代理
    }
    return res
  }
})
\`\`\``,category:"vue",stars:5},{id:3003,title:"虚拟DOM和diff算法",content:"Vue2和Vue3 diff区别？key的作用？为什么不能用index？",answer:`虚拟DOM：
- 用JS对象描述DOM结构
- 减少直接操作DOM

Vue2 diff：
- 双端比较
- 头尾四个指针
- 复杂度较高

Vue3 diff：
- 单端比较
- 最长递增子序列
- 性能更好

key的作用：
1. 标识节点唯一性
2. 帮助diff算法识别节点
3. 提高更新性能

为什么不能用index：
1. 插入/删除时index变化
2. 导致不必要的DOM操作
3. 可能导致状态混乱`,category:"vue",stars:5},{id:3004,title:"Vue生命周期",content:"各阶段做什么？父子组件执行顺序？",answer:`Vue2生命周期：
1. beforeCreate：实例初始化
2. created：数据观测完成
3. beforeMount：挂载前
4. mounted：挂载完成
5. beforeUpdate：更新前
6. updated：更新完成
7. beforeDestroy：销毁前
8. destroyed：销毁完成

Vue3生命周期：
- setup替代beforeCreate/created
- onBeforeMount/onMounted
- onBeforeUpdate/onUpdated
- onBeforeUnmount/onUnmounted

父子组件顺序：
挂载：父beforeCreate → 父created → 父beforeMount → 子beforeCreate → 子created → 子beforeMount → 子mounted → 父mounted

更新：父beforeUpdate → 子beforeUpdate → 子updated → 父updated`,category:"vue",stars:5},{id:3005,title:"computed和watch",content:"区别？计算属性为什么有缓存？",answer:`computed：
- 计算属性
- 有缓存
- 依赖变化才重新计算
- 必须有返回值

watch：
- 监听器
- 无缓存
- 数据变化立即执行
- 可执行副作用

为什么有缓存：
1. 基于依赖缓存
2. 依赖不变不重新计算
3. 避免重复计算
4. 提高性能

使用场景：
- computed：计算衍生值
- watch：执行异步操作`,category:"vue",stars:5},{id:3006,title:"组件通信",content:"8种方式？兄弟组件怎么通信？",answer:`8种通信方式：
1. props / $emit
   - 父子通信

2. $parent / $children
   - 访问父子实例

3. $refs
   - 父访问子实例

4. provide / inject
   - 跨层级通信

5. eventBus
   - 任意组件

6. Vuex / Pinia
   - 全局状态

7. $attrs / $listeners
   - 属性透传

8. slot
   - 内容分发

兄弟组件通信：
1. eventBus
2. Vuex / Pinia
3. 通过父组件中转`,category:"vue",stars:5},{id:3007,title:"v-model原理",content:"语法糖怎么实现？组件上怎么用多个v-model？",answer:`语法糖实现：
Vue2：
\`\`\`html
<input v-model="value">
<!-- 等价于 -->
<input :value="value" @input="value = $event">
\`\`\`

Vue3：
\`\`\`html
<input v-model="value">
<!-- 等价于 -->
<input :modelValue="value" @update:modelValue="value = $event">
\`\`\`

多个v-model：
\`\`\`html
<Child v-model:title="title" v-model:content="content" />
\`\`\`

子组件：
\`\`\`js
props: ['title', 'content'],
emits: ['update:title', 'update:content']
\`\`\``,category:"vue",stars:4},{id:3008,title:"keep-alive",content:"作用？生命周期？include/exclude/max？",answer:`作用：
- 缓存组件实例
- 保持组件状态
- 避免重复渲染

生命周期：
- activated：组件激活
- deactivated：组件停用

props：
- include：匹配的缓存
- exclude：匹配的不缓存
- max：最大缓存数

使用场景：
1. 表单填写保留内容
2. 列表详情返回保留滚动
3. Tab切换保持状态`,category:"vue",stars:3},{id:3009,title:"Vue Router",content:"路由模式区别？导航守卫？懒加载原理？",answer:`路由模式：
1. hash模式
   - URL带#
   - hashchange事件
   - 无需服务器配置

2. history模式
   - URL不带#
   - pushState/replaceState
   - 需服务器配置

导航守卫：
- 全局：beforeEach、afterEach
- 路由：beforeEnter
- 组件：beforeRouteEnter等

懒加载原理：
- 动态import()
- Webpack单独打包
- 访问时加载`,category:"vue",stars:4},{id:3010,title:"Vuex与Pinia",content:"核心概念？为什么需要mutation？Pinia优势？",answer:`Vuex核心：
- State：状态
- Getter：计算属性
- Mutation：同步修改
- Action：异步操作
- Module：模块化

Pinia核心：
- State：状态
- Getter：计算属性
- Action：同步/异步

为什么需要mutation：
1. 统一修改入口
2. 便于追踪
3. DevTools记录

Pinia优势：
1. 无mutation，更简单
2. 更好的TS支持
3. 模块化更自然
4. 体积更小`,category:"vue",stars:4},{id:3011,title:"Vue3 Composition API",content:"setup函数、ref/reactive、toRefs、watch/watchEffect？",answer:`setup函数：
- 组合式API入口
- 在beforeCreate之前执行
- 返回的对象可在模板使用

ref vs reactive：
- ref：基本类型，需要.value
- reactive：对象类型，无需.value

toRefs：
- 将reactive转为ref
- 解构时保持响应式

watch vs watchEffect：
- watch：明确依赖源
- watchEffect：自动收集依赖

优势：
1. 更好的逻辑复用
2. 更好的TS支持
3. 代码组织更灵活`,category:"vue",stars:5},{id:4001,title:"Webpack核心概念",content:"entry/output/loader/plugin？打包流程？",answer:`核心概念：
1. entry：入口
2. output：输出
3. loader：转换文件
4. plugin：扩展功能

打包流程：
1. 从entry开始
2. 解析依赖关系
3. loader转换文件
4. plugin处理钩子
5. 输出bundle

loader vs plugin：
- loader：文件转换
- plugin：功能扩展

常用loader：
- babel-loader
- css-loader
- style-loader
- file-loader`,category:"engineering",stars:4},{id:4002,title:"Webpack优化",content:"splitChunks、tree shaking、scope hoisting？",answer:`splitChunks：
- 代码分割
- 提取公共代码
- 配置minSize、minChunks

tree shaking：
- 删除未使用代码
- 基于ES Module
- 需要设置mode: production

scope hoisting：
- 作用域提升
- 减少函数声明
- 减小代码体积

其他优化：
1. 压缩代码
2. CDN加速
3. 懒加载
4. 缓存优化
5. 多线程打包`,category:"engineering",stars:4},{id:4003,title:"Vite",content:"特点？与Webpack对比？为什么快？",answer:`Vite特点：
1. 基于ESM的开发服务器
2. 按需编译
3. 极速冷启动
4. 即时热更新

为什么快：
1. 开发环境不打包
2. 利用浏览器ESM
3. esbuild预构建
4. 按需编译

与Webpack对比：
- Webpack：先打包再启动
- Vite：直接启动，按需编译

生产环境：
- 使用Rollup打包
- 更好的代码分割`,category:"engineering",stars:4},{id:4004,title:"性能优化",content:"加载优化、渲染优化、运行时优化？",answer:`加载优化：
1. 资源压缩
2. 图片优化
3. 代码分割
4. CDN加速
5. 预加载/预连接

渲染优化：
1. 减少重排重绘
2. 虚拟列表
3. 防抖节流
4. Web Worker

运行时优化：
1. 事件委托
2. 避免内存泄漏
3. 及时销毁监听器

监控：
- Performance API
- Lighthouse
- 用户体验指标`,category:"engineering",stars:5},{id:4005,title:"Git与CI/CD",content:"常用命令？rebase vs merge？CI/CD概念？",answer:`常用命令：
- git add/commit/push
- git pull/fetch
- git branch/checkout
- git merge/rebase
- git stash

rebase vs merge：
- rebase：线性历史，更干净
- merge：保留分支历史

CI/CD：
- CI：持续集成
- CD：持续部署

GitHub Actions：
- 自动化测试
- 自动化部署
- 代码质量检查`,category:"engineering",stars:3},{id:5001,title:"HTTP缓存",content:"强缓存、协商缓存？Cache-Control？ETag？",answer:`强缓存：
- Expires：过期时间
- Cache-Control：max-age
- 不发请求，直接用缓存

协商缓存：
- Last-Modified / If-Modified-Since
- ETag / If-None-Match
- 发请求，304用缓存

缓存位置：
1. Service Worker
2. Memory Cache
3. Disk Cache
4. Push Cache

Cache-Control指令：
- max-age：缓存时间
- no-cache：协商缓存
- no-store：不缓存
- public/private`,category:"network",stars:5},{id:5002,title:"HTTPS",content:"握手过程？对称加密+非对称加密？证书作用？",answer:`握手过程：
1. 客户端发送支持的加密算法
2. 服务端返回证书和公钥
3. 客户端验证证书
4. 客户端生成对称密钥，用公钥加密
5. 服务端用私钥解密获取对称密钥
6. 后续用对称密钥通信

加密方式：
- 非对称加密：密钥交换
- 对称加密：数据传输

证书作用：
1. 验证服务器身份
2. 防止中间人攻击
3. 包含公钥`,category:"network",stars:4},{id:5003,title:"HTTP/2",content:"多路复用、头部压缩、服务器推送？",answer:`多路复用：
- 一个TCP连接多个请求
- 二进制分帧
- 解决队头阻塞

头部压缩：
- HPACK算法
- 静态字典
- 动态字典

服务器推送：
- 服务端主动推送资源
- 减少请求延迟

与HTTP/1.1对比：
- HTTP/1.1：多个TCP连接
- HTTP/2：单个连接多路复用

HTTP/3：
- 基于QUIC协议
- UDP传输
- 解决TCP队头阻塞`,category:"network",stars:3},{id:5004,title:"跨域",content:"同源策略？CORS？JSONP？代理？",answer:`同源策略：
- 协议+域名+端口相同
- 限制跨域请求

CORS：
- 服务端设置Access-Control-Allow-Origin
- 简单请求：直接发送
- 预检请求：OPTIONS先询问

JSONP：
- 利用script标签
- 只支持GET
- 需要服务端配合

代理：
- 开发环境：devServer proxy
- 生产环境：Nginx反向代理`,category:"network",stars:5},{id:5005,title:"WebSocket",content:"与HTTP区别？握手过程？心跳机制？",answer:`与HTTP区别：
- 全双工通信
- 持久连接
- 服务端可主动推送

握手过程：
1. 客户端发送Upgrade请求
2. 服务端返回101 Switching
3. 升级为WebSocket协议

心跳机制：
- 定时发送ping
- 服务端返回pong
- 超时则断开重连

断线重连：
1. 监听close事件
2. 延迟重连
3. 指数退避
4. 最大重连次数`,category:"network",stars:4},{id:6001,title:"浏览器渲染流程",content:"DOM树、CSSOM树、渲染树、布局、绘制、合成？",answer:`渲染流程：
1. 解析HTML → DOM树
2. 解析CSS → CSSOM树
3. 合并 → 渲染树
4. 布局 → 计算位置大小
5. 绘制 → 像素绘制
6. 合成 → 图层合成

重排（Reflow）：
- 改变布局
- 触发重新布局
- 性能消耗大

重绘（Repaint）：
- 改变外观
- 不改变布局
- 性能消耗小

优化：
- 批量修改样式
- 使用transform
- 使用opacity
- 避免频繁读取布局属性`,category:"browser",stars:5},{id:6002,title:"事件机制",content:"捕获、目标、冒泡？事件委托？",answer:`事件流：
1. 捕获阶段：window → 目标
2. 目标阶段：事件目标
3. 冒泡阶段：目标 → window

addEventListener：
- 第三个参数：true捕获，false冒泡

事件委托：
- 利用事件冒泡
- 在父元素监听
- 通过event.target判断

优点：
1. 减少事件监听
2. 动态元素自动绑定
3. 内存占用更少

阻止冒泡：
- event.stopPropagation()`,category:"browser",stars:4},{id:6003,title:"XSS与CSRF",content:"原理？防御方式？",answer:`XSS（跨站脚本攻击）：
原理：注入恶意脚本

防御：
1. 转义用户输入
2. CSP内容安全策略
3. HttpOnly cookie

CSRF（跨站请求伪造）：
原理：伪造用户请求

防御：
1. SameSite cookie
2. CSRF Token
3. 验证Referer
4. 双重cookie验证

区别：
- XSS：窃取信息
- CSRF：伪造请求`,category:"browser",stars:4},{id:7001,title:"RBAC权限模型",content:"用户-角色-权限？前端权限控制？",answer:`RBAC模型：
- 用户：使用者
- 角色：权限集合
- 权限：具体操作

前端权限控制：
1. 路由权限
   - 动态路由
   - router.addRoutes

2. 菜单权限
   - 根据权限生成菜单
   - 递归过滤

3. 按钮权限
   - 自定义指令v-permission
   - 函数判断

Token认证：
- JWT结构
- 双token刷新
- 无感续期`,category:"backend",stars:5},{id:7002,title:"Axios封装",content:"拦截器、错误处理、取消重复请求？",answer:`拦截器：
- 请求拦截：添加token
- 响应拦截：统一处理错误

错误处理：
1. 网络错误
2. 超时错误
3. 业务错误

取消重复请求：
1. 存储pending请求
2. 新请求取消旧请求
3. 使用CancelToken

封装要点：
\`\`\`js
const service = axios.create({
  baseURL,
  timeout
})

service.interceptors.request.use(config => {
  // 添加token
  return config
})

service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)
\`\`\``,category:"backend",stars:4},{id:8001,title:"共创SaaS平台",content:"双Token无感续期？虚拟滚动实现？防重复提交？",answer:`双Token无感续期：
- accessToken：短期有效
- refreshToken：长期有效
- 请求拦截判断token过期
- 刷新token后重新请求

虚拟滚动实现：
1. 只渲染可视区域
2. 计算startIndex/endIndex
3. 使用padding撑开高度
4. 滚动时更新渲染列表

遇到的问题：
- 动态行高：预估+修正
- 滚动位置保持
- 快速滚动白屏

防重复提交：
- 按钮禁用
- 请求标识
- 防抖处理`,category:"project",stars:5},{id:8002,title:"数据开发系统",content:"大文件分片上传？断点续传？类Excel编辑器？",answer:`分片上传：
1. 文件切片
2. 计算文件hash
3. 并发上传分片
4. 服务端合并

断点续传：
- 记录已上传分片
- 秒传：hash匹配
- 续传：跳过已上传

并发控制：
- 限制并发数
- 队列管理
- 失败重试

类Excel编辑器：
- 快捷键处理
- 撤销重做栈
- 数据校验
- 性能优化`,category:"project",stars:5},{id:8003,title:"内部通讯管理系统",content:"WebSocket消息推送？虚拟树？消息分发？",answer:`WebSocket实现：
1. 心跳保活
2. 断线重连
3. 消息队列
4. 多模块分发

虚拟树实现：
1. 只渲染可视节点
2. 节点展开/收起
3. 懒加载子节点

消息分发：
- 订阅发布模式
- 按类型分发
- 模块解耦

已读未读管理：
- 消息状态存储
- 批量更新
- 实时同步`,category:"project",stars:5},{id:8004,title:"应用设计系统",content:"配置化地图组件？OpenLayers封装？低代码设计？",answer:`OpenLayers封装：
1. 组件化封装
2. 配置项设计
3. 事件代理
4. 状态同步

配置项：
- 图层配置
- 样式配置
- 交互配置
- 数据绑定

性能优化：
- 图层懒加载
- 数据聚合
- 视口裁剪

低代码设计：
- 组件拖拽
- 属性配置面板
- 数据源绑定
- 预览发布`,category:"project",stars:4}];var v={categories:E,items:I},V={class:"word-container"},R={class:"word-header"},D={class:"category-tabs"},B=["onClick"],A={class:"theory-section"},H={class:"theory-list"},W=["onClick"],$={class:"theory-header-left"},U={class:"theory-title"},F={key:0,class:"theory-stars"},J={class:"theory-header-right"},L=["onClick"],N={class:"theory-content"},z={key:0,class:"theory-answer"},G=k({__name:"WordTheory",setup(q){const c=O(),f=v.categories,l=d("js"),s=d(new Set),w=t=>{s.value.has(t)?s.value.delete(t):s.value.add(t)},m=t=>{const r=`当前正在复习八股文题目：${t.title}
题目内容：${t.content}`;c.setContext(r),c.openChat(),c.sendMessage(`请帮我详细解释一下这道题目：${t.title}

题目内容：${t.content}`)},b=d(v.items),S=M(()=>b.value.filter(t=>t.category===l.value));return(t,r)=>(o(),a("div",V,[e("div",R,[e("div",D,[(o(!0),a(g,null,h(T(f),n=>(o(),a("button",{key:n.key,class:u(["category-btn",{active:l.value===n.key}]),onClick:p=>l.value=n.key},i(n.label),11,B))),128))])]),e("div",A,[e("div",H,[(o(!0),a(g,null,h(S.value,n=>(o(),a("div",{key:n.id,class:"theory-item"},[e("div",{class:"theory-header group",onClick:p=>w(n.id)},[e("div",$,[e("h3",U,i(n.title),1),n.stars?(o(),a("span",F,i("⭐".repeat(n.stars)),1)):y("",!0)]),e("div",J,[e("button",{class:"btn-circle btn-circle-sm btn-circle-secondary group-hover:opacity-100",onClick:_(p=>m(n),["stop"]),title:"询问AI助手"},[...r[0]||(r[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})],-1)])],8,L),(o(),a("svg",{class:u(["theory-arrow",{rotated:s.value.has(n.id)}]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...r[1]||(r[1]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))])],8,W),e("div",N,i(n.content),1),C(j,{name:"expand"},{default:x(()=>[n.answer&&s.value.has(n.id)?(o(),a("div",z,[r[2]||(r[2]=e("h4",null,"答案：",-1)),e("div",null,i(n.answer),1)])):y("",!0)]),_:2},1024)]))),128))])])]))}}),Y=P(G,[["__scopeId","data-v-06a7e01f"]]);export{Y as default};
