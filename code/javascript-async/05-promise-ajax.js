// Promise 封装ajax
function ajax(url){
	return new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.open('GET',url);
		xhr.responseType = 'json'
		xhr.onload = function(){
			if(this.state === 200){
				resolve(this.response)
			}else{
				reject(new Error(this.statusText))
			}
		}
		xhr.send()
	})
}
ajax('apis/users.json').then((resolve)=>{
	console.log(resolve)
},(reject)=>{
	console.log(reject)
})