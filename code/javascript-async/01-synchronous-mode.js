// 同步执行顺序 
//顺序0:首先会加载整体代码,在调用栈中压入一个匿名函数调用 
console.log('start');//顺序1
function bar(){
	console.log('bar');//顺序3
}
function foo(){
	console.log('foo');//顺序2
	bar()
}
foo()
console.log('end');//顺序4

// start
// foo
// bar
// end