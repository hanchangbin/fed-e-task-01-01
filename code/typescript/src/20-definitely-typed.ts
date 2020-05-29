// 类型声明
import { camelCase } from 'lodash'//提示我们安装@types/lodash模块.Try `npm install @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`ts(7016)

// 使用declare语句进行类型声明,declare  +  函数签名
// declare function camelCase (input:string): string
// 使用类型声明后再去访问这个函数就会有类型限制了

const res = camelCase('hello')
// 类型声明说白了就是一个成员在定义的时候由于种种原因没有进行类型声明,
//然后我们在使用它的时候再单独为它做出一个明确的声明
//这种做法存在的原因就是为了兼容一下普通的js模块

















export {}