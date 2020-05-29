// Object.assign
// const source1 = {
// 	a:123,
// 	b:456
// }
// const source2 = {
// 	b:147,
// 	d:555
// }
// const target = {
// 	a:456,
// 	c:789
// }
// const result = Object.assign(target,source1,source2);//相同属性后面的对象会覆盖前面的对象
// console.log(target);//{ a: 123, c: 789, b: 147, d: 555 }

// console.log(target === result);//true

// -----------------------------------------
// function func(obj){
// 	// obj.name = 'hcb';//在函数中修改对象的属性值,那外界的对象也会发生变化,因为他们都指向同一个内存地址,也就是同一个数据
// 	const funcObj = Object.assign({},obj);//复制对象后就是一个全新的对象,修改的数据不会修改源对象的内存地址的数据
// 	funcObj.name = 'hcb';
// 	console.log(funcObj)
// }
// const obj = {name:'ddc'};
// func(obj);//{ name: 'hcb' }
// console.log(obj);//{ name: 'ddc' }

// --------------------------------------------

// 浅拷贝
const obj  = {a:{a:'ccc'},b:123};
const obj2 = Object.assign({},obj);
obj2.a.a = 'ddd';
console.log(obj);//{ a: { a: 'ddd' }, b: 123 }
//深拷贝
const nObj = {a:'hcb',b:24};
 const nObj2 = Object.assign({},nObj);
 nObj2.a = 'dg';
 console.log(nObj);//{ a: 'hcb', b: 24 }