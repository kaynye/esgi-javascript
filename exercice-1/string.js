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
// console.log(snake_case(null));


function leet(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    const dico={"a":4,
                "e":3,
                "i":1,
                "o":0,
                "u":"(_)",
                "y":7}  
    for (key in dico){
        str=str.replace(new RegExp(key, 'ig'), dico[key])
    }
    return str
}




// console.log(leet("lala"))


prairie={}
prairie["animal"]={}
prairie["animal"]["type"]={}
prairie["animal"]["type"]["name"]="dog" 
//console.log(prairie["animal"])
function prop_access(object,path){
    let listepath=path.split(".")
    motPath=""
    for (let elem of listepath){
        if (typeof object[elem] === "undefined") {
            return motPath.slice(1) + " not exist"
        }
        object = object[elem];
    }
    return object
}

console.log(prop_access(prairie,"animal.type.name"))


function verlan(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    return str.split(" ").map(mot => mot.split("").reverse().join("")).join(" ")
}

function yoda(str){
    if (typeof(str) !=="string" || str.length===0)  return "";
    return str.split(" ").reverse().join(" ")
}

// console.log(verlan("Hello world"))

const vig = (message, key) => {
    if ( typeof message !== "string" || typeof key !== "string") {
        return undefined;
    }
    var result = [];
    var letterCounter = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    var rowIndex;
    var colIndex;
    while (letterCounter < message.length) {
        for (var i = 0; i < key.length; i++) {
            rowIndex = alphabet.indexOf(key[i]);
            colIndex = alphabet.indexOf(message[letterCounter]);
            result.push(alphabet[(rowIndex + colIndex) % alphabet.length]);
            letterCounter++;
            if (letterCounter >= message.length) break;
        }
    }
    return result.join("");
};


