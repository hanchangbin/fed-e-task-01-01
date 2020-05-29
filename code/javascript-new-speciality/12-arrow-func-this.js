// 箭头函数和this

const person = {
	name:'tom',
	sayHi:function(){
		// 传统写法,this指向调用这个方法的对象
		console.log(`Hi,my name is ${this.name}`);//Hi,my name is tom
	},
	// es2015箭头函数当中没有this机制,不会改变this的指向,也就是说在我们箭头函数的外面this是什么,那么在里面拿到的就是什么
	sayHello:()=>{
		
		console.log(`Hello,my name is ${this.name}`);
		// 上面代码中，person.sayHello()方法是一个箭头函数，这是错误的。调用person.sayHello()时，如果是普通函数，该方法内部的this指向person；如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。这是因为对象不构成单独的作用域，导致sayHello箭头函数定义时的作用域就是全局作用域。
	},
	sayHiAsync:function(){
		const _this = this;
		setTimeout(function(){//这个函数最终会被放在全局对象里面调用,所以this拿不到当前作用域里面的对象,拿到的是全局对象
			//因为是调用setTimeout函数的对象是window对象,所以name是undefined
			// 以前解决这种问题的方法就是定义一个_this来保存当前作用域的this
			
			console.log(`Hi,my name is ${_this.name}`);//Hi,my name is undefined
		},500)
		//es2015的做法是使用箭头函数不改变this的指向
		setTimeout(()=>{
			console.log(this.name);//tom
		},1000)
	}
};
person.sayHi();
person.sayHello();
person.sayHiAsync();