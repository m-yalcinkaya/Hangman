
let word = document.querySelector('#word');
let wrongLetters = document.querySelector('#wrong-letters').children[1];
localStorage.clear();
localStorage.setItem('key', 'istanbul');
localStorage.setItem('wrongLetters', '');
const key = localStorage.getItem('key');



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
        }else{
            for(let i=0; i<key.length; i++){
                if(key[i]===letter){
                    word.children[i].children[0].setAttribute('class', '')
                }
            }
        }
    }
}



function addWrongLetter(letter){
    let item = localStorage.getItem('wrongLetters');
        if(!item.includes(letter)){
            item!=='' ? item = item + ',' + letter : item = letter; 
            localStorage.setItem('wrongLetters', item);
        }
        wrongLetters.textContent = localStorage.getItem('wrongLetters');
}
