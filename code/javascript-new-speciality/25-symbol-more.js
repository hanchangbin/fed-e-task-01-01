// Symbol补充


// Symbol的唯一性
//不管Symbol传入的值是否相同,Symbol都是不相等的
console.log(
	Symbol('foo') === Symbol('foo')
);//false
// 如果想在全局复用一个相同的Symbol值,可以使用全局变量的方式实现,或者使用Symbol类型提供的静态方法实现

//Symbol.for()方法可以接收一个字符串作为参数,相同的字符串就一定会返回相同的Symbol类型的值
// 这个方法内部维护了一个全局注册表,为我们的字符串和Symbol值提供了一个一一对应的关系
const s1 = Symbol.for('foo');
const s2 = Symbol.for('foo');
console.log(s1,s2,s1 === s2);//Symbol(foo) Symbol(foo) true
// 需要注意的是,在这个方法之中维护的是字符串和Symbol直接的对应关系,也就是说如果我们传入的不是字符串,那这个方法会把它转化成字符串,如下
console.log(
	Symbol.for(true) === Symbol.for('true')
);//true
// Symbol的属性
// 而且在Symbol当中提供了很多内置的Symbol常量属性,用来去作为内部方法的标识,这些标识符可以让自定义对象去实现js的内置接口
console.log(Symbol.iterator);//Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用。
console.log(Symbol.hasInstance)//Symbol.hasInstance用于判断某对象是否为某构造器的实例。因此你可以用它自定义 instanceof 操作符在某个类上的行为。

const obj = {}
// console.log(obj.toString());//[object Object]==>Object叫做对象的自定义标签
// 用Symbol去修改标签
const obj2 = {
	[Symbol.toStringTag]:'XObject'
};
// console.log(obj2.toString());//[object XObject]
// 通过Symbol值作为属性名的一些特性
const obj3 = {
	[Symbol()]:'symbol value',
	foo:'normal value'
}
// 1.在for...in中是无法拿到的,
for(let key in obj3){
	console.log(key)
}
// 2.通过Object.keys()方法也获取不到Symbol值属性名
console.log(Object.keys(obj3));//[ 'foo' ]
// 3.通过JSON.stringify序列化对象为的字符串的情况下,symbol值的属性也会被忽略掉
console.log(JSON.stringify(obj3));//{"foo":"normal value"}
// 总之以上特性使得Symbol值特别适合作为对象的私有属性
// 当然想要获取到Symbol值属性名也是有方法的,Object.getOwnPropertySymbols可以获取到Symbol值属性名,但是获取不到普通属性名
console.log(Object.getOwnPropertySymbols(obj3));//[ Symbol() ]