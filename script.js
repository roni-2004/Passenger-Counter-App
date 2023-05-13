let count = 0
let saveEl = document.getElementById("save-el")
let counterEl = document.getElementById("counter-el")

function increment(){
    count = count + 1
    counterEl.textContent = count
    
}

function decrement(){
    count = count - 1
    counterEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    counterEl.textContent = count

}