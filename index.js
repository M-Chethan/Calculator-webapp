let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let eqlBtn = document.getElementById('equalButton');
console.log(eqlBtn)
buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log("-----", e.target.innerText)
        switch (e.target.innerText) {
            case 'Ac':
                display.innerText = '';
                break;
            case '=': {
                try {
                    display.innerText = eval(display.innerText);
                }
                catch {
                    display.innerText = 'error';
                }
                break;
            }
            default: {
                let temp = e.target.innerText;
                if (e.target.innerText === "÷") {
                    temp = "/";
                }
                display.innerText += temp;
            }
        }
    });
});

// eqlBtn.addEventListener('click',(e)=>{
//     console.log(e.target.innerText)
//     display.innerText =eval(display.innerText);
// })
