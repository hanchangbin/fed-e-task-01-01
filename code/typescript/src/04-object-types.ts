//Object类型
export {}
// typescript中的对象类型不单指普通对象,更包括数组和函数
const foo:object = function(){}//[]//{}
// 需要普通对象类型,要用对象字面量语法去声明
const obj: {foo:string,bar:number} = {foo:'hcb',bar:123}