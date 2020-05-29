/**
 * 对象类型
 * @flow
*/
//限制变量是对象类型使用{}
// 设置固定的键和值的类型,对象就必须有这些成员
const obj1 : {boo:string,coo:number} = {boo:'cc',coo:123}
// ?表示这个成员可有可无
const obj2 :{boo?:string,coo:number} = {coo:123}
// 设置任意成员的键值对类型,设置成什么类型就必须是什么类型
const obj3:{[string]:string} = {}
// obj3.key1 = 123;//Cannot assign `123` to `obj3.key1` because  number [1] is incompatible with  string [2].
obj3.key1 = 'abc'
obj3.key2 = 'def'