// 静态方法
// 在es2015中新增添加静态成员的static关键词

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
	  //定义静态方法
	  static create(name){
		  return new Person(name)
	  }
  }
  
  const p = Person.create('hcb');
  p.say();