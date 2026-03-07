import"./objectSpread2-C5mcNoIF.js";import{E as _,It as a,L as l,Mt as y,P as g,S as u,X as P,f as k,g as w,i as x,rt as d,v as $,x as p,y as t,z as j}from"./index-CJRj6QAw.js";import"./axios-DpqUCHN_.js";import{t as M}from"./ai-yT0eJ9YA.js";const S=[{id:1,title:"防抖函数（带立即执行选项）",description:"实现一个防抖函数，支持立即执行选项。当immediate为true时，第一次触发立即执行。",input:"debounce(func, 500, true)",output:"返回防抖处理后的函数",difficulty:"easy",initialCode:`function debounce(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    // 请在此实现代码
  };
}`},{id:2,title:"节流函数（时间戳版 + 定时器版）",description:"实现节流函数，包括时间戳版和定时器版。时间戳版首次立即执行，定时器版停止触发后还会执行一次。",input:"throttle(func, 500)",output:"返回节流处理后的函数",difficulty:"easy",initialCode:`// 时间戳版
function throttle1(func, wait) {
  let previous = 0;
  return function(...args) {
    const now = Date.now();
    const context = this;
    // 请在此实现代码
  };
}

// 定时器版
function throttle2(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    // 请在此实现代码
  };
}`},{id:3,title:"深拷贝（考虑循环引用）",description:"实现一个深拷贝函数，需要考虑循环引用的情况，以及Date、RegExp、Map、Set等特殊对象。",input:"deepClone(obj)",output:"返回深拷贝后的对象",difficulty:"medium",initialCode:`function deepClone(obj, map = new WeakMap()) {
  // 处理null和非对象类型
  // 处理循环引用
  // 处理Date
  // 处理RegExp
  // 处理Map
  // 处理Set
  // 递归拷贝普通对象
}`},{id:4,title:"实现call/apply/bind",description:"手写实现call、apply、bind方法。bind需要返回一个新函数，且支持柯里化。",input:"fn.myCall(obj, arg1, arg2)",output:"执行函数并返回结果",difficulty:"medium",initialCode:`// 实现call
Function.prototype.myCall = function(context, ...args) {
  // 请在此实现代码
};

// 实现apply
Function.prototype.myApply = function(context, args) {
  // 请在此实现代码
};

// 实现bind
Function.prototype.myBind = function(context, ...args1) {
  // 请在此实现代码
};`},{id:5,title:"实现new操作符",description:"手写实现new操作符的功能。需要完成：创建对象、链接原型、执行构造函数、返回对象。",input:"myNew(Constructor, ...args)",output:"返回新创建的对象",difficulty:"medium",initialCode:`function myNew(Constructor, ...args) {
  // 1. 创建一个新对象
  // 2. 链接到原型
  // 3. 绑定this
  // 4. 返回新对象
}`},{id:6,title:"实现instanceof",description:"手写实现instanceof操作符。判断构造函数的prototype是否在对象的原型链上。",input:"myInstanceof(obj, Constructor)",output:"返回布尔值",difficulty:"easy",initialCode:`function myInstanceof(obj, Constructor) {
  // 请在此实现代码
}`},{id:7,title:"实现Promise.all",description:"手写实现Promise.all方法。所有Promise都成功才成功，任一失败就失败。",input:"myPromiseAll([p1, p2, p3])",output:"返回Promise，结果按顺序排列",difficulty:"medium",initialCode:`function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 请在此实现代码
  });
}`},{id:8,title:"实现Promise.race",description:"手写实现Promise.race方法。返回最先完成的Promise结果。",input:"myPromiseRace([p1, p2, p3])",output:"返回Promise，结果为最快的那个",difficulty:"easy",initialCode:`function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    // 请在此实现代码
  });
}`},{id:9,title:"实现Promise.retry",description:"实现Promise.retry方法，当请求失败时自动重试，最多重试指定次数。",input:"retry(fn, retries, delay)",output:"返回Promise",difficulty:"medium",initialCode:`function retry(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    // 请在此实现代码
  });
}`},{id:10,title:"异步并发控制",description:"实现一个函数，控制异步任务的并发数量。例如同时最多执行3个任务。",input:"concurrencyLimit(tasks, limit)",output:"返回所有任务的结果",difficulty:"hard",initialCode:`function concurrencyLimit(tasks, limit) {
  return new Promise((resolve) => {
    // 请在此实现代码
  });
}`},{id:11,title:"函数柯里化",description:"实现函数柯里化，支持sum(1)(2)(3)和sum(1, 2)(3)等调用方式。",input:"curry(fn)(1)(2)(3)",output:"返回柯里化后的函数",difficulty:"medium",initialCode:`function curry(fn) {
  return function curried(...args) {
    // 请在此实现代码
  };
}

// 测试
const sum = curry((a, b, c) => a + b + c);
console.log(sum(1)(2)(3)); // 6
console.log(sum(1, 2)(3)); // 6`},{id:12,title:"数组扁平化",description:"实现数组扁平化，使用递归和reduce两种方法，支持指定深度。",input:"flatten([1, [2, [3, [4]]]], 2)",output:"[1, 2, 3, [4]]",difficulty:"easy",initialCode:`// 递归实现
function flatten1(arr, depth = 1) {
  // 请在此实现代码
}

// reduce实现
function flatten2(arr, depth = 1) {
  // 请在此实现代码
}`},{id:13,title:"数组去重",description:"实现数组去重，使用Set、reduce、对象三种方法。",input:"unique([1, 2, 2, 3, 3, 3])",output:"[1, 2, 3]",difficulty:"easy",initialCode:`// Set方法
function unique1(arr) {
  // 请在此实现代码
}

// reduce方法
function unique2(arr) {
  // 请在此实现代码
}

// 对象方法
function unique3(arr) {
  // 请在此实现代码
}`},{id:14,title:"对象扁平化",description:"将嵌套对象转为单层对象，键名用点号连接。",input:"flattenObject({ a: { b: { c: 1 } } })",output:"{ 'a.b.c': 1 }",difficulty:"medium",initialCode:`function flattenObject(obj, prefix = '') {
  // 请在此实现代码
}

// 测试
console.log(flattenObject({ a: { b: { c: 1 } } }));
// { 'a.b.c': 1 }`},{id:15,title:"实现EventEmitter",description:"实现一个事件发射器，支持on、off、emit、once方法。",input:"emitter.on('event', fn).emit('event')",output:"触发事件执行回调",difficulty:"medium",initialCode:`class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    // 请在此实现代码
  }

  off(event, callback) {
    // 请在此实现代码
  }

  emit(event, ...args) {
    // 请在此实现代码
  }

  once(event, callback) {
    // 请在此实现代码
  }
}`},{id:16,title:"寄生组合继承",description:"使用ES5实现寄生组合继承，这是最优的继承方式。",input:"Child继承Parent",output:"Child拥有Parent的属性和方法",difficulty:"medium",initialCode:`function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 请实现寄生组合继承
// 1. 创建Parent原型副本
// 2. 修正Child.prototype.constructor
// 3. 将Child.prototype指向副本`},{id:17,title:"发布订阅模式",description:"实现一个简单的发布订阅模式，支持订阅、发布、取消订阅。",input:"pubSub.subscribe('topic', fn)",output:"发布时执行订阅的回调",difficulty:"easy",initialCode:`class PubSub {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, callback) {
    // 请在此实现代码
  }

  publish(topic, ...args) {
    // 请在此实现代码
  }

  unsubscribe(topic, callback) {
    // 请在此实现代码
  }
}`},{id:18,title:"实现lazyMan",description:"实现一个LazyMan类，支持链式调用：LazyMan('Jack').eat('apple').sleep(3).eat('banana')",input:"LazyMan('Jack').sleep(3).eat('dinner')",output:"按顺序执行任务",difficulty:"hard",initialCode:`class LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    // 请在此实现代码
  }

  eat(food) {
    // 请在此实现代码
  }

  sleep(time) {
    // 请在此实现代码
  }

  sleepFirst(time) {
    // 请在此实现代码
  }
}

// 测试
// LazyMan('Jack').eat('apple').sleep(3).eat('banana')
// 输出：
// Hi, I'm Jack
// Eat apple
// (等待3秒)
// Wake up after 3s
// Eat banana`},{id:19,title:"实现模板字符串解析",description:"实现一个函数，解析模板字符串中的变量。例如：parse('Hello ${name}!', { name: 'World' })",input:"parse(template, data)",output:"解析后的字符串",difficulty:"medium",initialCode:`function parse(template, data) {
  // 请在此实现代码
}

// 测试
console.log(parse('Hello \${name}!', { name: 'World' }));
// Hello World!
console.log(parse('\${a} + \${b} = \${a + b}', { a: 1, b: 2 }));
// 1 + 2 = 3`},{id:20,title:"实现JSONP",description:"实现一个JSONP函数，用于跨域请求。",input:"jsonp(url, params, callback)",output:"返回Promise",difficulty:"medium",initialCode:`function jsonp(url, params = {}, callbackName = 'callback') {
  return new Promise((resolve, reject) => {
    // 请在此实现代码
    // 1. 创建script标签
    // 2. 拼接URL和参数
    // 3. 定义全局回调函数
    // 4. 插入DOM
    // 5. 清理
  });
}`}];var E={problems:S},z={class:"word-container"},L={class:"coding-section"},I={class:"coding-layout"},N={class:"problem-list"},W=["onClick"],A={key:0,class:"editor-section"},D={class:"problem-info"},H={class:"problem-info-header"},J={class:"problem-description"},O={key:0,class:"problem-input"},R={key:1,class:"problem-output"},B={class:"editor-container"},F={key:0,class:"code-result"},V=_({__name:"WordCoding",setup(q){const m=M(),r=d(E.problems),f=d(null),s=d(""),c=d(null),n=$(()=>r.value.find(o=>o.id===f.value)||null),v=o=>{f.value=o;const e=r.value.find(i=>i.id===o);s.value=(e==null?void 0:e.initialCode)||"",c.value=null},b=()=>{n.value&&setTimeout(()=>{n.value&&(c.value=`代码运行成功！
输入：${n.value.input||"无"}
输出：${n.value.output||"无"}
你的代码：${s.value}`)},500)},C=()=>{n.value&&(s.value=n.value.initialCode||""),c.value=null},h=()=>{if(!n.value)return;const o=`当前正在练习编程题：${n.value.title}
题目描述：${n.value.description}`;m.setContext(o),m.openChat(),m.sendMessage(`请帮我详细讲解这道编程题：${n.value.title}

题目描述：${n.value.description}

${n.value.input?`输入示例：${n.value.input}`:""}
${n.value.output?`输出示例：${n.value.output}`:""}`)};return g(()=>{r.value.length>0&&r.value[0]&&v(r.value[0].id)}),(o,e)=>(l(),u("div",z,[t("div",L,[t("div",I,[t("div",N,[e[1]||(e[1]=t("h3",null,"题目列表",-1)),(l(!0),u(w,null,j(r.value,i=>(l(),u("div",{key:i.id,class:y(["problem-item",{active:f.value===i.id}]),onClick:T=>v(i.id)},[t("h4",null,a(i.title),1),t("p",{class:y(["problem-difficulty",`difficulty-${i.difficulty}`])},a(i.difficulty==="easy"?"简单":i.difficulty==="medium"?"中等":"困难"),3)],10,W))),128))]),n.value?(l(),u("div",A,[t("div",D,[t("div",H,[t("h3",null,a(n.value.title),1),t("button",{class:"btn-circle btn-circle-md btn-circle-secondary",onClick:h,title:"询问AI助手"},[...e[2]||(e[2]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})],-1)])])]),t("p",J,a(n.value.description),1),n.value.input?(l(),u("p",O,"输入："+a(n.value.input),1)):p("",!0),n.value.output?(l(),u("p",R,"输出："+a(n.value.output),1)):p("",!0)]),t("div",B,[P(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.value=i),class:"code-editor",placeholder:"请在此输入代码...",rows:"15"},null,512),[[k,s.value]]),t("div",{class:"editor-actions"},[t("button",{class:"btn btn-primary",onClick:b},"提交代码"),t("button",{class:"btn btn-secondary",onClick:C},"重置")])]),c.value?(l(),u("div",F,[e[3]||(e[3]=t("h4",null,"运行结果：",-1)),t("pre",null,a(c.value),1)])):p("",!0)])):p("",!0)])])]))}}),Q=x(V,[["__scopeId","data-v-da8cafc7"]]);export{Q as default};
