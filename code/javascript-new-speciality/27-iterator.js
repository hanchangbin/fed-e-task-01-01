// 迭代器Iterator
const s = new Set(['foo','bar','hcb']);
const iterator = s[Symbol.iterator]();//调用set对象的迭代方法,获取迭代器对象
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

/**
 * 返回结果:
 * { value: 'foo', done: false }
 * { value: 'bar', done: false }
 * { value: 'hcb', done: false }
 * { value: undefined, done: true }
 * { value: undefined, done: true }
**/
//其实这就是for...of循环的工作原理