const turnHtml = document.querySelector(".turn span")
const mainSquare = document.querySelector(".main-square")
const square = document.querySelectorAll('.square')
const winnerMsg = document.querySelector('.winner')
let iconColor = document.querySelector(".sitting i")
let ul = document.querySelector(".sitting ul ")
let colors = document.querySelectorAll('.sitting li')
let btnrest = document.querySelector(".winner .rest:hover")
let myInner = []
let turn = "x"
let statusT = "turn"
function putTurn() {
    
turnHtml.innerHTML = `${turn.toUpperCase()}`;
}
putTurn()
function game(ele) {
    if (ele.innerHTML=='' && turn =="x"){
        ele.innerHTML = turn.toUpperCase()
        turn = "o"
    }else if (ele.innerHTML == '' && turn == 'o'){
        ele.innerHTML = turn.toUpperCase()
        turn = 'x'
    }
    putTurn()
    winner()
}

function winner() {
    let squareArr = Array.from(square)
    myInner = []
    let tie = 0
    for( let i = 0 ; i < squareArr.length ; i++){
        myInner.push(squareArr[i].innerHTML)
        if (myInner[i] != ""){
            tie += 1
        }
    }
    if (myInner[0] == myInner[1] && myInner[1] == myInner[2] && myInner[1] != ''){
        statusT = "Winner"
        turn = myInner[0]
        putTurn()
    }else if(myInner[3] == myInner[4] && myInner[4] == myInner[5] && myInner[4] != ''){
        statusT = "Winner"
        turn = myInner[3]
        putTurn()
    }else if(myInner[6] == myInner[7] && myInner[7] == myInner[8] && myInner[7] != ''){
        statusT = "Winner"
        turn = myInner[6]
        putTurn()
    }else if(myInner[0] == myInner[3] && myInner[3] == myInner[6] && myInner[3] != ''){
        statusT = "Winner"
        turn = myInner[0]
        putTurn()
    }else if(myInner[1] == myInner[4] && myInner[4] == myInner[7] && myInner[7] != ''){
        statusT = "Winner"
        turn = myInner[1]
        putTurn()
    }else if(myInner[2] == myInner[5] && myInner[5] == myInner[8] && myInner[5] != ''){
        statusT = "Winner"
        turn = myInner[2]
        putTurn()
    }else if(myInner[0] == myInner[4] && myInner[4] == myInner[8] && myInner[4] != ''){
        statusT = "Winner"
        turn = myInner[0]
        putTurn()
    }else if (myInner[2] == myInner[4] && myInner[4] == myInner[6] && myInner[4] != ''){
        statusT = "Winner"
        turn = myInner[2]
        putTurn()
    }
    if (tie == 9) {
        statusT = 'tie'
        restart()
    }
    restart()
}
function restart() {
    if (statusT == "Winner"){
        winnerMsg.innerHTML = `الفائز ${turn} <button class="rest">اعادة تشغيل</button>`
        winnerMsg.style.display = "flex"
        let restart = document.querySelector('.rest')
        restart.addEventListener('click', function(){
            location.reload()
        })
    }else if (statusT == "tie") {
        winnerMsg.innerHTML = `تعادل <button class="rest">اعادة تشغيل</button>`
        winnerMsg.style.display = "flex"
        let restart = document.querySelector('.rest')
        restart.addEventListener('click', function(){
            location.reload()
        })
    }
}

function changeColor(li) {
    
   
    let mainColor = li.style.backgroundColor
    iconColor.style.color = mainColor
    mainSquare.style.backgroundColor = mainColor
    turnHtml.style.color = mainColor

    localStorage.setItem("color",mainColor)
    document.querySelector(":root").style.setProperty('--main-color',localStorage.getItem('color'))
}
iconColor.style.color = localStorage.getItem('color')
mainSquare.style.backgroundColor = localStorage.getItem('color')
turnHtml.style.color = localStorage.getItem('color')


iconColor.addEventListener("click" , function() {
    ul.classList.toggle("active")
})

