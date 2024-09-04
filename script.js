const allButtons = document.querySelectorAll('button');

let first;
let op;
let second;
let check = false;

function operate(){
    if(op == "+"){
        first = first + second;
    } else if(op == "-"){
        first = first - second;
    } else if(op == "*"){
        first = first * second;
    } else if(op == "/"){
        first = first / second;
    }
    second = 0;
    check = true;
    display.textContent = first;
}
const display = document.querySelector('#display-section');
allButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        switch(button.textContent){
            case "=":
                if(op){
                    second = +display.textContent;
                    operate();
                }
                op = "";
                break;
            case "/":
                if(op){
                    second = +display.textContent;
                    operate();
                    op = "/";//add op after calculation
                } else{
                    first = +display.textContent;
                    op = "/";
                    check = true;
                }
                break;
            case "*":
                if(op){
                    second = +display.textContent;
                    operate();
                    op = "*";//add op after calculation
                } else{
                    first = +display.textContent;
                    op = "*";
                    check = true;
                }
                break;
            case "-":
                if(op){
                    second = +display.textContent;
                    operate();
                    op = "-";//add op after calculation
                } else{
                    first = +display.textContent;
                    op = "-";
                    check = true;
                }
                break;
            case "+":
                if(op){
                    second = +display.textContent;
                    operate();
                    op = "+";//add op after calculation
                } else{
                    first = +display.textContent;
                    op = "+";
                    check = true;
                }
                break;
            case "C":
                display.textContent = 0;
                first = 0;
                break;
            default: 
                if(display.textContent == 0 || check == true){
                    display.textContent = button.textContent;
                    check = false;
                } else{
                    display.textContent += button.textContent;
                }
                
        }
    })
})