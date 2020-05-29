// 模板字符串
//如果在字符串当中需要使用反引号可以使用\转义
// const str = `this is a \`apple\``;
// console.log(str);//this is a apple
// // ----------------------------------------
// //传统的字符串并不支持换行,模板字符串支持多行字符串,对于输出HTML字符串非常方便

// const str = `<div>
//     <p>this is a apple</p>
// </div>
// `;
// console.log(str)
// /* <div>
//     <p>this is a apple</p>
// </div> */
// //模板字符串还支持通过插值表达式 的方式在字符串中嵌入所对应的数值

// const thing = 'apple';
// const str = `this is a ${thing}`;
// console.log(str);//this is a apple

//这里的${}是标准的JavaScript,这里不仅可以嵌入变量,还可以嵌入任何标准的js语句,这个表达式返回的结果最终会输出在字符串当中插值表达式的位置

const str = `这是${1 + 1 }个苹果`;
console.log(str);//这是2个苹果