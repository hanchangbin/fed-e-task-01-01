// Object.is

//传统判断数同值相等的方法
console.log(0 == false);//true,两等运算符会比较时自动转换数据类型
console.log(0 === false);//false,//三等会严格比较值和数据类型
console.log(-0 === +0);//true,严格等于不能区分-0和+0
console.log(NaN === NaN);//false,以前认为NaN是任意类型的值,所以严格等于的情况下是false
// es2015判断同值的方法
console.log(Object.is(-0,+0));//false,能判断-0和+0的不等
console.log(Object.is(NaN,NaN));//true,//现在认为NaN是一个特殊的值,所以相等