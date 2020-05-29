// 接口补充(可选成员,只读成员,动态成员)
export {}
//  2.定义接口
interface Post {
    title:string//键值对的结尾可以用逗号/分号或者省略
    content:string,
    subtitle?:string,//可选成员
    readonly summary:string//只读成员
}
/**
 * 3.在函数中可以给post对象的类型设置Post接口,
 * 此时就是显示的要求我们的对象必须有title和content这两个成员了
*/
function printPost (post:Post){
   /**
     * 1.这是对于post所接收的对象就有一定的要求,
     * 我们传入的对象必须存在一个title属性和一个content属性,
     * 只不过这种要求是隐形的,它没有明确的表达出来
     * 那这种情况下,我们就可以使用接口表现出这种约束
    */
    console.log(post.title)
    console.log(post.content)
}
const post:Post = {
    title:'hello hcb',
    content:'ts是js的超集',
    summary:'只读,不允许修改'
}
// post.summary = '我就改了';//报错
printPost(post)
// ---------------------------------------------------
// 动态成员用法
interface Cache {
    [key:string]:string
}
const cache:Cache = {}
// 动态添加成员的键值对必须是string类型的
cache.foo = 'foo'
cache.bae = 'bar'