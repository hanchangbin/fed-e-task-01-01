// 生成器应用


//案例:发号器
function * createIdMaker(){
	let id = 1;
	while (true){//不用担心会出现不断循环的问题
		yield id++;//yield每执行一次都会暂停函数体
	}
}
const idMaker = createIdMaker();
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
//案例1------------------------------------------------------
const todos = {
	store:['foo','bar','hcb'],
	[Symbol.iterator]:function(){
		let index = 0;
		const store = this.store;
		return {
			next:function(){
				const result = {
					value:store[index],
					done:index++ >= store.length
				}
				return result;
			}
		}
	}
}
for(const item of todos){
	console.log(item)
}
// ----------------------------
// 使用Generator替换next函数
const todos = {
	store:['foo','bar','hcb'],
	[Symbol.iterator]:function * (){
		const store = this.store;
		for(const item of store){
			yield item
		}
		
	}
}
for(const item of todos){
	console.log('todos',item)
}
// 案例2------------------------------------------------------------
const libarys = {
	life:['吃饭','睡觉','打豆豆'],
	learn:['上课','读书','学新技术'],
	work:['业务','开会'],
	[Symbol.iterator]:function *(){
		const arr = [...this.life,...this.learn,...this.work];
		for(const item of arr){
			yield item
		}
	}
}
for(const item of libarys){
	console.log('libary',item)
}