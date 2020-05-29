// 字符串的扩展方法
const message = `Where are you going?`;
console.log(
message.includes('you'),
message.startsWith('Where'),
message.startsWith('where'),
message.endsWith('?')
);//true true false true