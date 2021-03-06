"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 18;
// age = "string";
//出现类型错误,因为这个时候age已经被推断成了number类型
//这种用法实际上相当于给age变量添加了number注解
// ---------------------------------
// 如果typescript无法推断变量的类型注解，就会给变量添加any类型注解
let foo; //声明变量是并没有值就是any类型,也就是动态类型,这样的变量赋予任何值都不会报错,这就是隐式推断
foo = 100;
foo = 'string';
//建议为每个变量添加明确的类型,便于以后更直观的了解代码
//# sourceMappingURL=10-type-inference.js.map