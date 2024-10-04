//Model
let app = document.getElementById('App')
let noMatch = true;
let runCounter = 0;
let randomNum1 = 0;
let randomNum2 = 0;




//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/`<div>How Many Tries Until Numbers Matched: ${runCounter}</div> <div>The Numbers: ${randomNum1}/${randomNum2}<div>
 <button onclick ="matchOrNot()">Run Match Program!</button>

`
}








//Controller
function matchOrNot(){
    randomNumGen();
    reset();
    while(noMatch){
     randomNum1 = randomNumGen();
     randomNum2 = randomNumGen();
    if(randomNum1 != randomNum2){runCounter++}
    else{noMatch = false;}
    }
    updateView();
}

function randomNumGen(){
    return Math.floor(Math.random() * 50 + 1);
}
function reset(){
    runCounter = 0
    randomNum1 = 0
    randomNum2 = 0
    noMatch = true;
}





