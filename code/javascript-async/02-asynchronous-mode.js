// 异步执行顺序
//顺序0:首先会加载整体代码,在调用栈中压入一个匿名函数调用 
console.log('start');//顺序1
// 遇到异步调用,放在web apis中执行
setTimeout(function timer1 (){//注意倒计时器是单独工作的并不受我们的js线程影响
	console.log('timer1');//顺序4
},1800)
setTimeout(function timer1 (){
	console.log('timer2');//顺序3
	setTimeout(function timer1 (){
		console.log('timer3');//顺序5
	},1000)
	
},1000)
console.log('end');//顺序2
// start
// end
// timer2
// timer1
// timer3
