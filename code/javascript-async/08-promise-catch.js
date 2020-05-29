// 异常处理


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
// 1.rejected回调

// 只能捕获到当前Promise对象的异常
ajax('/api/usersc.json').then(function (resolve) {
  console.log(resolve)
 
},function(reject){
	console.log('异常结果',reject)
	return ajax('/error-url')
})

// 2.catch方法
ajax('/api/usersc.json').then(function (resolve) {
    console.log(resolve)
   
  }).catch(undefined,function(error){
          console.log(error)
      })

ajax('/api/users.json').then(function (resolve) {
console.log(resolve)
    return ajax('/error-url')
}).catch(undefined,function(error){
        console.log(error)
    })


//--------------------------------------

// unhandledrejection 用于处理一些没有被手动捕获的异常 在浏览器注册window上面，在node，注册在process上面

window.addEventListener("unhandledrejection", event => {
  const {reason,promise} = event;
  console.log(reason,promise)
  // reason失败的原因--一般是错误的对象
  // promise:错误的promise对象
});

process.on("unhandleRrejection", (reason,promise) => {
 
  console.log(reason,promise)
  // reason失败的原因--一般是错误的对象
  // promise:错误的promise对象
});
