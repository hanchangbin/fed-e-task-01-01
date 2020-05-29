/**
 * 特殊类型
 * @flow
*/
//字面量类型:限制变量必须是某一个值,一般不会单独使用,会配合联合用法组合使用这个值
const a :'foo' = 'foo'
// 联合类型用法:又称或类型,值只能存放三种变量之一
const b: 'success' | 'warning' | 'danger' = 'success'
//也可以用联合类型定义变量的类型
const c: string | number = 100//'100'
//用type关键词给类型别名或者是单独生成一个类型
type stringOrNumber = string | number
const d:stringOrNumber = '122'
//maybe类型 有可能类型,用?表示
const e: ?number =  undefined//null//100