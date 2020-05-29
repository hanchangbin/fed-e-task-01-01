//函数参数的默认值--传统写法
// function foo(enable){
// 	// 以前想要为函数的参数去定义默认值，我们需要在函数体中通过逻辑代码来实现，例如foo函数的参数enable，我们需要是enable的默认值是true，那么我们需要通过逻辑判断来决定是否使用默认值。
// 	// enable = enable || true;//短路运算法
// 	// 在这里你会发现人们经常会犯错的地方，因为很多人喜欢用短路运算的方式设置默认值，在这个函数的情况下是不能通过短路运算的方式设置默认值，因为这样会导致如果我们传入false的时候也会 使用默认值，那这事很明显的错误，正确做法是判断enable是否等于undefined，然后使用默认值
// 	enable = enable === undefined ? true : enable;
// 	console.log('foo invoked - enable')
// 	console.log(enable)
// }
// foo(false);
//--------------------------------------------------
//es2015函数的参数默认值
//函数参数的默认值--es2015写法
// function foo(enable = true){//这里传递的默认值会在我们没有传递实参或undefined的时候使用
	
// 	console.log('foo invoked - enable')
// 	console.log(enable)
// }
// foo(false);


//多个默认值的错误写法
// function foo(enable = true,name){
	
// 	console.log('foo invoked - enable')
// 	console.log(enable,name)
// }
// foo('hcb');


//多个参数的正确写法，带有默认值的参数放在最后
function foo(name,enable = true){
	
	console.log('foo invoked - enable')
	console.log(name,enable)
}
foo('hcb');