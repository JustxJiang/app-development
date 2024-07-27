// import assert. assert is used to compare two Boolean values 
const assert = require("assert")
const{describe} = require("mocha") // optional to add
// import student schema 
const Student = require('../src/students')

// describe function to push testing through Mocha
describe('Create the first data', function(){
    it('Saved the student', function(){
        // create a new student 
        const student1 = new Student({name: "Peter"})

        // read and save the student in the database. Mongo will save the student in the database
        student1.save()
        
        // check if the student is not new using the .then method. 
        // if the student is new, the promise reaches the 'fulfilled' state and will proceeed to create the schema for the new student.
        // otherwise, teh promise reaches the 'rejected' state and will proceed to reject the line 'student.save()'
        .then(function(){
            assert(!student1.isNew)
        })

    })
})