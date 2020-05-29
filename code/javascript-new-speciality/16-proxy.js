// Proxy 对象
const person = {
	name:'hcb',
	age:24
}
// 创建Proxy代理对象,第一个参数:代理的目标对象,第二个参数:代理的处理对象
const ProxyPerson = new Proxy(person,{
	get(target,property){//监听代理对象调用属性名,第一个参数:代理的目标对象,第二个参数:外部访问时访问的属性名
	console.log(target,property);
	//正确的做法是先去判断代理对象是否存在这样一个属性,如果存在就返回值,如果不存在就返回undefined
	return property in target ? target[property] : undefined
	},
	set(target,property,value){//三个参数:代理目标对象,写入的属性名称,写入的属性值
		console.log(target,property,value);
		// 先进行校验
		if(property === 'age'){
			if(!Number.isInteger(value)){//当属性名是age时,判断一下值是否是int型,不是就报错
				throw new TypeError(`${value} is not an int`)
			}
		}
		//为代理目标设置属性名和属性值
		target[property] = value;
	}
})
// 通过代理对象为person写入一个真的属性
ProxyPerson.gender = true;
// ProxyPerson.age = '444';//set函数就会报错
ProxyPerson.age = 444;
console.log(ProxyPerson.name);//hcb
console.log(ProxyPerson.cc);//undefined