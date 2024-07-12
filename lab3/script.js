/* SHAPE */
// collect the elements
let shape = document.querySelector('.shapeDiv')
let btnsquare = document.querySelector('.btnsquare')
let btnrectangle = document.querySelector('.btnrectangle')
let btncircle = document.querySelector('.btncircle')
let displayshape = document.querySelector(".shapeDiv p")

// add an event to each button
btnsquare.addEventListener("click", function(){
    displayshape.textContent = "square".toUpperCase()
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    displayshape.textContent = "RECTANGLE"
    shape.className = "rectangle"
})
btncircle.addEventListener("click", function(){
    displayshape.textContent = "CIRCLE"
    shape.className = "circle"
})

/**
 * DROPDOWN MENU
 */
// collect the element
let menubtn = document.querySelector(".menubtn")
let collapsemenu = document.querySelector(".collapsemenu")

// add a click event to open the collapsible menu
menubtn.addEventListener("click", function(){
    collapsemenu.classList.toggle("closeToOpen")
})

/**
 * MODAL WINDOW
 */
// collect the element
let card = document.querySelector(".card")
let modalwindow = document.querySelector(".modalwindow")
let closemodal = document.querySelector(".closemodal")


// add a click event top open the modal window 
card.addEventListener("click", function(){
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