// 抽象类(abstract)
export {}
// 定义抽象类
abstract class Animal{
    eat(food:string):void{
        console.log(`呼噜呼噜的吃:${food}`)
    }
    // 定义抽象类的抽象方法,需要注意的是抽象方法也不需要方法体
    // 当我们的父类有这样一个抽象方法时子类必须实现这个抽象方法
    abstract run(distance:number):void
}
// 可以使用vscode的代码修正功能自动的去生成实现
class Dog extends Animal {
    run(distance: number): void {
        console.log(`四只脚跑:${distance}`)
    }

}
// 此时我们实现的类就能同时拥有父类实现的方法以及自身实现的方法
const d = new Dog()
d.eat('宠粮')
d.run(200)