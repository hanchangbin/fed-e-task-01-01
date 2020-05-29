## 简答题答案及说明
1.
**答案**：10

**说明**：

原题

![image](335BCEF93B1A424D83D6D815BAE1B1A4)

稍微改变一下
```

var a = [];
var i ;
for(i = 0; i < 10 ; i++){
	console.log('索引',i)
	a[i] = function(){
		console.log(i)
	}
}
console.log('全局变量',i);
a[6]()
```
在for循环中，var 声明的i变量会上升到全局，方法的变体，for循环执行的是同步任务，会在主线任务开始后按顺序执行，当for循环判断i = 10的时候已经不满足for循环的遍历条件，此时循环结束，
而当a[6]()函数被调用的时候i作为全局变量已经是10了，函数调用时console.log(i)的结果必然是10
2. 
**答案**：会报错

**说明**：
原题
![image](F396A3D55EDE4453B6A4E70E42C4DF64)

if语句中的{}是一个区块拥有块级作用域，在区块用let声明的tmp变量会被封闭在{}这个作用域中，var声明tmp这个全局变量影响不到块级作用域，又因为let的声明的变量不会变量提升，运行时在{}这个区块中，console.log(tmp)中的tmp还没有被声明，所以会报错

3.
**答案**：4
![image](54E0C0C9CD1D46D0A1C61762475871E6)

**说明**：使用...操作符展开数组作为Math.min()方法的参数能直接获取到arr数组的最小值

```
Math.min(...arr)
```

4.
**答案**: 

> 1. 变量提升：let和const不会变量提升，在声明之前使用会报错；而var会变量提升 ，声明前使用默认是全局变量，默认值为undefined
> 2. 块级作用域：let和const声明的变量存在块级作用域，在块级作用域用let或const声明的变量不会受外界影响，凡在声明之前使用的变量都会报错，这叫暂时性死区，块级作用域会形成一个封闭作用域把let或const声明的变量包起来，块级作用域是es2015之前没有的
> 3. var允许重复声明，let和const不允许重复声明
> 4. const声明的是常量，一旦声明不允许改变
    
5. 
**答案**: 20
**说明**：
![image](A9C031C1B5064C54AE377CE293515C2B)

6.
![image](5EBC7B135CDC409FAEB853D355105DCB)

**答案** 
   
    
> 1. 解决对象属性名冲突的问题
> 2. 对象可以使用Symbol作为对象的属性名或函数名
> 3. 可以借助Symbol去模拟实现对象的私有成员

7. 
![image](1BE18245BE9246D18ECA88E01A24CCF9)

**答案** ：

    1.基础类型中number，string，boolean等类型的变量和值都在栈中，如果被复制都属于浅拷贝
    2.object和array是引用类型，他们声明的变量名在栈中，但是他们的值却在堆中，变量名只是堆的一个引用地址，当浅拷贝object和array时只拷贝了栈中的引用地址，深拷贝时会连带堆中的值拷贝到一个新的堆中
    
  ![image](81B51659A08340DC9A676A8F57156CB4)
  
  8. 
  
  **答案**：

> 1.我对于js异步编程的理解举个例子就是，我中午想吃饺子了，先把装好水的锅放在煤气灶上开始煮，煮的同时呢我在切菜剁馅包饺子，也就是同时干多个事情
> 2.Event Loop是事件循环机制，所有同步任务都在主线上执行，异步任务都在任务队列中等待，当同步任务完成后，异步任务等待时间到了就会进入到事件循环队列，最后进入执行栈执行
    
![image](92EA2C4B0E6049DF98E11C0C65978379)

> 3.宏任务就是在当前线程中按照顺序排队执行的任务，微任务就是当前宏任务后所连带的额外的任务
    
9. 
**答案**：


```
Promise.resolve().then(()=>{
	var a = 'hello';
	return a
}).then(a=>{
	var b = a + '拉勾'
	return b
}).then(b=>{
	var c = b +  'I O U'
	console.log(c);
})
```

10. 

**答案**：

> 1.TypeScript是JavaScript的超集,所谓超集就是在JavaScript原有的基础之上多了一些特性,包括类型系统和ES6+的支持,写完代码后编译成JavaScript。
> 2.TypeScript最低能编译ES3版本的JavaScript,兼容性良好,任何一种JavaScript运行环境都支持,如浏览器应用,node应用,react-native,electron等等。
> 3.TypeScript相比JavaScript功能更强大,生态更健全、更完善，特别是开发工具这块，微软对开发工具的支持都特别友好，angular和vue3.0都是用JavaScript开发的，适合长期维持的大型项目
    
11. 

**答案**：

> 1.语言本身多了很多概念，如接口、泛型、枚举等等，会提高我们的学习成本
> 2.项目初期，TypeScript会增加一些项目成本，如类型声明需要单独编写