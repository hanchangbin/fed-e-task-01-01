// class类

//在此之前ECMAscript都是通过定义函数以及函数的原型对象实现的类型

// function Person(name){
// 	 this.name = name;//通过this去访问当前的实例对象
//  }
//  // 在实例之间共享一些成员使用prototype
//  Person.prototype.getName = function(){
// 	 console.log(`Hi,my name is ${this.name}`)
//  }
//  const p = new Person('hcb');
//  p.getName();


//自从es2015开始,我们就可以使用class关键词声明一个类型,这种独立定义类型的语法相比较之前函数的语法更容易理解,结构也更清晰一点

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
  }
  
  const p = new Person('hcb');
  p.say();