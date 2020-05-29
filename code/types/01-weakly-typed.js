// javascript 弱类型产生的问题
const obj = {}
// obj.foo()
setTimeout(() => {
    obj.foo()
}, 1000000);
//---------------------------------
function sum(a,b){
    return a + b;
}
console.log(sum(100,100))
console.log(sum(100,'100'))
//------------------------------------
const obj = {}
obj[true] = 100
console.log(obj['true'])