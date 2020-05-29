// 类与接口
export {}
// 定义接口,添加成员约束,使用函数签名的方式约束方法的类型,而不做具体的方法实现
// interface EatAndRun{
//     eat(food:string):void
//     run(distance:number):void
// }
interface Eat{
    eat(food:string):void
}
interface Run {
    run(distance:number):void
}
// 下面这两个例子有共同的特性
// 使用implements实现接口,此时在类型中必须要有对应的成员,
//没有就会报错,因为实现了这个接口就必须要有对用的成员 
class Person implements Eat,Run{
    eat(food:string):void{
        console.log(`优雅的进餐:${food}`)
    }
    run(distance:number):void{
        console.log(`直立行走:${distance}`)
    }
}

class Animal  implements Eat,Run{
    eat(food:string):void{
        console.log(`呼噜呼噜的吃:${food}`)
    }
    run(distance:number):void{
        console.log(`爬行:${distance}`)
    }
}