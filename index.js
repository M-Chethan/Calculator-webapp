let display = document.getElementById('display');
let buttons =Array.from( document.getElementsByClassName('button'));
let eqlBtn = document.getElementsByClassName('eqlButton');
console.log(eqlBtn)
buttons.map( button =>{
    button.addEventListener('click',(e)=> {
        switch(e.target.innerText){
            case 'Ac':
                display.innerText = '';
                break;
            // case '=':
            //     try{
            //         display.innerText =eval(display.innerText);

            //     }
            //     catch{
            //         display.innerText ='error';
            //     }
        break;
            default:
           display.innerText += e.target.innerText;
        }
    });
});

eqlBtn[0].addEventListener('click',(e)=>{
    display.innerText =eval(display.innerText);
})
