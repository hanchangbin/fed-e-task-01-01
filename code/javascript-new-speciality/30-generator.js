// 生成器

// 定义生成器函数就是在普通的function后面跟一个*号

function * foo(){
	console.log(1111)
	yield 100
	console.log(2222)
	yield 200
	console.log(3333)
	yield 300
}
const generator = foo();//生成器函数会帮我们返回一个生成器对象,调用这个生成器对象的next方法才会让这个函数的函数体开始执行,在执行过程中一旦遇到yield关键词,函数就会暂停下来,而且yield后面的值将会作为函数的结果返回,如果继续调用next方法,函数就会从暂停的位置继续执行,周而复始一直到这个函数完全结束,next方法返回的done的值也会变成true
// 普通函数会先打印hcb再打印generator,但是生成器函数只打印出一个Generator对象
console.log(generator);
console.log(generator.next());//打印一次出现一次说明函数yield后面的语句还没有执行,因为如果执行力它就会把后面全部打印出来
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
/**
 * Object [Generator] {}
 * 1111
 * { value: 100, done: false }
 * 2222
 * { value: 200, done: false }
 * 3333
 * { value: 300, done: false }
 * { value: undefined, done: true }
 * */
 