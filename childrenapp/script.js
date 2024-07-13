/**
 * MODAL WINDOW
 */
// collect the element
let num = document.querySelector(".number-card")
let modalwindow = document.querySelector(".modalwindow")
let closemodal = document.querySelector(".closemodal")


// add a click event top open the modal window 
num.addEventListener("click", function(){
    modalwindow.style.display = "block"
})

// close the modal window by clicking on X 
closemodal.addEventListener("click", function(){
    modalwindow.style.display = "none"
})

// close the modal window by clicking outside the modal screen 
window.addEventListener("click", function(event){
    if(event.target == modalwindow){
        modalwindow.style.display = "none"
    }
})