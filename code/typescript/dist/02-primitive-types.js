/**
 * 原始数据类型
*/
// 非严格模式下string number boolean都允许为空为null,严格模式下是不 允许的
//在tsconfig中我们可以设置"strictNullChecks": true,启用严格的空检查。  
const a = 'hcb';
const b = 100;
const c = true;
//void在非严格模式下能够为undefined或null,在严格模式下只能为undefined
const d = undefined; // undefined
const e = null;
const f = undefined;
const syb = Symbol(); //这里用Symbol会报错这是为啥呢?
// const err:string = 11
//# sourceMappingURL=02-primitive-types.js.map