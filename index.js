import characterData from '/data.js'
import Character from '/Character.js'

/*
- the render() function below helps display the game onto the DOM
- the attack() function helps involkes the render() by involking the attack() inside the
eventlistener of the attack btn.
*/ 
function attack(){
     render()
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}


document.getElementById('attack-button').addEventListener('click', attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
