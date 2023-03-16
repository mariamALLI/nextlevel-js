# nextlevel-js
 
**NextLevel JavaScript**

# Object Destructing:
- We can restructure an object by list out the variables in a const and equating it to the object const.
- Example syntax:  const favouriteFilm = {
-     title: "Top Gun",
-     year: "1986",
-     genre: "action",
-     star: "Tom Cruise",
-     director: "Tony Scott"
- } 
- 
- Destructed to :  const {title, year, genre, star, director} = favouriteFilm
-  
- 
# Example usage:  console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}`)
- 
Another Example; const dreamHoliday = {
-     destination: 'Maldives',
-     activity: ' tour around the city',
-     accommodation: 'laying in a luxurious accommodation',
-     companion: 'Hubby'
- }
- 
- const {destination, activity, accommodation, companion} = dreamHoliday
- 
- console.log(`I would love to go to ${destination},to ${activity}. I'd sleep ${accommodation} and hang out with ${companion} all day.`)
- 
*NOTE*; don’t forget when destructing and you have a function present, you have to put the destructed object inside the function declared.
- Example:
- const hero = {
-     elementId: "hero",
-     name: "Wizard",
-     avatar: "images/wizard.png",
-     health: 60,
-     diceRoll: 3,
- }
- 
-  function renderCharacter(data) {
-     const {elementId, name, avatar, health, diceRoll} = data;
-     document.getElementById(elementId).innerHTML =
-         `<div class="character-card">
-             <h4 class="name"> ${name} </h4>
-             <img class="avatar" src="${avatar}" />
-             <div class="health">health: <b> ${health} </b></div>
-             <div class="dice-container">
-                 <div class="dice"> ${diceRoll} </div>
-             </div>
-         </div>`
- }
- 
- renderCharacter(hero)
- 
- 


# For looping: 
When using a for loop for a simple array, don’t forget to add .Length to the variable inside the for loop.
Example:   for (let i = 0; i < diceRoll.length; i++) {
    diceHtml += `<div class="dice">${diceRoll[i]}</div>`
}



# The .map() method: It’s an inbuilt javascript method for iterating over arrays;
We can use the function in the map as an anonymous inline function
Example: const energyCostEuros = [140, 153, 164, 153, 128, 146]
const exchangeRate = 1.13

const energyCostDollars = energyCostEuros.map(function(euroCost){
    return euroCost * exchangeRate
})
console.log(energyCostDollars)
Output// [158.2, 172.89, 185.32, 172.89, 144.64, 164.98]


# The .join() method: It’s an inbuilt javascript method for creating strings form arrays;
- This method helps concatenates the element of array into a string
- It also help to choose how the element are separated
- Returns the new string
Example: const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz']

const guestsHtml = guestList.map(function(guest){
    return `<div class="box">${guest}</div>`
}).join('')

Output// Tom
		 Mary 
		Clare 
		John 
		Liz




Creating an empty array to produce random numbers of array:
/*
Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 
- Which means to create an initial empty array that the numbers can be pushed into.
2  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length. I.e the number of dice counted
3  For testing purposes, call the function with a diceCount of 
   3 and log out the result. 
*/

function getDiceRollArray(diceCount){
    const diceCountArray = []
    for (let i = 0; i < diceCount; i++){
       diceCountArray.push(Math.floor(Math.random()*6)+1)
    }
    return diceCountArray
}
console.log(getDiceRollArray(3))


Returning a function inside a function :
A function can be returned inside another where it can be use to carry out a specific action that may require mapping and joining
over an array that was initially created in the early function. 
# Example:  
function getLottoNumbers(){
    const winningNums = []
    for (let i = 0; i < 6; i++){
        winningNums.push(Math.round(Math.random()*100))
    }
    return winningNums
}

function getWinningNumbersHtml(){
    return getLottoNumbers().map(function(num){
        return `<div class="number">${num}</div>`
    }).join('')
}

document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml()


# Array Constructor: 
- is a constructor for creating arrays;
- The constructor allows us to create the length of the array we want by writing the syntax
new Array  in which the first letter of the array must be in capital let and must start with the word new.
Example: 
	const goldCoins = new Array(100)
	console.log(goldCoins)
Output// [undefined, undefined,……]


The .fill() method: is an inbuilt javascript method for filling arrays;
This method helps converts the element in an array to the provided static value.
For example if we need to fill the length of array that will be provided with a particular static value e.g an emoji
# Example:
	const goldCoins = new Array(1000).fill('🪙')

	console.log(goldCoins)
Output// ["🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", "🪙", ...]


Chaining .fill() and .map() onto a new array;
This can help with displaying our item on the DOM when needed without without having to use for loop
# Example:
	const poisonMushrooms = new Array(10).fill('🍄').map(function(mushroom){
    return `<div class="box">${mushroom}</div>`
}).join('')







