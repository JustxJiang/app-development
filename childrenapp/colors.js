/**
 * MODAL WINDOW
 */
// collect the elements
let red = document.querySelector(".red")
let orange = document.querySelector(".orange")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let purple = document.querySelector(".purple")



let red_modal = document.querySelector(".red-modal")
let orange_modal = document.querySelector(".orange-modal")
let yellow_modal = document.querySelector(".yellow-modal")
let green_modal = document.querySelector(".green-modal")
let blue_modal = document.querySelector(".blue-modal")
let purple_modal = document.querySelector(".purple-modal")


// add a click event top open the modal window 
red.addEventListener("click", function(){
    red_modal.style.display = "block"
})
orange.addEventListener("click", function(){
    orange_modal.style.display = "block"
})
yellow.addEventListener("click", function(){
    yellow_modal.style.display = "block"
})
green.addEventListener("click", function(){
    green_modal.style.display = "block"
})
blue.addEventListener("click", function(){
    blue_modal.style.display = "block"
})
purple.addEventListener("click", function(){
    purple_modal.style.display = "block"
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
    if(event.target == red_modal){
        red_modal.style.display = "none"
    }
    else if(event.target == orange_modal){
        orange_modal.style.display = "none"
    }
    else if(event.target == yellow_modal){
        yellow_modal.style.display = "none"
    }
    else if(event.target == green_modal){
        green_modal.style.display = "none"
    }
    else if(event.target == blue_modal){
        blue_modal.style.display = "none"
    }
    else if(event.target == purple_modal){
        purple_modal.style.display = "none"
    }
    else{
        null;
    }
})