// 回调函数
function foo (callback){
	setTimeout(function(){
		callback()
	})
}
foo(function(){
	console.log('这是回调函数')
	console.log('调用者定义这个函数,执行者执行这个函数')
	console.log('其实就是调用者告诉执行者异步任务结束时应该做什么')
})