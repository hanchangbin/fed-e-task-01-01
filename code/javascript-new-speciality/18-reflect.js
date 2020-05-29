// Reflect

// const person = {
// 	name:'hcb',
// 	age:24
// }
// const personProxy = new Proxy(person,{})
// // 相当于
// const personProxy2 = new Proxy(person,{
// 	get(target,property){
// 		return Reflect.get(target,property)
// 	},
// 	set(target,property,value){
// 		Reflect.set(target,property,value)
// 	}
// })
// personProxy.name = 'tom';
// console.log(personProxy.name,personProxy2.name)

// -----------------------------------------------------
//按照传统方式-方法不统一
// const obj = {
// 	name:'hcb',
// 	age:24,
// 	sex:'男'
// }
// console.log('name' in obj);//判断对象是否有这个属性名---操作符方式
// console.log(delete obj['age']);//删除对象的这属性名--对象中的方法
// console.log(Object.keys(obj));//获取当前对象的所有属性名
//-------------------------------------
//es2015做法
const person = {
	name:'bg',
	age:27,
	sex:'男'
}
console.log(Reflect.has(person,'name'));//判断当前对象是否有这个属性
console.log(Reflect.deleteProperty(person,'age'));//删除当前对象的属性
console.log(Reflect.ownKeys(person));//获取当前对象的所有属性名