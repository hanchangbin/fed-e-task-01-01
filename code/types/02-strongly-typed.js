// 强类型语言的优势
function render (element){
    element.className="container"
    element.innerHtml = '你好'
}
// ------------------------
// 重构
const until = {
    aaa:()=>{
        console.log('until')
    }
}
//--------------------------
// 类型判断
function sum(a,b){
    // 强类型不需要这种判断
    if(typeof a !=== 'number' || typeof b !=== 'number'){
        throw new TypeError('参数必须是数字')

    }
    return a + b
}