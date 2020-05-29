// 剩余参数 ...
//对于未知参数使用arguments对象接收
// function foo(){
// 	console.log(arguments)
// }
// arguments对象实际上是一个伪数组;
// foo(1,2,3,4);//{ '0': 1, '1': 2, '2': 3, '3': 4 }
//...操作符,rest作用
//...操作符接收当前位置开始往后多有的实参,只能用一次,只能出现在形参的最后一位
function foo(str,...args){
	console.log(args)
}
// ...操作符意数组的形式返回函数传递的参数
foo('数数',1,2,3,4);//数数 [ 1, 2, 3, 4 ]