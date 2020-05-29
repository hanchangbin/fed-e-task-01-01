/**
 * 实现可迭代接口
 * 实现逻辑:三层对象,最外层对象实现了可迭代接口(Iterable),
 * 这个接口约定了内部必须有一个返回迭代器的iterator方法,
 * iterator方法返回的对象实现了迭代器接口(iterator),
 * 这个接口约定了内部必须有一个用于迭代的next方法,
 * 在next方法中返回的对象实现的是迭代结果接口(IterationResult),
 * 这个接口约定的是我们必须有一个value属性,表示当前迭代的数据,值可以是任意 类型,
 * 除此之外还必须有一个done属性,值是布尔值 ,用于表示迭代是否结束
 * */
// const obj = {
// 	//使计算属性名的方式定义到对象当中
// 	[Symbol.iterator]:function(){
// 		//在iterator方法的内部返回一个实现迭代器接口的对象,也就是说在这个对象中要提供一个next方法,实现向后迭代的逻辑
// 		return {
// 			next:function(){
// 				//在next方法内部返回一个迭代结果对象,这个对象有两个成员分别是value和done
// 				return {
// 					value:'hcb',
// 					done:true
					
// 				}
// 			}
// 		}
// 	}
// };
const obj = {
	store:['foo','bar','hcb'],
	//使计算属性名的方式定义到对象当中
	[Symbol.iterator]:function(){
		//在iterator方法的内部返回一个实现迭代器接口的对象,也就是说在这个对象中要提供一个next方法,实现向后迭代的逻辑
		// 因为要迭代一个数组,需要一个下标
		let index = 0;
		// 因为next的this并不是obj对象我们 需要定义 一个 变量接收当前this
		const self = this;
		return {
			next:function(){
				//在next方法内部返回一个迭代结果对象,这个对象有两个成员分别是value和done
				const result =  {
					value:self.store[index],
					done:index >= self.store.length 
					
				}
				index++;
				return result;
			}
		}
	}
};
for(const item of obj){
	console.log('循环体',item)
}//循环体 foo 循环体 bar 循环体 hcb