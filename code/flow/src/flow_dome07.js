/**
 * 函数类型
 * @flow
*/
function foo(callback: (string,number)=>void){
    callback('str',100)
}
foo(function(str,num){
    // str==>string
    // num==>number
})