

// 1. display number in text box
function displayNumber(num){
    display.value+=num;
}


// 2. clear text box
function clearBox(){
    display.value="";
}

// 3. evaluate expression

function evaluateExp(){
    display.value=eval(display.value)
}

// 4. Remove last item from text box

function removeLastItem(){
    display.value=display.value.slice(0,-1);
}