import"./objectSpread2-C5mcNoIF.js";import{E as g,It as a,L as l,Mt as y,P as b,S as s,X as P,f as w,g as k,i as x,rt as d,v as $,x as f,y as t,z as S}from"./index-BGrokQk7.js";import"./axios-4jfLCSor.js";import{t as E}from"./ai-B-eJI7cg.js";var B={class:"word-container"},q={class:"coding-section"},I={class:"coding-layout"},M={class:"problem-list"},A=["onClick"],V={key:0,class:"editor-section"},j={class:"problem-info"},z={class:"problem-info-header"},N={class:"problem-description"},T={key:0,class:"problem-input"},D={key:1,class:"problem-output"},W={class:"editor-container"},H={key:0,class:"code-result"},L=g({__name:"WordCoding",setup(F){const p=E(),o=d([]),v=d(null),r=d(""),c=d(null),n=$(()=>o.value.find(u=>u.id===v.value)||null),m=u=>{v.value=u;const e=o.value.find(i=>i.id===u);r.value=(e==null?void 0:e.initialCode)||"",c.value=null},_=()=>{n.value&&setTimeout(()=>{n.value&&(c.value=`代码运行成功！
输入：${n.value.input||"无"}
输出：${n.value.output||"无"}
你的代码：${r.value}`)},500)},h=()=>{n.value&&(r.value=n.value.initialCode||""),c.value=null},C=()=>{if(!n.value)return;const u=`当前正在练习编程题：${n.value.title}
题目描述：${n.value.description}`;p.setContext(u),p.openChat(),p.sendMessage(`请帮我详细讲解这道编程题：${n.value.title}

题目描述：${n.value.description}

${n.value.input?`输入示例：${n.value.input}`:""}
${n.value.output?`输出示例：${n.value.output}`:""}`)};return b(()=>{o.value=[{id:1,title:"防抖（带立即执行选项）",description:"实现一个防抖函数，支持立即执行选项。",input:`function debounce(func, wait, immediate) {
  // 请在此实现代码
}`,output:"返回一个防抖处理后的函数",difficulty:"easy",initialCode:`function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    // 请在此实现代码
  };
}`},{id:2,title:"节流（时间戳版 + 定时器版）",description:"实现节流函数，包括时间戳版和定时器版。",input:`// 时间戳版
function throttle1(func, wait) {
  // 请在此实现代码
}

// 定时器版
function throttle2(func, wait) {
  // 请在此实现代码
}`,output:"返回一个节流处理后的函数",difficulty:"easy",initialCode:`// 时间戳版
function throttle1(func, wait) {
  let previous = 0;
  return function() {
    const now = Date.now();
    const context = this;
    const args = arguments;
    // 请在此实现代码
  };
}

// 定时器版
function throttle2(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    // 请在此实现代码
  };
}`},{id:3,title:"深拷贝（考虑循环引用）",description:"实现一个深拷贝函数，考虑循环引用的情况。",input:`function deepClone(obj) {
  // 请在此实现代码
}`,output:"返回一个深拷贝后的对象",difficulty:"medium",initialCode:`function deepClone(obj, map = new Map()) {
  // 请在此实现代码
}`},{id:4,title:"Promise.all（手写）",description:"手写实现Promise.all方法。",input:`function promiseAll(promises) {
  // 请在此实现代码
}`,output:"返回一个Promise，当所有输入Promise都解决时解决",difficulty:"medium",initialCode:`function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 请在此实现代码
  });
}`},{id:5,title:"数组扁平化（递归 + reduce）",description:"实现数组扁平化，使用递归和reduce两种方法。",input:`// 递归法
function flatten1(arr) {
  // 请在此实现代码
}

// reduce法
function flatten2(arr) {
  // 请在此实现代码
}`,output:"返回一个扁平化后的数组",difficulty:"easy",initialCode:`// 递归法
function flatten1(arr) {
  // 请在此实现代码
}

// reduce法
function flatten2(arr) {
  // 请在此实现代码
}`},{id:6,title:"数组去重（Set + reduce + 对象）",description:"实现数组去重，使用Set、reduce和对象三种方法。",input:`// Set法
function unique1(arr) {
  // 请在此实现代码
}

// reduce法
function unique2(arr) {
  // 请在此实现代码
}

// 对象法
function unique3(arr) {
  // 请在此实现代码
}`,output:"返回一个去重后的数组",difficulty:"easy",initialCode:`// Set法
function unique1(arr) {
  // 请在此实现代码
}

// reduce法
function unique2(arr) {
  // 请在此实现代码
}

// 对象法
function unique3(arr) {
  // 请在此实现代码
}`},{id:7,title:"类型判断（typeof + instanceof + Object.prototype.toString）",description:"实现一个更准确的类型判断函数。",input:`function getType(value) {
  // 请在此实现代码
}`,output:"返回值的具体类型字符串",difficulty:"easy",initialCode:`function getType(value) {
  // 请在此实现代码
}`},{id:8,title:"事件总线（Event Bus，on/emit/off）",description:"实现一个事件总线，支持on、emit、off方法。",input:`class EventBus {
  constructor() {
    // 请在此实现代码
  }
  
  on(event, callback) {
    // 请在此实现代码
  }
  
  emit(event, ...args) {
    // 请在此实现代码
  }
  
  off(event, callback) {
    // 请在此实现代码
  }
}`,output:"返回一个事件总线实例",difficulty:"easy",initialCode:`class EventBus {
  constructor() {
    // 请在此实现代码
  }
  
  on(event, callback) {
    // 请在此实现代码
  }
  
  emit(event, ...args) {
    // 请在此实现代码
  }
  
  off(event, callback) {
    // 请在此实现代码
  }
}`},{id:9,title:"柯里化（sum(1)(2)(3)）",description:"实现一个柯里化函数，支持sum(1)(2)(3)的调用方式。",input:`function curry(func) {
  // 请在此实现代码
}

// 测试
const sum = curry((a, b, c) => a + b + c);
sum(1)(2)(3); // 6`,output:"返回一个柯里化后的函数",difficulty:"medium",initialCode:`function curry(func) {
  // 请在此实现代码
}

// 测试
const sum = curry((a, b, c) => a + b + c);
sum(1)(2)(3); // 6`},{id:10,title:"寄生组合继承（ES5）",description:"使用ES5实现寄生组合继承。",input:`// 父类
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

// 子类
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 请实现寄生组合继承
// 使Child继承Parent的原型方法`,output:"Child继承Parent的属性和方法",difficulty:"medium",initialCode:`// 父类
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

// 子类
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 请实现寄生组合继承
// 使Child继承Parent的原型方法`}],o.value.length>0&&o.value[0]&&m(o.value[0].id)}),(u,e)=>(l(),s("div",B,[t("div",q,[t("div",I,[t("div",M,[e[1]||(e[1]=t("h3",null,"题目列表",-1)),(l(!0),s(k,null,S(o.value,i=>(l(),s("div",{key:i.id,class:y(["problem-item",{active:v.value===i.id}]),onClick:O=>m(i.id)},[t("h4",null,a(i.title),1),t("p",{class:y(["problem-difficulty",`difficulty-${i.difficulty}`])},a(i.difficulty==="easy"?"简单":i.difficulty==="medium"?"中等":"困难"),3)],10,A))),128))]),n.value?(l(),s("div",V,[t("div",j,[t("div",z,[t("h3",null,a(n.value.title),1),t("button",{class:"btn-circle btn-circle-md btn-circle-secondary",onClick:C,title:"询问AI助手"},[...e[2]||(e[2]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})],-1)])])]),t("p",N,a(n.value.description),1),n.value.input?(l(),s("p",T,"输入："+a(n.value.input),1)):f("",!0),n.value.output?(l(),s("p",D,"输出："+a(n.value.output),1)):f("",!0)]),t("div",W,[P(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=i=>r.value=i),class:"code-editor",placeholder:"请在此输入代码...",rows:"15"},null,512),[[w,r.value]]),t("div",{class:"editor-actions"},[t("button",{class:"btn btn-primary",onClick:_},"提交代码"),t("button",{class:"btn btn-secondary",onClick:h},"重置")])]),c.value?(l(),s("div",H,[e[3]||(e[3]=t("h4",null,"运行结果：",-1)),t("pre",null,a(c.value),1)])):f("",!0)])):f("",!0)])])]))}}),J=x(L,[["__scopeId","data-v-15d1ff8a"]]);export{J as default};
