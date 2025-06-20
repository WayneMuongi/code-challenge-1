let numberOfCups= prompt("Karibu! How many cups of chai bora would you like to make?") //variable to prompt the user to enter the number of cups they want 

function calculateChaiIngredients (numberOfCups){ //declaration of the function
   //ingredients to be used to make the kenyan chai
    const ingredients={
        water:200,
        milk: 50,
        teaLeaves: 1,
        sugar: 2
    }
console.log(`To make ${numberOfCups}of Kenyan chai, you will need:
    Water: ${numberOfCups * 200} ml
    Milk: ${numberOfCups * 50} ml
    Tea leaves (Majani): ${numberOfCups} tablespoon
    Sugar (sukari): ${numberOfCups * 2} teaspoons

    Enjoy your Chai Bora!`)
    //prints on the console
}
calculateChaiIngredients(numberOfCups);//used to close the function declared above
