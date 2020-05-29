// 类class
export {}
class Person {
    //public修饰符声明类的共有属性,在typescript中,类声明名的属性默认是公有属性,public关键词可以被省略
    public name:string 
    // private修饰符声明类的私有属性,只能在类的内部去访问
    private age:number
    // protected修饰符声明类的受保护属性,同样来类实例化后不能被直接访问,只允许在子类访问对应的成员
    protected gender:boolean
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
        this.gender = true
    }
    sayHi(msg:string) :void{
        console.log(`I am ${this.name},${this.age}`)
    }
}
// 创建子类继承Person类
class Student extends Person {
    private constructor(name:string,age:number){
        super(name,age)
        console.log(this.gender);//Property 'age' is private and only accessible within class 'Person'.通过this直接访问父类中protected修饰过的属性
    }
    static create(name:string,age:number){
        return new Student(name,age);
    }
}
const hcb = new Person('hcb',25)
console.log(hcb.name)
// console.log(hcb.age);//语法报错Property 'age' is private and only accessible within class 'Person'.age是私有属性不能直接访问
// console.log(hcb.gender);//Property 'age' is private and only accessible within class 'Person'.
// const gl = new Student('gl',7);//Constructor of class 'Student' is private and only accessible within the class declaration.
const gl = Student.create('gl',7)
// 构造函数被标记为protected,这个类不允许被实例化,但是相比private,它允许被继承的
class Teacher extends Person {
    protected constructor(name:string,age:number){
        super(name,age)
        this.gender = false;
    }
}
// const mm = new Teacher('mm',18);//Constructor of class 'Teacher' is protected and only accessible within the class declaration.
class Woman extends Teacher {
    constructor(name:string,age:number){
        super(name,age);
    }
}
const wm = new Woman('luck',33)