var square = document.getElementById("square")

square.addEventListener("mouseenter", function() {
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)
    square.style.backgroundColor = `rgb(${a},${b},${c})`
})
square.addEventListener("mouseleave", function() {
    square.style.backgroundColor = "white"
})

var circle = document.getElementById("circle")

circle.addEventListener("mouseenter", function() {
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)
    circle.style.backgroundColor = `rgb(${a},${b},${c})`
})
circle.addEventListener("mouseleave", function() {
    circle.style.backgroundColor = "white"
})

var diamond = document.getElementById("diamond")

diamond.addEventListener("click", function() {
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)
    diamond.style.backgroundColor = `rgb(${a},${b},${c})`
    circle.style.backgroundColor = `rgb(${c},${b},${a})`
    square.style.backgroundColor = `rgb(${b},${a},${c})`
})

diamond.addEventListener("mouseleave", function() {
    diamond.style.backgroundColor = "white"
})

square.addEventListener("click", () => alert("choosen one"))