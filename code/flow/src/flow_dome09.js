/**
 * Mixed和Any类型
 * @flow
*/
function passMixed(pass:mixed){
    if(typeof pass === 'string'){
        pass.substr(1)
    }
    if(typeof pass === 'number'){
        pass*pass
    }
   
   
}
passMixed('ss')
passMixed(123)
passMixed(true)
function passAny(pass:any){
    pass.substr(1)
    pass*pass
}
passAny('aa')
passAny(123)
passAny(null)