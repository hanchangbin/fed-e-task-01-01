// 展开数组参数 

const arr = ['foo','bar','baz'];
//想把数组中的每个成员按照次序传递给console.log方法
console.log(
arr[0],
arr[1],
arr[2]
);//foo bar baz
//如果数组中的元素个数是不固定的,那一个个传的方式就行不通了
//以前使用函数方法的apply方法去调用函数,因为这种方法可以以数组的形式接收我们的实参列表
console.log.apply(console,arr);//foo bar baz
//apply的第一个参数时this指向,因为log方法是console调用的,这里指向的是console对象的本身,第二个参数是我们需要传递的实参列表这样一个数组
// es2015方法通过...的方法展开数组,大大简化了操作
console.log(...arr);//foo bar baz