// 可以用yield暂停生成器函数的一个特点来实现更优的异步编程体验

function ajax (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}
function * main (){
	const users = yield ajax('/api/users.json');
	console.log('users',users)
	const users01 = yield ajax('/api/users01.json');
	console.log('user01',users01)
}
const generator = main();
const result = generator.next();//拿到ajax请求结果
console.log(result);//{value: Promise, done: false}
const { value,done } = result;//获取请求ajax返回的promise对象


value.then((data)=>{
	// 将ajax得到的值传递给main方法的users
	const {value,done} = generator.next(data);//以此类推
	console.log('done2',done)
	if(done) return;
	value.then((data)=>{
		// 将ajax得到的值传递给main方法的users
		const {value,done} = generator.next(data);
		console.log('done3',done)
		if(done) return
		value.then((data)=>{
			// 将ajax得到的值传递给main方法的users
			const {value,done} = generator.next(data);
			console.log('done4',done)
			
		})
		
		})
	
})


// 这种异步编程体验，对于promise内部彻底消灭了promise的回调，有一种近乎于同步代码的体验