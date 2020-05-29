// 类的只读属性
export {}
class Person {
    public name:string
    private age:number
    protected readonly gender:boolean
    constructor(name:string,age:number){
        this.name = name
        this.age = age
        this.gender = true
    }
    sayHi(msg:string):void{
        console.log(`I am ${this.name},${msg}`)
        console.log(this.age)
    }
}
const hcb = new Person('hcb',25)
console.log(hcb.name)