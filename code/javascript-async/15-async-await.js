// async/await
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
  async function main (){
      try {
          const users = await ajax('/api/users.json');
          console.log('users',users)
          const users01 = await ajax('/api/users01.json');
          console.log('user01',users01)
      }catch(e){
          console.log(e)
      }
  }
  const promise = main()
  console.log(promise)
  promise.then(res=>{
      console.log('all finfish')
  })