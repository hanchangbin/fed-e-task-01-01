// 执行时序
// 微任务
console.log('start')
setTimeout(function(){
	console.log('settimeout')
},0)
Promise.resolve()
.then(res=>console.log('promise1'))
.then(res=>console.log('promise2'))
console.log('end')