
let word = document.querySelector('#word');
let wrongLetters = document.querySelector('#wrong-letters').children[1];
localStorage.clear();
localStorage.setItem('key', 'istanbul');
localStorage.setItem('wrongLetters', '');
const key = localStorage.getItem('key');
let shapeCount = document.getElementsByClassName('visible-item');
let spanCount = document.getElementsByClassName('situated');
console.log(spanCount);

            
for(let i=0; i<key.length; i++){
    let element = document.createElement('div');
    element.setAttribute('class', 'letter');
    let spanLetter = document.createElement('span');
    spanLetter.setAttribute('class', 'situated');
    spanLetter.textContent = key[i];
    element.appendChild(spanLetter);
    word.appendChild(element);
}

const screen = document.querySelector('body');
screen.addEventListener('keydown',getLetter);


var isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1 && /[A-Za-z]/.test(ch);
}



function getLetter(e){
    let letter = e.key  ;
    if(isAlpha(letter)){
        if(!key.includes(letter)){
            addWrongLetter(letter);
            drawShape();
        }else{
            for(let i=0; i<key.length; i++){
                if(key[i]===letter){
                    word.children[i].children[0].setAttribute('class', '')
                }
            }
            if(spanCount.length == 0){
                myPopup(true).show();
            }
        }
    }
}



function drawShape(){
    let shape = document.querySelector('.visible-item');
            shape.setAttribute('class', 'item');
            if(shapeCount.length === 0){
                setTimeout(function (){
                    myPopup(false).show();
                } ,10);
            }
}


function myPopup(isWon){

    return new Popup({
        title:  isWon ? 'Congratulations' : 'Game Over',
        backgroundColor: isWon ? '#32cd32' : '#ff0000',
        titleColor: '#fff',
        textColor: '#fff',
        content: isWon ? `You know the word
        {btn-popup-button}[New Game]` : `
        You didn't know the word
            {btn-popup-button}[New Game]`,
    
        loadCallback: () => {
            const button = document.querySelector(".popup-button");
            button.addEventListener("click", () => {
                window.location.reload();
            });
        },
    });

}



function addWrongLetter(letter){
    let item = localStorage.getItem('wrongLetters');
        if(!item.includes(letter)){
            item!=='' ? item = item + ',' + letter : item = letter; 
            localStorage.setItem('wrongLetters', item);
        }
        wrongLetters.textContent = localStorage.getItem('wrongLetters');
}
