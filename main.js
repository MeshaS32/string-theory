
/*function name: xify
parameters- string --str


return type string
*/

// function xify(str){
//     let newStr = ""

// for(let i = 0; i < str.length; i++ ){
//     newStr += "x"
    
// }
//   return newStr;   
// }
// console.log(xify("Hello"))
// console.log(xify("hi there"))


// function yellingChars(str2){
//     let newStr2 = " ";

//     for(let i2 = 0; i2 < str2.length; i2++){
//         newStr2 += str2[i2] + "!"
//     }
//     return newStr2
// }
// console.log(yellingChars('goodness'))

// function indexedChars(str3){
//     let newStr3 = ""
//     let index = str3.indexOf(str3)

//     for(let i3 = 0; i3 < str3.length; i3++){
//         newStr3 += [i3] + str3[i3]
//     }
//     return newStr3
// }
// console.log(indexedChars("hello"))
// console.log(indexedChars("bye"))


// function exclaim(string){
//     let newStr = ""
    
//     for(let i = 0; i < string.length; i++){

//         if(string[i] === "." || string[i] === "?"){
//     newStr += "!"
//     } else {
//          newStr += string[i]
//     }
// }
// return newStr 
// }

// console.log(exclaim("What us wrong with you? Are you ok? "))


// function truncate(str){
// let newStr = ""

//     for(let i = 0; i = str.length; i++){
//         if(str.length >= 15){
//             newStr += str.substring(0,15)
//         } else {
//             newStr += str[i]
//         }
//     return newStr
// }
// }
// console.log(truncate("My name is Kamesha Sylvester Hamilton. "))

// function ciEmailify(email){
//     let newStr = "";

//     for(let i = 0; i < email.length; i++){
//         if(email[i] === " "){
//             newStr += "."
//         } else {
//             newStr += email[i];
//         }
//     }
//     return newStr.toLowerCase() + "@codeimmersives.com"
// }
// console.log(ciEmailify("Kamesha Hamilton"))
// console.log(ciEmailify("mesha sylvester"))

function reverse(str){
let newStr = "";

for(let i = str.length -1; i >=0; i--){
        newStr += str[i]
    } 
    return newStr
}
console.log(reverse("desselb"))
console.log(reverse("ahsemak"))