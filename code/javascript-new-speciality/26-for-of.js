// for...of循环

const arr = [100,200,300,400];
for(const item of arr){
	console.log(item);
}
//这种方法取代了数组的forEach方法
arr.forEach(item=>{
	console.log(item)
})
//想比forEach方法,for...of循环可以使用break中止循环
for(const item of arr){
	
	if(item > 200){
		break;
	}
	console.log(item)
}
arr.forEach()//不能中止遍历跳出循环
//以前为了中止遍历必须使用数组实例的some和every方法
//some方法返回return true中止遍历
const isYes = arr.some(item=>{
	if(item >100){
		console.log(item)
		return true;
	}else{
		console.log(item)
	}
	
})
console.log(isYes)
// every返回 return false中止遍历
const isNoc = arr.every(item =>{
	if(item <300){
		console.log(item)
		return true;
	}else {
		return false;
	}
	
})
console.log(isNoc)
// 遍历Set
const s = new Set(['foo','bar']);
for(const item of s){
	console.log(item)
}
// 遍历Map
const m = new Map();
m.set('foo',123);
m.set('bar',456);
for(const item of m){
	console.log(item)
}
for(const [key,value] of m){
	console.log(key,value);
}
// 遍历对象
const obj = {foo:123,bar:456};
for(const item of obj){//报错obj is not iterable,对象不能迭代
	console.log(item)
}