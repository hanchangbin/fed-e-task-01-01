// 并行执行
// 如果 多个接口相互之间没有依赖，我们可以一起请求，可以减少消耗的时间

Promise.all()

// Promise.all会等待所有的Promise都结束才会执行

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
Promise.all([
	ajax('/api/users.json'),
	ajax('/api/users01.json')
])//，两个任务都成功了才会返回到then方法，成功返回包含两个Promise对象结果的数组
.then(resolve=>console.log(resolve))
.catch(error=>console.log(error))//如果两个任务有一个失败了,另外一个也以失败结束
串行和并行相结合
ajax('/api/url.json').then((res)=>{
	const urls = Object.values(res)
	const arr = [];
	urls.map((v,i,a)=>{
		arr.push(ajax(v))
	}) 
	return Promise.all(arr)
})
.then(resolve=>console.log(resolve))
.catch(error=>console.log(error))

//----------------------------------
Promise.race()

// 跟着所有完成的任务中第一个完成任务的一起结束

const a = ajax('/api/users.json');
const b = new Promise(function(resolve,reject){
	setTimeout(function(){
		reject(new Error('异常'))
	},500)
})

Promise.race([
	a,
	b
])
.then(resolve=>console.log(resolve))
.catch(error=>console.log(error))
//注意：通过network的online调成show 3G查看
