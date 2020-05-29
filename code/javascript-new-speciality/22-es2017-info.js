//ECMAscript2017
const obj = {
	foo:'value1',
	bar:'value2'
}
//Object.values --------------------------------------------
// 返回对象的所有属性值
console.log(Object.values(obj));//[ 'value1', 'value2' ]
//Object.entries (恩吹斯)--------------------------------------------
// 以数组的形式返回对象的键值对,可以配合for...of遍历
console.log(Object.entries(obj));//[ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]
for(const [key,value] of Object.entries(obj)){
	console.log(key,value)
}
/**
 * foo value1
 *bar value2
 * */
 // Map函数需要的 就是[ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]这种格式的数组,所以可以借助Object.entries将对象转换成Map类型的对象
 console.log(new Map(Object.entries(obj)));//Map { 'foo' => 'value1', 'bar' => 'value2' }

//Object.getOwnPropertyDescriptors --------------------------
// 获取对象当中属性的完整描述信息,主要配合es2015的get,set使用
const p1 = {
	a:123,
	b:456,
	get sum(){
		return this.a + this.b
	}
}
// console.log('sum',p1.sum);//sum 579
// const p2 = Object.assign({},p1);
// p2.a = 4
// console.log('sum',p2.sum);//sum 579
// 为什么p2的sum的值没有改变的呢?这是因为object.assign在复制对象时把sum当成普通的属性去对待了,所以才会出现这种情况,
// 我们可以使用Object.getOwnPropertyDescriptors属性获取对象的信息
const descriptors = Object.getOwnPropertyDescriptors(p1);
console.log('descriptors',descriptors)
// Objct.defineProperties将对象信息定义到一个新的对象当中
const p2 = Object.defineProperties({},descriptors)
p2.a = 789;
console.log(p2.sum)
// String.prototype.padStart / String.prototype.padEnd --------------------
// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padStart(4, 'ab') // 'abax'

// 'x'.padEnd(5, 'ab') // 'xabab'
// 'x'.padEnd(4, 'ab') // 'xaba'
// 上面代码中，padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。

// 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
const books = {
	a:5,
	b:16,
	c:118
}
for(const [name,count] of Object.entries(books)){
	console.log(`${name.padEnd(16,'-')}|${count.toString().padStart(3,'0')}`)
}

// 这两个属性的效果就是用给定的字符串去填充目标字符串的开始或结束的位置,知道我们的计算达到指定长度为止
// 函数参数中添加尾逗号
function foo(
	name,
	age,
){
	
}
// Async / Await解决异步函数嵌套过深的问题,本质上是使用promise的语法糖