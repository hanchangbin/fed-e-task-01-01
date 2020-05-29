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
  // 回调地狱
  ajax('/api/users.json').then(function (res) {
    ajax('/api/users.json').then(function (res) {
      ajax('/api/users.json').then(function (res) {
        ajax('/api/users.json').then(function (res) {
          ajax('/api/users.json').then(function (res) {
            
          })
        })
      })	
    })
  })
//   以上这种情况嵌套函数没有意义，而且增加了Promise的复杂度