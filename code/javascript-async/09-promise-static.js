// 静态方法
Promise.resolve()

// 快速把一个值转换成Promise对象

Promise.resolve('fpp').then(res=>console.log(res));//fpp
// 等同于

new Promise((resolve,reject)=>resolve('fpp')).then(res=>console.log(res));//fpp
// 通过Promise.resolve包装一个Promise对象，得到的是原本的Promise对象

const promise01 = ajax('/api/users.json');
const promise02 = Promise.resolve(promise01);
console.log(promise01 === promise02);//true
// 特殊情况：如果传入一个对象，这个对象也有then方法，包含resolve和reject两个参数，那么这个对象也可以被当作Promise对象去执行

Promise.resolve({
	then(onFullfilled,onRejected){
		onFullfilled('foo')
	}
}).then(function (resolve) {
  console.log(resolve);//foo
})

// 这种特殊的情况可以把第三方的then方法转成promise对象

Promise.reject()

// 快速创建失败的Promise对象，传入的数据是失败的理由