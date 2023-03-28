import characterData from '/data.js'
import Character from '/Character.js'

/*
- the render() function below helps display the game onto the DOM
- the attack() function helps involkes the render() by involking the attack() inside the
eventlistener of the attack btn.
*/ 
/*CHALLENGE Question
1. Think what data we need to pass to our new
takeDamage method.
2. Add that data as an argument each time we call
takeDamage below.
3. In the takeDamage method, take in the data as a 
parameter called 'attackScoreArray' and log it out.
**hint.md for help!** 
*/

/*
CHALLENGE
1. Inside attack(), check if either character is dead.
If they are, call a new function called endGame().
2. Set up the new function endGame() and have it 
log out "the game is over".
*/

/*CHALLENGE
1. Inside endGame(), create a const called endMessage. 
2. Figure out how to set endMessage to say either "The 
Wizard Wins", "The Orc is Victorious", or "No victors - 
all creatures are dead", depending on the health scores 
of the characters.
3. Log out endMessage
*/

/*CHALLENGE
1. Create a second const in endGame called endEmoji.
2. Figure out how to set it to hold the emoji "🔮" if the 
wizard wins, and "☠️" if the orc wins. If both characters 
are dead use "☠️".
3. Finally, take the html template string below render it 
to the screen so it replaces everything else when the game 
is over.
`<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}/h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
*/

/*
Challenge
1. Create a function called getNewMonster.
2. Write logic inside the function that takes the first 
monster from monstersArray and extracts that monster's 
data from characterData.
3. Save that data to a new const called nextMonsterData.
*/

/*
Challenge
1. Make it so getNewMonster returns a new instance of Character. Think
what argument you should be passing. If there are no more monsters in the 
array, getNewMonster should return an empty object {}.
2. Down near the bottom of the file, set a new variable "monster" equal 
to our new function getNewMonster.
3. Delete any code we no longer need.
- The app will still be broken - don't worry for now!
**hint.md for help!!**
*/

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
     render()
    if(wizard.dead || orc.dead){
        endGame()
    } 
}

function endGame(){
    const endMessage = wizard.health === 0 && orc.health === 0 ? 'No victors - all creatures are dead' :
    wizard.health > 0 ? 'The Wizard Wins' : 'The Orc is Victorious'

    const endEmoji = wizard.health > 0 ? '🔮' : '☠️'
    document.body.innerHTML = `<div class="end-game">
                                    <h2>Game Over</h2>
                                    <h3>${endMessage}</h3>
                                    <p class="end-emoji">${endEmoji}</p>
                              </div>
`

}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}


document.getElementById('attack-button').addEventListener('click', attack)
const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()