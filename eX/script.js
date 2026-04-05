let n = 1
for(let i = 0; i < 10; i++) {
    console.log("Testing #" + n)
    n += 1
}
// function hi(message) {
//     console.log(message)
//     alert(message)
// }
// let message = prompt("What message would you like to print?: ")
// hi(message)

// Dictionaries
let value = prompt("What should be the value?: ")
let dict = {
    "key": value
}
console.log(dict["key"])

// DOM
header = document.querySelector(".header")
div = document.querySelector(".div1")
function addText() {
    let text = prompt("What would you like the container to say?: ")
    let new_text = document.createElement("p")
    new_text.textContent = text
    div.append(new_text)
}
addText()
// header.textContent = "new Text"

