import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

/*
The character() carries out the constructor function with the object.assgin which helps make a copy of the 
original characterData created and also the method function that helps returns the template
string for the game avater design and diceroll.
*/ 
function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    /* this.getDiceHtml = function(diceCount) {
    //     return getDiceRollArray(diceCount).map(function(num){ 
    //         return  `<div class="dice">${num}</div>`
    //     }).join('')
    // }this code was replaced by the diceArray holding the getDicePlaceholderHtml() which houses the 
    empty display box at the start of the game rather than already decleared number template
    string
    */

    this.getDiceHtml = function(){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceArray } = this;      
        // let diceHtml = this.getDiceHtml(diceCount);
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }  
}

export default Character
