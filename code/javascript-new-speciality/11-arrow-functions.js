// 箭头函数
//传统的定义方式
// function inc(number){
// 	return number + 1
// }
// const num = inc(1);
// console.log(num)

//-----------------------------
//es2015定义函数的方式
// const inc = n =>n+1;//这里使用的是编程中的连体字符Fira Code,简写,默认返回箭头后面的值
// console.log(inc(100));//101
// const inc2 = (n,m) => n + m;//多个参数
// const inc3 = (n,m) =>{//多行代码需要自己手动写return
//     if(n-m>0){
//         console.log(`${n}>${m}`)
//     }else{
//         console.log(`${n}<=${m}`)
//     }
//     return n+m;
// }
//使用箭头函数会让我们的代码更简短更易读
const arr = [ 1,2,3,4,5,6 ];
const filterArr = arr.filter(v => v%2);//过滤取余
console.log(filterArr);//[ 1, 3, 5 ]