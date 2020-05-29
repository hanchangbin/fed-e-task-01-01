// Symbol

// Symbol(符号)表示一个独一无二的值,主要用于解决对象属性值命名相同引起冲突的问题,Symbol目前最主要的作用就是为对象添加一个独一无二的属性标识符(属性名)

//Symbol是数据类型,独一无二,永远不会重复
const sym = Symbol();
console.log(typeof sym);//数据类型 symbol
console.log(Symbol() === Symbol());//false,Symbol永远是唯一的
//考虑到开发时的调试,Symbol允许我们添加一个字符串作为标识文本,这样对于多次使用Symbol的时候就可以在控制台区分出哪个是对应的Symbol
console.log(Symbol('abc'));//Symbol(abc)
console.log(Symbol('def'));//Symbol(def)
console.log(Symbol('ghi'));//Symbol(ghi)
es2015以前解决对象属性名冲突问题的方式是约定

// share.js
const cache = {}
// a.js
cache['a_foo'] = Math.random()
//b.js
cache['b_foo'] = 123
console.log(cache);//{ a_foo: 0.029474284031667963, b_foo: 123 }
// es2015以后通过symbol解决对象属性名冲突的问题

// share.js
const cache = {}
// a.js
cache[Symbol('foo')] = Math.random()
//b.js
cache[Symbol('foo')] = 123
console.log(cache);//{ [Symbol(foo)]: 0.4502646589114949, [Symbol(foo)]: 123 }
// es2015开始,对象可以使用Symbol作为属性名

const obj = {}
obj[Symbol()] = '123'
obj[Symbol()] = '456'
console.log(obj);//{ [Symbol()]: '123', [Symbol()]: '456' }因为Symbol都是独一无二的,不用担心冲突的问题
// 使用计算属性名的方式,直接在对象字面量中使用Symbol作为属性名
const obj2 = {
	[Symbol()]:'123'
}
console.log(obj2);//{ [Symbol()]: '123' }
// 借助这种特性去模拟实现对象的私有成员,

// 借助这种特性去模拟实现对象的私有成员,
// 所谓私有成员就是指程序内部可以访问,但外部无法直接访问的成员
const name = Symbol();
const person = {
	[name]:'hcb',
	sayName(){
		console.log(this[name]);
		return this[name];
	}
}
const myName = person.sayName();//hcb
console.log(myName);//hcb