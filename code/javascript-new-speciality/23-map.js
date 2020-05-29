// Map


// Map的数据结构和对象有所类似,本质上都是键值对集合,但是对象的键只能是字符串类型,而Map的键可以是任意类型

const obj = {};
obj[true] = 'value';
obj[132] = 'value';
obj[{a:1}] = 'value';
console.log(Object.keys(obj));//[ '132', 'true', '[object Object]' ],所有键都被转换成了字符串
// Map是严格意义上的键值对集合,用来去映射两个任意类型数据之间的对应关系

const m = new Map();//创建Map实例
const hcb = {name:'hcb'};
m.set(hcb,18);
m.set(123,456)
console.log(m);//Map { { name: 'hcb' } => 18 }
console.log(m.get(hcb));//获取指定键的值
console.log(m.has(hcb));//判断某个键是否存在
console.log(m.delete(hcb));//删除Map中指定的键值
m.clear();//清空所有键值
console.log(m)
// 遍历Map用forEach方法
m.forEach((value,key)=>{
	console.log(value,key)
})