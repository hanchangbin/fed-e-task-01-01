// extends 继承
  // 1.定义Person类型
  class Person {
    //2.在构造函数添加一些额外的逻辑,使用constructor构造函数方法
    constructor(name){
        this.name = name;//使用this访问当前的实例对象
    }
    //3.定义类的方法
    say(){
        console.log(`Hi,my name is ${this.name}`);
    }
    //定义静态方法--创建Person类型的实例
    static create(name){
        return new Person(name)
        //需要注意的是,因为静态方法是挂载在类型上面的,所以静态方法内部的this不会指向实例对象,而是当前的类型
    }
}
// 继承Person类
class PersonInfo extends Person {
  constructor(name,age){
      super(name);//继承父类的构造函数中的逻辑属性
      this.age = age;
  }
  say(){
      super.say();//继承父类的方法
      console.log(`My age is ${this.age}`);
  }
}
const info = new PersonInfo('tom',18);
info.say();