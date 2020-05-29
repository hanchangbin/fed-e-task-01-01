// set

const s = new Set();
s.add(1).add(2).add(3).add(4).add(2);//add方法添加值 由于Set.add()方法可以返回集合本身,可以链式调用,如果添加重复的值,那么重复的值会被忽略掉
console.log(s);//{ 1, 2, 3, 4 }
s.forEach((i)=>console.log(i));//遍历set集合
for (let i of s) {//遍历set集合
	console.log(i)
}
console.log(s.size);//Set的长度,相当于length
console.log(s.has(2));//判断set集合是否包含这个值,返回值是true或false
console.log(s.delete(4));//删除set集合中指定的值,删除成功返回true
s.clear();//清除set集合当中的全部内容
console.log(s);

// set常见的应用方式是为数组进行去重

const arr = [1,2,3,4,5,1,5];
const result = new Set(arr);//数组去重
console.log(result);//Set { 1, 2, 3, 4, 5 }
const resultToArr = Array.from(result);//Set集合转数组
console.log(resultToArr);//[ 1, 2, 3, 4, 5 ]