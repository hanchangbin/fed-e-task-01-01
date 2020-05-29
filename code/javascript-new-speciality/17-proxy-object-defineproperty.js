// //Proxy更好的支持数组对象的监视,defineProperty常见数组用法就是重写数组的操作方式指通过自定义的方式去覆盖掉数组的原型对象的push等方法,以此来劫持对应这个方法调用的过程
// //如何用Proxy对象对数组进行监视
// const list = [];
// const listProxy = new Proxy(list,{
// 	set(target,property,value){//三个参数:目标对象,数组下标,设置的值
// 		console.log('set',property,value);
// 		target[property] = value;
// 		return true;//表示设置成功
// 	}
// })
// listProxy.push(10);//set 0 10.表示Proxy可以根据push操作推算出来当前添加的值所处的下标,并对整个目标数组进行调整设置
// // listProxy.splice(0,0,9)
// /**
//  * set 1 10
//  * set 0 9
//  * set length 2
//  * */
// listProxy.splice(1,0,9)
// /**
//  * set 1 9
//  * set length 2
//  * */
// console.log(list);//[ 10, 9 ]
// //Proxy以非侵入的方式监管了对象的读写
// //也就是对一个已经定义的对象,Proxy不需要对象本身进行任何的操作就可以监视到对象的读写

// const person = {
// 	name:'hcb',
// 	age:24
// }
// const personProxy = new Proxy(person,{
// 	get(target,property){
// 		return target[property]
// 	},
// 	set(target,property,value){
// 		target[property] = value;
// 	}
// })
// personProxy.name = 'tom';
// console.log(personProxy.name)
// ------------------------------------------------------------------------------------------------------
//而Object.definePropert需要用特定的方式单独去定义那些需要被监视的属性,对于一个已经存在的属性,需要做很多额外的操作

// Object.defineProperty以入侵的方式监管对象的读写
const person = {}
Object.defineProperty(person,'name',{
	get(){
		console.log('name 被访问')
		return person._name
	},
	set(value){
		console.log('name 被设置')
		person._name = value;
	}
})
Object.defineProperty(person,'age',{
	get(){
		console.log('age 被访问')
		return person._age
	},
	set(value){
		console.log('age 被设置')
		person._age = value;
	}
})

person.name = 'hcb';
console.log(person,person.name);//{ _name: 'hcb' } hcb