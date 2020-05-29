//函数类型
export {}
// 函数声明
// 函数的参数类型和参数个数都是指定的,不能改变
//如果想某个参数是可选的就在参数名后加问号
function funcl (a:number,b?:number):string {
    return 'funcl'
}

funcl(100,200)
funcl(100)//语法错误参数个数少一个

// funcl(100,200,300)//语法错误参数个数多一个
// 或者使用es6添加默认值的特性来解决参数个数的问题
function funcl2 (a:number,b:number = 123):string {
    return 'funcl'
}
// 注意不管是可选参数还是默认参数都必须放在参数队列的最后位置
funcl2(111)
// 如果需要接收任意个数的参数,那么使用es6的rest操作符
function funcl3 (a:number,b:number = 123,...rest:number[]):string {
    return 'funcl'
}
// 以上就是函数类型声明的一个对应的限制
//-----------------------------------------------------
// 函数表达式
// 在把函数作为参数传递那种回调函数的形式,
// 对于回调函数我们必须约束回调函数的参数类型和返回值
// 这种情况我们就可以使用类似箭头函数的形式来去表示函数
const func2:(a:number,b:number)=>string = function(a:number,b:number):string {
    return 'func2'
}