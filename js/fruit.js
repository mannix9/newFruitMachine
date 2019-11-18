//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

var win =[]


document.getElementById("Start").addEventListener("click",spin)

//Set balnce to 500
let balance = 500;
var bet = Number(prompt("Please enter your bet between 1 and 100: "));
    if(bet >= 100){
        alert("Incorrect bet value please try again")    
    }


const betsRates = (final) =>{
    if(final[1] == 1){
        alert("all grapes")
        return bet * 2
    }if(final[1] == 1){
        alert("all lemons")
        return bet * 3
    }if(final[1] == 1){
        alert("all watermelons")
        return bet * 4
    }if(final[1] == 1){
        alert("all strawberries")
        return bet * 5
    }if(final[1] == 1){
        alert("all oranges")
        return bet * 6
    }
    
}


function loser(){
    document.getElementById("status").src = "images/Fail.png"
}

function winner(){
    document.getElementById("status").src = "images/BigWin.png"
    
}

function spin(){
    if(balance<= bet){
    return spin
    }
    balance = balance - bet
    
    //alert(bet)
    let final = []
    final.push(spinReel("r1"))
    final.push(spinReel("r2"))
    final.push(spinReel("r3"))
    //Check if the reels match up by checking 1 and 0 & 0 and 2
    if (final[0] == final[1] && final[0] == final[2]){
        winner()
        balance = balance + betsRates(final)
    }
    else{
        loser()
    }
    update_theScreen()
}    
function spinReel(reel){
    let i = Math.floor(Math.random()*6)
    if (i == 0){
        document.getElementById(reel).src = "images/Cherry.png"
    }
    if (i == 1){
        document.getElementById(reel).src = "images/Grapes.png"
    }
    if (i == 2){
        document.getElementById(reel).src = "images/Lemon.png"
    }
    if (i == 3){
        document.getElementById(reel).src = "images/Orange.png"
    }
    if (i == 4){
        document.getElementById(reel).src = "images/Strawberry.png"
    }
    if (i == 5){
        document.getElementById(reel).src = "images/Watermelon.png"
    }
    return i
}

const update_theScreen = () => {
    document.getElementById("balanceDisplay").innerHTML = balance

}
var button = document.getElementById('button')
button.addEventListener("click", function(){
    location.reload()
})
