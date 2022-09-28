let userName = "Andreas Scheft"
let userAge = 45
let userPets = ["cat", "dog", "hamster"]
let userBalance = 1200
console.log("User balance", userBalance)
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 6
let daysSurvived = 0

//console.log("Text", variable) allows you to write to the console


while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
}

function nameVertical(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
}

function code(nr) {
    if (nr >= 100 && nr <= 199) {
        return 'Informational'
    } else if (nr >= 200 && nr <= 299) {
        return 'Successful'
    } else if (nr >= 300 && nr <= 399) {
        return 'Redirection'
    } else if (nr >= 400 && nr <= 499) {
        return 'Client error'
    } else if (nr >= 500 && nr <= 599) {
        return 'Server error'
    } else {
        return 'Not a valid code'
    }
}

function compareVariables(var1, var2) {
    if (typeof var1 === typeof var2) {
        return (var1 === var2 ? 'these variables are the same' : 'these variable have the same type but different values')
    } else {
        if (var1 == var2) {
            return 'values are the same but the types are different val1:' + typeof val1 + ' val2:' + typeof val2
        } else {
            return 'everything is different val1:' + typeof val1 + ' val2:' + typeof val2
        }
    }
}

nameVertical('Sarah')
code(233)

console.log("Every day spending", EVERY_DAY_SPENDING)
console.log("Every day spending per pet", everyDaySpendingPerPet)
console.log("User have sufficient money for " + daysSurvived + " days")
console.log("User Name", userName)
console.log("User Age", userAge)
