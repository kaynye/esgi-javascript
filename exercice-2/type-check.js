
function type_check_v1(elem,type){
    if (elem===null && type==="object") return false
    if (elem===undefined && type==="object") return false
    if (Array.isArray(elem)===true && type==="object") return false
    return typeof(elem)==type
}

console.log(type_check_v1("coucou","string"))

function type_check_v2(elem,carac){
    for ( element in carac){
        elem
    }
}