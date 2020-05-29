// 对象字面量的增强

const bar = 456
const obj = {
    foo:123,
    // bar:bar,//传统写法
    bar,//es6写法,同上等价
    // method:function(){
       //  console.log('method',this.foo)
    // },//传统写法
    method(){
        console.log('method',this.foo)
    },//es6写法,同上等价,和普通的function函数的this的指向一样,内部的this指向当前对象
    //另外对象最大的变化时可以使用表达式的返回值作为对象的属性名
    //传统直接添加动态属性名会报错
    // Math.random():789//SyntaxError: Unexpected token .
    // es2015后可以直接[]添加动态属性名,这种属性名叫做计算属性名
    [Math.random()]:789
}
// es5通过索引的方式添加属性名
// obj[Math.random()] = 789;
console.log(obj);//{ foo: 123,bar: 456,method: [Function: method],'0.988395699398273': 789 }
obj.method();//method 123