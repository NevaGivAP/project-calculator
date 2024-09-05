const allButtons = document.querySelectorAll('button');
const display = document.querySelector('#display-section');

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
        if(first == 0 || second == 0){
            first = "I luv u"
        } else{
            first = first / second;
        }
    }
    if(`${first}`.length > 9){
        const part = `${first}`.slice(0,9);
        first = +part;
    }
    second = 0;
    check = true;
    
    display.textContent = first;
}

allButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        switch(button.textContent){
            case "Del":
                if(display.textContent.length == 1){
                    display.textContent = 0;
                } else{
                    display.textContent = display.textContent.slice(0,display.textContent.length-1);
                }
                
                break;
            case ".":
                if(!display.textContent.includes(".")){
                    if(display.textContent == "0"){
                        display.textContent = "0.";
                    } else if(display.textContent.length < 9){
                        display.textContent += ".";
                    }
                }
                break;
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
                if(display.textContent == "0" || check == true){
                    display.textContent = button.textContent;
                    check = false;
                } else if(display.textContent.length < 9){
                    display.textContent += button.textContent;
                }
        }
    })
})