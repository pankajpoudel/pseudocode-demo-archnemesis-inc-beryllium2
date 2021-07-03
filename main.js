// STEP 1:

let day = new Date().getDay()
let employeeName = prompt("what is your name?")
let fridayIsHoliday = true
let mondayIsHoliday = false 
let hoursworked = 36

let message = ""
if (day === 1 ){
    message += " Monday wear red."
} else if (day === 2 ){
    message += " Tuesday wear white."
} else if (day === 3 ){
    message += " Wednesday wear black."
} else if (day === 4 ){
    message += " Thursday wear blue."
}
if (fridayIsHoliday) {
    message += " It is a long weekend. Don't come to work."
} else if (day === 5 ){
    message += " Friday wear purple."
}
if (mondayIsHoliday){
    message += " It is a long weekend. Don't come to work."
} else { message += " Enjoy your weekend."
}
if (hoursworked > 35){
    message += ` Hey! Don't come to work. You worked ${hoursworked} hours.`
}
document.write(message)
