// generator执行流程

function * foo () {
	try {
		console.log('foo')
		const res = yield 'foo';
		console.log(res);//res能通过next方法传递参数的方式传递进来值
	}catch(e){
		console.log(e)
	}
}
const generator = foo();
const result = generator.next();
console.log(result)
const result2 = generator.next('bar');
console.log(result2)
generator.throw(new Error('异常'))