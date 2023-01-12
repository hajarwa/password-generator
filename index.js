const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = {
    one: "",
    two:""
}

let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let strength = document.getElementById("strength")


function generate(){
    let strengthValue = strength.value
    
    for (let i = 0; i < strengthValue; i++){
        password.one += characters[randoms()]
        password.two += characters[randoms()] 
    }
     generated()
}

function randoms(){
    return Math.floor(Math.random() * characters.length)
}

function generated(){
    optionOne.textContent =  password.one
    optionTwo.textContent = password.two
    
    password.one = ""
    password.two = ""
}