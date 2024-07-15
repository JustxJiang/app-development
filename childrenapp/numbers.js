/**
 * MODAL WINDOW
 */
// collect the elements
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let ten = document.querySelector(".ten")


let one_modal = document.querySelector(".one-modal")
let two_modal = document.querySelector(".two-modal")
let three_modal = document.querySelector(".three-modal")
let four_modal = document.querySelector(".four-modal")
let five_modal = document.querySelector(".five-modal")
let six_modal = document.querySelector(".six-modal")
let seven_modal = document.querySelector(".seven-modal")
let eight_modal = document.querySelector(".eight-modal")
let nine_modal = document.querySelector(".nine-modal")
let ten_modal = document.querySelector(".ten-modal")


// add a click event top open the modal window 
one.addEventListener("click", function(){
    one_modal.style.display = "block"
})
two.addEventListener("click", function(){
    two_modal.style.display = "block"
})
three.addEventListener("click", function(){
    three_modal.style.display = "block"
})
four.addEventListener("click", function(){
    four_modal.style.display = "block"
})
five.addEventListener("click", function(){
    five_modal.style.display = "block"
})
six.addEventListener("click", function(){
    six_modal.style.display = "block"
})
seven.addEventListener("click", function(){
    seven_modal.style.display = "block"
})
eight.addEventListener("click", function(){
    eight_modal.style.display = "block"
})
nine.addEventListener("click", function(){
    nine_modal.style.display = "block"
})
ten.addEventListener("click", function(){
    ten_modal.style.display = "block"
})

// closing modal collection 
let closeButtons = document.querySelectorAll(".closemodal")
// close the modal window by clicking on X 
closeButtons.forEach(function(closeButton){
    closeButton.addEventListener("click", function(closeButton){
        let modal = this.closest(".modalwindow")

        if(modal){
            modal.style.display = "none"
        }
    })    
})


// close the modal window by clicking outside the modal screen 
window.addEventListener("click", function(event){
    if(event.target == one_modal){
        one_modal.style.display = "none"
    }
    else if(event.target == two_modal){
        two_modal.style.display = "none"
    }
    else if(event.target == three_modal){
        three_modal.style.display = "none"
    }
    else if(event.target == four_modal){
        four_modal.style.display = "none"
    }
    else if(event.target == five_modal){
        five_modal.style.display = "none"
    }
    else if(event.target == six_modal){
        six_modal.style.display = "none"
    }
    else if(event.target == seven_modal){
        seven_modal.style.display = "none"
    }
    else if(event.target == eight_modal){
        eight_modal.style.display = "none"
    }
    else if(event.target == nine_modal){
        nine_modal.style.display = "none"
    }
    else if(event.target == ten_modal){
        ten_modal.style.display = "none"
    }
    else{
        null;
    }
})