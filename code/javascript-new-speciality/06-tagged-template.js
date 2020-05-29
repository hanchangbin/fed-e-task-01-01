// 模板字符串标签函数--模板字符串的高级用法
// const str = console.log`abc`;//[ 'abc' ]
// //为啥用console.log会打印一个数组呢?
// //尝试定义一个标签函数
// 先定义一个标签和变量,然后定义一个使用标签函数的模板字符串,使用这个函数之前要先定义这个函数
// const name = 'hcb';
// const gender = true;
// function myTagFunc(strings){//函数接受数组参数
// 	console.log(strings);//[ '', ' is a ', '' ]
// 	//打印出来发现,这个数组的内容就是模板字符串内容分割过后的结果
// 	//因为这个模板字符串中可能会有表达式,这里的数组就是按照表达式分割过后 
// 	//那些静态的内容,所以是一个数组
// }
// const result = myTagFunc`${name} is a ${gender}`;

// //除了数组以外,这个函数还可以接收到所有模板字符串当中表达式的返回值,如name和gender
// const name = 'hcb';
// const gender = true;
// // function myTagFunc(strings,name,gender){//函数接受数组参数
// // 	console.log(strings,name,gender);//[ '', ' is a ', '' ] 'hcb' true
// // }
// //等同于
// function myTagFunc(strings,...values){//函数接受数组参数
// 	console.log(strings,...values);//[ '', ' is a ', '' ] 'hcb' true
// }
// const result = myTagFunc`${name} is a ${gender}`;

//那么这个 函数的返回值就是带标签的模板字符串所对应的返回值
const name = 'hcb';
const gender = true;
function myTagFunc(strings){//函数接受数组参数
	const sex = gender?'boy':'girl';
	return name + strings[1] + sex;
}
const result = myTagFunc`${name} is a ${gender}`;
console.log(result);//hcb is a boy