/*
This function helps get the array of the diceCount, using the new Array method 
and .fill() method which is initialized at Zero to help get range of number from 1 and including 6.
which is done by the mapping method and the function of the map return a number from 1 to 6 whith the help
of the Math.floor and Math.random function.

- Also this folder is named utils sothat other utility functions can be placed in this file.
*/ 

function getDiceRollArray(diceCount) {  
    return new Array(diceCount).fill(0).map(function(){
    return Math.floor(Math.random() * 6) + 1
    });   
}

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(()=>{
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

const getPercentage =  (maximumHealth,remainingHealth)=> (100 *remainingHealth)/ maximumHealth

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}