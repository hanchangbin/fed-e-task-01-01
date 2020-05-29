/**
 * 类型注解
 * @flow
*/
function cf(n,m){
    return n*m
}
cf('100','100')
let num:number = 123;
// num = 'sss';//会报错
function next():number {
    // return 100;
    return 'cc';//报出语法错误
}
function pre(): void{
    
}