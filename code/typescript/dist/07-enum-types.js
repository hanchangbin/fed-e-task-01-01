"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 传统的JavaScript使用对象去模拟实现枚举
const PostStatus = {
    Draft: 0,
    UnPubilshed: 1,
    Published: 2
};
// 然后我们就可以在代码当中使用这些对象的属性表示状态,
//这样就不会出现遗忘数字值代表什么的问题
const post = {
    title: 'hello TypeScript',
    content: 'ts是js的超集',
    status: PostStatus.Draft,
};
const post2 = {
    title: 'hello TypeScript',
    content: 'ts是js的超集',
    status: 0 /* Draft */,
};
// PostStatus2[0];//根据枚举的值动态获取枚举的名称
//# sourceMappingURL=07-enum-types.js.map