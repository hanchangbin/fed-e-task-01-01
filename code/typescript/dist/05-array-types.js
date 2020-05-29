// 数组类型
// 自变量声明时限制数组类型
const arr1 = [1, 2, 3];
const arr2 = [123, 456, 789];
// --------------------------------
// 在函数参数限制数组类型
function sum(...arg) {
    return arg.reduce((prev, current) => prev * current);
}
//参数定义为数值类型的数组,不能出现别的类型的值,如果出现字符串类型语法上就会报错
// sum(1,2,3,'ffc');//报错:Argument of type '"ffc"' is not assignable to parameter of type 'number'.
//# sourceMappingURL=05-array-types.js.map