//const
//1.const在声明后不能再次被赋值
const a = 1;
a = 2;
// TypeError: Assignment to constant variable.类型错误:赋值给常量变量。
//2.const声明时必须设置初始值，声明和赋值不能像var一样，放到两个语句当中
const a ;
a = 1;
// SyntaxError: Missing initializer in const declaration.在const声明中缺少初始化器
//---------------------------------------
const obj = {};
obj.name = 'hh';
//这种情况并没有修改obj所指向的内存地址，只是修改了这块内存空间当中的数据，所以说是被允许的
//那么相反如果我们把obj指向一个新的空对象此时就会报错,因为这种赋值会改变obj的内存指向
obj = {};
// TypeError: Assignment to constant variable.类型错误:赋值给常量变量