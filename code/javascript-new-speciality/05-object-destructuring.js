// 对象的解构

// const obj = {name:'hcb',age:'25'};
// const { name , age } = obj;//在花括号里同样是提取出来的数据所存放的变量名，不过变量名有一个很重要的作用，那就是去匹配所对应的成员，从而去提取指定成员的值
// console.log(name,age);//hcb 25
//----------------------------------
// const obj = {name:'hcb',age:'25'};
// const { age } = obj;//age就是提取了obj对象age属性的值
// console.log(age);//25

// const obj = {name:'hcb',age:25};
// const age = 27;
// const { age } = obj;//因为obj里的age属性必须通过age去提取，所以这里必须使用age去提取，这样的话这一冲突就不可避免
// console.log(age);
// // SyntaxError: Identifier 'age' has already been declared
// // SyntaxError:标识符'age'已经被声明

// //-----------------------------------------

// //使用重命名的方式解决变量名冲突的问题
// const obj = {name:'hcb',age:25};
// const age = 27;
// const { age:objAge } = obj;
// console.log(objAge);//25

// //-----------------------------------------

// //在重命名后需要使用默认值
// const obj = {name:'hcb'};
// const age = 27;
// const { age:objAge = 26} = obj;
// console.log(objAge);//26

// //-----------------------------------------

//解构对象的更多用法
const { log } = console;
log(1);//
log('abb');//abb
//这样一来简化了代码的编写，整体的体积也会减小很多