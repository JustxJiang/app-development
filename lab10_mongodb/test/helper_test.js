// import mongoose 
const mongoose = require('mongoose')

// connect to MongoDB where 'students_name is the name of the database 
mongoose.connect("mongodb://localhost/students_list")

// check if it is connected 
mongoose.connection
    // use .once to watch for mongoDb to connect the first time when the event occured 
    .once('open', function(){
        console.log('\n ---- Connected to MongoDB ----')
    })
    // use .on to watch for error in the connection
    .on('error', function(e){console.log('Error connecting ' + error)})

// clear all collectionf rom the 'students' document
beforeEach(function(done){
    mongoose.connection.collections.students.drop()
    done()
})