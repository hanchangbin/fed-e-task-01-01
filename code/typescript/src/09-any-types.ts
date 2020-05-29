// 任意类型---any类型
export {}
function stringify(value:any):any{
    return JSON.stringify(value)
}
stringify(100)
stringify('ccc')
stringify(true)
let hello: any = 'string';

hello = 123
hello = false
hello = undefined