 function ucfirst(str){
     if (typeof(str) !=="string" || str.length===0)  return "";
     return str[0].toUpperCase()+str.substring(1);
 }
//  console.log(ucfirst("test"));
//  console.log(ucfirst("Test"));
//  console.log(ucfirst("3est"));
//  console.log(ucfirst("rest ref"));
//  console.log(ucfirst(null));
//  console.log(ucfirst({}));

 function capitalize(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    const array = str.toLowerCase().split(" ");
    for (let mot=0;mot<array.length;){
        array[mot]=ucfirst(array[mot++])
    }
    return array.join(" ")
 }

//  console.log(capitalize("coucou malin"));

 function camelCase(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    str=str.replace("_"," ")
     str=str.replace(/[^a-z0-9\s]/gi, '')
     
    const array = str.toLowerCase().split(" ");
    for (let mot=0;mot<array.length;){
        array[mot]=ucfirst(array[mot++])
    }
    return array.join("")

    
 }
//  console.log("camelCase")
// console.log(camelCase("ToggleCase is_the coolest"));


 function snake_case(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    str=str.replace(/[^a-z0-9_\s]/gi, '')
   const array = str.toLowerCase().split(" ");
   for (let mot=0;mot<array.length;){
       array[mot]=array[mot++]
   }
   return array.join("_")
}

// console.log("snake_case");
console.log(snake_case(null));


function leet(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    const dico={"a":4,
                "e":3,
                "i":1,
                "o":0,
                "u":"(_)",
                "y":7}  
    for (key in dico){
        str=str.replace(new RegExp(key, 'g'), dico[key])
    }
    return str
}



// console.log(leet("lala"))


prairie={}
prairie["animal"]={}
prairie["animal"]["type"]={}
prairie["animal"]["type"]["name"]="Chien"
function prop_access(object,path){
    var listepath=path.split(".")
    monPath=""
    for (elem in listepath){
        if (prairie[elem]){

        }
    }
    return true
}