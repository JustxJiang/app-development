console.log('Welcome to NodeJs by Justen Jiang')
console.warn("WARNING! The file might be corrupted")
console.error("SYNTAX ERROR! Check spelling")
console.trace("Trace error in line")

console.log("---- Example 2: global object, timer ----")
setTimeout(() => {console.warn("Time is over")}, 3000)

let count = 9
const timer = setInterval(() => {
    console.log(`Counting ${count}`)
    count -= 1
    if (count == 0){
        clearInterval(timer)
    }
},2000)

console.log('---- Example 3: check or print directory or file ----')
console.log(`Current directory ${__dirname}`)
console.log(`Current file ${__filename}`)

console.log('---- Example 4: working with different module ----')
// import the module
const name = require ('./mod')
console.log(name.helper('Justen'))
console.log(name.id(123))
console.log(name.email('justen@gmail.com'))

console.log('---- \nExample 5: nodejs event module ----')
// import the nodejs module events 
const events = require('events')
// use constructor 'new' to create an object of events
const eventEmitter = new events.EventEmitter()

eventEmitter.on('test', function(e){
    console.log(`${e}`)
})

eventEmitter.emit('test', 'EVENT EMITTERS IN NODEJS')

console.log('---- \nExample 6: read file in nodejs ----')
const fs = require('fs')
fs.readFile('readmore.txt', 'utf-8', function(error, data){
    console.log(data)
    console.log(`Error = ${error}`)
})


console.log('---- \nExample 7: write file in nodejs ----')
let info = "this file has three names: \n1. Peter \n2. Martha\n3. Jason"
fs.writeFile('readmore.txt', info, function(error){
    if(error){
        console.log(error)
    }
})

console.log('---- \nExample 8: append data into an existing file in nodejs ----')
fs.appendFile("user_emails.txt", info, function(error){
    if(error){console.log(error)}
})

console.log('---- \nExample 9: remove files ----')
fs.unlink('user_emails.txt', (error)=>{
    if(error){console.log(error)}
})

console.log('---- \nExample 10: create files ----')
// .writeFile(), .appendFile(), .open()
fs.open('newfile.txt', 'w', function(error){
    if(error){console.log(error)}
    else{console.log('File saved!')}
})


console.log('---- \nExample 11: create directory ----')
fs.mkdirSync('new_directory')

console.log('---- \nExample 12: remove directory ----')
fs.rmdirSync('new_directory')
