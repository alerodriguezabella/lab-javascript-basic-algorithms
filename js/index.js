// Iteration 1: Names and Input

let hacker1 = "Ale"
console.log("The driver's name is " + hacker1)
let hacker2 = "Rober"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// // Iteration 3: Loops
// 3.1

let nameCap = ""
for(i=0; i<hacker1.length; i++){
    nameCap += `${hacker1[i].toUpperCase()} `
}
console.log(nameCap)

// 3.2

let nameRev = ""
for(i=hacker1.length - 1; i>=0; i--){
    nameRev += `${hacker1[i]}`
}
console.log(nameRev)

// 3.3
// Important the .toLowerCase() >>> if you try it with Aaron & arnoud || aaron & Arnoud
// https://riptutorial.com/javascript/example/5388/comparing-strings-lexicographically

if(hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first");
} else if(hacker1.toLowerCase() > hacker2.toLowerCase()){
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?")
}

// BONUS1
// Part 1 & 2
// https://bobbyhadz.com/blog/javascript-count-words-in-string

let par1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus mattis urna, ac ultricies lectus scelerisque at. Nullam lectus nunc, rutrum tincidunt tincidunt id, ornare a turpis. Aliquam non dolor quis nulla blandit sodales. Proin nec accumsan neque, sit amet vehicula augue. Nulla eget mauris dictum, porta nisi sed, elementum mi. Nunc arcu libero, eleifend sed convallis eu, luctus a augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec consectetur turpis vel vestibulum euismod. Vestibulum ornare luctus neque. Cras sollicitudin nunc vitae quam aliquet sodales."
let par2 = "Donec congue augue lacus, ac vulputate est rutrum eu. Ut non nulla lorem. Nunc ligula erat, tempus sit amet tincidunt sit amet, venenatis ut mi. Donec ultricies aliquet tempor. Suspendisse potenti. Sed pharetra egestas lectus vitae semper. Aliquam feugiat massa arcu, vitae varius justo rhoncus at. Duis hendrerit, neque a porttitor convallis, metus sem tincidunt ex, sit amet rutrum quam mi et leo. Duis molestie augue vitae neque sollicitudin, id vestibulum augue interdum. Pellentesque commodo ullamcorper sem quis aliquet. Integer velit arcu, volutpat non convallis vitae, sodales vel ligula. Ut malesuada elit eros, vel sodales sapien pulvinar in."
let par3 = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent convallis venenatis justo eu semper. Nullam vel pharetra lacus. Donec aliquet leo non tempus tempor. Sed accumsan pellentesque massa, in imperdiet magna molestie rutrum. Pellentesque vulputate rutrum fermentum. Cras imperdiet porttitor purus. Donec sed elit lacus. Praesent quis consequat augue. Donec sit amet odio enim."

function wordCount(str) {
    const arr = str.split(' ');    
    return arr.filter(word => word !== '').length
}
console.log(`The number of words is: ${wordCount(par1)}`)
console.log(`The number of words is: ${wordCount(par2)}`)
console.log(`The number of words is: ${wordCount(par3)}`)

// Part 3
// https://www.techiedelight.com/count-occurrences-character-string-javascript/

function countEtOcc(str){
    const etOcc = 'et'
 
    let count = str.split(etOcc).length - 1
    console.log(`The number of times 'et' is repeated is: ${count}`)
}
countEtOcc(par1)
countEtOcc(par2)
countEtOcc(par3)

// BONUS2
// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
// Don't really understand this code, but it's a solution that works. Found it in google: 

let phraseToCheck = "Paralelepipado hola"

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return "It's not a Palindrome";
      }
    }
    return "It's a Palindrome";
}
console.log(palindrome(phraseToCheck))
console.log(palindrome("A man, a plan, a canal, Panama!"))

// Functions for only 1 word palindromes
// https://www.youtube.com/watch?v=hmtREG-nGXA&ab_channel=HackerBuildr

// function pal(string){
//     let strLength = string.length
//     for( let i =0; i < strLength / 2; i++){
//         if(string[i] !== string[strLength - 1 - i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(pal("abba"))
