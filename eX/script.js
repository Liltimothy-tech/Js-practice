let n = 1
for(let i = 0; i < 10; i++) {
    console.log("Testing #" + n)
    n += 1
}
function hi(message) {
    console.log(message)
    alert(message)
}
let message = prompt("What message would you like to print?: ")
hi(message)