/**
 * 原始数据类型
*/
// 非严格模式下string number boolean都允许为空为null,严格模式下是不 允许的
//在tsconfig中我们可以设置"strictNullChecks": true,启用严格的空检查。  
const a:string = 'hcb'
const b:number = 100
const c:boolean =  true
//void在非严格模式下能够为undefined或null,在严格模式下只能为undefined
const d:void = undefined // undefined
const e: null = null
const f:undefined = undefined
const syb:symbol = Symbol();//这里用Symbol会报错这是为啥呢?
// const err:string = 11