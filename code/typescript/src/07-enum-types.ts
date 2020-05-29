//枚举(Enum)
export {}
// 传统的JavaScript使用对象去模拟实现枚举
const PostStatus = {
    Draft:0,
    UnPubilshed:1,
    Published:2
}
// 然后我们就可以在代码当中使用这些对象的属性表示状态,
//这样就不会出现遗忘数字值代表什么的问题
const post = {
    title:'hello TypeScript',
    content:'ts是js的超集',
    status:PostStatus.Draft,//状态:0草稿1未发布2发布//如果在代码中直接使用012代表自变量状态的话,时间久了我们可能搞不清楚对应的数字是什么状态,而且时间长了还会混进了一些其他的值,去使用012以外的数字
}
//-------------------------------------
//现代的TypeScript当中有一个专门的枚举类型可以使用enum关键词声明枚举
// enum PostStatus2 {
//     Draft = 0,//需要注意的是这里使用的是等号而不是冒号
//     UnPubilshed = 1,
//     Published = 2
// }
// 需要注意的,在值为number时,是不用等号赋值的时候默认初始值是0,后面的属性在不设值的情况下是上一个属性值+1递增,如下
// enum PostStatus2 {
//     Draft = 6,//6//0
//     UnPubilshed,//7//1
//     Published//8//2

// }
// 枚举的值除了是数字外还可以是字符串,如果是字符串枚举的话,那我们需要手动的给每个枚举一个初始化的值
// enum PostStatus2 {
//     Draft = 'aaa',
//     UnPubilshed ='bbb',
//     Published = 'ccc'

// }

// 常量枚举,在enum前声明const
const enum PostStatus2 {
    Draft ,
    UnPubilshed ,
    Published 
}
const post2 = {
    title:'hello TypeScript',
    content:'ts是js的超集',
    status:PostStatus2.Draft,//使用枚举和使用对象的方式是一样的
}
// PostStatus2[0];//根据枚举的值动态获取枚举的名称

