//元组类型   Tuple
export {}
//对应类型不相符或者数量超出长度限制都会报错
const tuple:[number,string] = [12,'boo'];
// const tuple:[number,string] = [12,11];//报错
// const tuple:[number,string] = [12,'cc',11]//报错
// 通过数组解构的方式提取每个元素
const [age,number] = tuple;
//---------------------------------------------------------
//元组类型越来越常见
Object.entries({
    foo:123,
    bar:555
})//=>返回可枚举的键值对数组
//因为Object.entries是es2017出现的,需要在tsconfig的lib添加值"ES2017"
