function Pet (name, happinessLv, hungerLv, activity, color, weight){

}

const readLine = require('readline'); // import readLine
//create interface
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

//-- Create Promise functions to run multiple functions --
// Question 1 
const question_name = () => {
    return new Promise((resolve,reject) => {
        rl.question(('\nQ1: Give you pet a name: '), (name) => {
            console.log(`Your new pet is ${name}\n`)
            pet1.name = name
            resolve()
        })
    }
    )
}

// Question 2
const question_color = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q2: Give you pet a color: '), (color) => {
            console.log(`Your new pet is in ${color} colour\n`)
            pet1.color = color
            resolve()
        })
    }
    )
}

// Question 3
const question_food = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q2: Give you some food 1)grapes 2) walnuts 3) lettuce 4) pizza: '), (food) => {
            pet1.food = parseFloat(food);
            hungerLevel_calculator();
            resolve()
        })
    }
    )
}

// Question 4
const question_activity = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q2: What activities do you want your pet to do? 1)watch TV  2)talk a stroll 3)take a bath 4)eat snacks:  '), (activity) => {
            pet1.activity = parseFloat(activity);
            happinessLevel_calculator();
            resolve()
        })
    }
    )
}


// -- Use Async to run Promise functions --
const userInput = async () => {
    pet1 = new Pet ()
    await question_name()
    await question_color()
    await game()
    // await question_food()
    // await question_activity()
    console.log(`--- END OF GAME ---\nYour score:\n minimise hunger level: ${pet1.hungerLv}/10 \n maximise happiness level: ${pet1.happinessLv}/10`)
    rl.close()
}

userInput()

// Calculators

var hunger = 0
hungerLevel_calculator = () => {
    
    if (pet1.food === 1){
        hunger += 4
    } else if (pet1.food === 2){
        hunger += 1
    } else if (pet1.food === 3){
        hunger += 3
    } else if (pet1.food === 4){
        hunger -= 5
    }
    pet1.hungerLv = hunger;
    console.log(`Your pet's hungerness level: ${pet1.hungerLv}/10\n`)
}

var happiness = 0
happinessLevel_calculator = () => {
    
    if (pet1.activity === 1){
        happiness -= 3 
    } else if (pet1.activity === 2){
        happiness += 3
    } else if (pet1.activity === 3){
        happiness +=2
    } else if (pet1.activity === 4){
        happiness -=5
    }
    pet1.happinessLv = happiness;
    console.log(`Your pet's happiness level: ${pet1.happinessLv}/10\n`);
}


async function game () {
    try{
        let game = 1
        while (game < 6){
            console.log('---------------')
            console.log(`Game ${game}`)
            await question_food()
            await question_activity()
            game += 1;
        }
    }
    catch{
    }
}

