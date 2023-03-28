import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'


/*
The character() carries out the constructor function with the object.assgin which helps make a copy of the 
original characterData created and also the method function that helps returns the template
string for the game avater design and diceroll.
*/ 

/*
Challenge Question
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.
2. Modify the attack() function in index.js to get our 
app working again.
*/

/*
CHALLENGE
1. In the takeDamage method, use what you have just learned
to reduce attackScoreArray to a single number.
2. Store that number in a const called totalAttackScore
3. Decrement the health score by totalAttackScore
*/

/*
CHALLENGE
1. Add code to takeDamage so that when he character reaches 
zero heath, they stay at zero health and don't drop below 
zero.
*/

/*Challenge
1. Create a property called maxHealth INSIDE Character that 
stores the maximum health a character can have.
2. Create an arrow function called getPercentage OUTSIDE 
Character which takes two parameters, remainingHealth and 
maximumHealth. getPercentage should return the % of 
maximumHealth that is remaining.
3. To test, call getPercentage from within the takeDamage method
and log out the result. 
*/

/*   
CHALLENGE
1. Set up a new method called getHealthBarHtml
2. Create a const called "percent" and set it equals to the 
returned value from our getPercentage function (think what 
arguments you want to pass in).
3. For now, just log out the value of the new const "percent". 
4. Down in the getCharacterHtml method, set up a const
called healthBar and set it equal to the returned value
of the getHealthBarHtml method.
*/

/*
CHALLENGE
1. Instead of just logging the percent, getHealthBarHtml 
needs to return this string of html:
`<div class="health-bar-outer">
    <div class="health-bar-inner *YOUR CODE HERE* " 
        style="width: *YOUR CODE HERE* %;">
    </div>
</div>`
2. You need to make some changes to that string of HTML.
2a. If the amount of health left is 25% or lower, add the class 
"danger" to the div with the class "health-bar-inner".
2b. The width of that div should be the % health remaining. 
3. Be sure to add the healthBar variable to the string of HTML
rendered by getCharacterHtml.
     
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

    this.maxHealth = this.health

    this.getDiceHtml = function(){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map((num)=>{
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.takeDamage = function(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total, num)=>{
            return total + num
        })
        this.health -= totalAttackScore
        if(this.health <= 0){
            this.health = 0
            this.dead = true
        }
        console.log(getPercentage(this.maxHealth,this.health))
    }

    this.getHealthBarHtml = function(){
        const percent = getPercentage(this.maxHealth, this.health)
        return `<div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? 'danger' : ''}" 
            style="width: ${percent}%;">
        </div>
    </div>`
    }

    this.getCharacterHtml = function () {
        const { name, avatar, health, diceArray } = this; 
        const healthBar = this.getHealthBarHtml()     
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }  
}

export default Character
