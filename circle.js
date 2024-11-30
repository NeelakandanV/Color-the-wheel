const Red_btn = document.querySelector("#Red")
const Blue_btn = document.querySelector("#Blue")
const Green_btn = document.querySelector("#Green")
const Reset_btn = document.querySelector("#Reset")
const Inp_btn = document.querySelector("#Color")
const Circle = document.querySelector(".circle")

// Changing circle color to Red
Red_btn.addEventListener('click',()=>{
    Circle.style.backgroundColor="red"
})

// Changing circle color to Blue
Blue_btn.addEventListener('click',()=>{
    Circle.style.backgroundColor="blue"
})

// Changing circle color to Green
Green_btn.addEventListener('click',()=>{
    Circle.style.backgroundColor="green"
})

// Resetting circle color
Reset_btn.addEventListener('click',()=>{
    Circle.style.backgroundColor=""
    Inp_btn.value=""
})

// // Changing circle color to Input value
Inp_btn.addEventListener('change',()=>{
    let col = Inp_btn.value
    Circle.style.backgroundColor= col
})