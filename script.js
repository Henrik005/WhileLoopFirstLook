//Model
let app = document.getElementById('App')
let trueFalse = true;
let runCounter = ''
let num1 = 0
let num2 = 0





//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/`<div>How Many Tries Until Numbers Matched: ${runCounter}</div> <div>The Numbers: ${num1}/${num2}<div>
 <button onclick ="matchOrNot()">Run Match Program!</button>

`
}








//Controller
function matchOrNot(){
    while(trueFalse){
     num1 = Math.floor(Math.random() * 50 + 1);
     num2 = Math.floor(Math.random() * 50 + 1);
    if(num1 != num2){runCounter++}
    if(num1 == num2){trueFalse = false;}
    }
    updateView();
}








