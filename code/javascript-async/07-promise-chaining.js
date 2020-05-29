// 链式调用
// Promise内部会返回一个Promise对象，并且返回的对象是一个新的Promise对象，其目的是实现一个链条，表示一个承诺过后会返回一个新的承诺，每个承诺可以负责一个异步任务，并且相互之间没有任何影响

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
// ajax('/api/users.json').then(function (res) {
//   console.log(111111)
// }) .then(function (res) {
//   console.log(222222)
// }) .then(function (res) {
//   console.log(333333)
// }) .then(function (res) {
//   console.log(444444)
// }) .then(function (res) {
//   console.log(555555)
// }) .then(function (res) {
//   console.log(666666)
// }) 

ajax('/api/users.json').then(function (res) {
    console.log(111111)
    console.log(res)
    return ajax('/api/users01.json')
  }) .then(function (res) {
    console.log(222222)
    console.log(res)
    return ajax('/api/users02.json')
  }) .then(function (res) {
    console.log(333333)
    console.log(res)
  })