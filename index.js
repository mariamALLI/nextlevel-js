import characterData from '/data.js'
import Character from '/Character.js'

/*
the render() function below helps display the game onto the DOM
*/ 
function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()