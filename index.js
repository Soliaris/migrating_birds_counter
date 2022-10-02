
let count = 0

const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
incrementBtn.addEventListener("click", incrementCount)
const entryEl = document.getElementById("entry-el")
entryEl.textContent = "Previous entries:"

function incrementCount(){
    count += 1
    countEl.textContent = count
}

saveBtn.addEventListener("click", saveCount)

function saveCount(){
    console.log(count)
    entryEl.textContent += " " + count + " -"
    count = 0
    countEl.textContent = 0
}

const titleEl = document.getElementById("title-el")
let todayDate = new Date()
let displayDate = " " + todayDate.getUTCDate() + " / " + (todayDate.getUTCMonth()+1) + " / " + todayDate.getFullYear()

function setTitle(){
    titleEl.textContent += displayDate
}
setTitle()




