// Promise 基本示例
const promise = new Promise(function(resolve,reject){
	// 这里用于兑现承诺
	// resolve('200');//承诺达成
	reject(new Error('Promise rejected'));//承诺失败
})
promise.then(function(value){
	console.log('resolved',value)
},function(error){
	console.log('rejected',error)
})
console.log('end')
// 需要注意的是,即便Promise当中没有任何的异步操作,
// then方法指定的回调函数仍然会在回调队列中排队,
// 也就是说这里需要等同步代码执行完了才回去执行