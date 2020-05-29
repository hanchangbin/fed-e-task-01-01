//泛型
export {}
// 创建数值数组
function createNumberArray(length:number,value:number):number[]{
    const arr = Array<number>(length).fill(value)
    return arr;
}
// 创建字符串数组
function createStringArray(length:number,value:string):string[]{
    const arr = Array<string>(length).fill(value)
    return arr;
}
const numAry = createNumberArray(10,100)
const strAty = createStringArray(10,'voo')
// 以上这种情况,createNumberArray和createStringArray函数就会有冗余
//更合理的办法就是使用泛型,说白了就是把number和string这些变成 参数
//把类型变成参数,让我们在调用的时候去传递类型
function createArray<T>(length:number,value:T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr;
}
const ary = createArray<string>(10,'aaa');
