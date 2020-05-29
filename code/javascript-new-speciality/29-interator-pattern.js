//迭代器模式
//场景:你我协同开发一个任务清单
//我的代码==============================
const todos = {
	life:['吃饭','睡觉','打豆豆'],
	learn:['语文','数学','外语'],
	work:['喝茶'],
	// 创建一个统一的遍历接口,调用者就不用关系数据的内部结构是什么样的,更不用担心我的数据结构内部改变后所产生的影响
	each:function(callback){
		const arr = [].concat(this.life,this.learn,this.work)
		for(const item of arr){
			callback(item)
		}
	},
	//创建一个迭代器接口也是一样的,对外提供一个统一的接口
	[Symbol.iterator]:function(){
		let index = 0;
		const arr = [...this.life,...this.learn,...this.work];
		return {
			next:function(){
				return {
					value:arr[index],
					done:index++ >= arr.length
				}
			}
		}
	}
}
//你的代码==============================
// for(const item of todos.life){
// 	console.log(item)
// }
// for(const item of todos.learn){
// 	console.log(item)
// }
// for(const item of todos.work){
// 	console.log(item)
// }
//以上我每增加一个一个属性,你都有增加一个for...of循环,很麻烦
// todos.each((item)=>console.log(item))
// for...of迭代对象
for(const item of todos){
	console.log(item)
}