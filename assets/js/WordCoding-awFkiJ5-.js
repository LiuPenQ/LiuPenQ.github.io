import{$t as d,Bt as h,Ct as f,Dn as m,Ft as C,Ot as g,Rt as o,Yt as b,bt as P,ht as k,jn as a,ut as w,vt as x,wt as l,xt as n}from"./index-DXNxgZka.js";var S={class:"word-container"},B={class:"coding-section"},E={class:"coding-layout"},q={class:"problem-list"},$=["onClick"],j={key:0,class:"editor-section"},D={class:"problem-info"},N={class:"problem-description"},T={key:0,class:"problem-input"},M={key:1,class:"problem-output"},V={class:"editor-container"},W={key:0,class:"code-result"},A=g({__name:"WordCoding",setup(F){const u=d([]),p=d(null),s=d(""),r=d(null),t=P(()=>u.value.find(c=>c.id===p.value)||null),v=c=>{p.value=c;const i=u.value.find(e=>e.id===c);s.value=(i==null?void 0:i.initialCode)||"",r.value=null},y=()=>{t.value&&setTimeout(()=>{t.value&&(r.value=`代码运行成功！
输入：${t.value.input||"无"}
输出：${t.value.output||"无"}
你的代码：${s.value}`)},500)},_=()=>{t.value&&(s.value=t.value.initialCode||""),r.value=null};return C(()=>{u.value=[{id:1,title:"防抖（带立即执行选项）",description:"实现一个防抖函数，支持立即执行选项。",input:`function debounce(func, wait, immediate) {
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
// 使Child继承Parent的原型方法`}],u.value.length>0&&u.value[0]&&v(u.value[0].id)}),(c,i)=>(o(),l("div",S,[n("div",B,[n("div",E,[n("div",q,[i[1]||(i[1]=n("h3",null,"题目列表",-1)),(o(!0),l(x,null,h(u.value,e=>(o(),l("div",{key:e.id,class:m(["problem-item",{active:p.value===e.id}]),onClick:I=>v(e.id)},[n("h4",null,a(e.title),1),n("p",{class:m(["problem-difficulty",`difficulty-${e.difficulty}`])},a(e.difficulty==="easy"?"简单":e.difficulty==="medium"?"中等":"困难"),3)],10,$))),128))]),t.value?(o(),l("div",j,[n("div",D,[n("h3",null,a(t.value.title),1),n("p",N,a(t.value.description),1),t.value.input?(o(),l("p",T,"输入："+a(t.value.input),1)):f("",!0),t.value.output?(o(),l("p",M,"输出："+a(t.value.output),1)):f("",!0)]),n("div",V,[b(n("textarea",{"onUpdate:modelValue":i[0]||(i[0]=e=>s.value=e),class:"code-editor",placeholder:"请在此输入代码...",rows:"15"},null,512),[[k,s.value]]),n("div",{class:"editor-actions"},[n("button",{class:"btn btn-primary",onClick:y},"提交代码"),n("button",{class:"btn btn-secondary",onClick:_},"重置")])]),r.value?(o(),l("div",W,[i[2]||(i[2]=n("h4",null,"运行结果：",-1)),n("pre",null,a(r.value),1)])):f("",!0)])):f("",!0)])])]))}}),R=w(A,[["__scopeId","data-v-43558712"]]);export{R as default};
